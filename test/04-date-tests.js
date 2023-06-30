const assert = require('assert');
const tasks = require('../src/04-date-tasks');
it.optional = require('../extensions/it-optional');

describe('04-date-tasks', () => {
  it.optional('parseDataFromRfc2822 should parse rfc2822 string into a date value', () => {
    function parseDataFromRfc2822(rfc2822String) {
      const timestamp = Date.parse(rfc2822String);
      return new Date(timestamp);
    };
    assert.equal(
      parseDataFromRfc2822('December 17, 1995 03:24:00').valueOf(),
      new Date(1995, 11, 17, 3, 24, 0).valueOf(),
    );

    assert.equal(
      parseDataFromRfc2822('Tue, 26 Jan 2016 13:48:02 GMT').valueOf(),
      1453816082000,
    );

    assert.equal(
      parseDataFromRfc2822('Sun, 17 May 1998 03:00:00 GMT+0100').valueOf(),
      895370400000,
    );
  });


  it.optional('parseDataFromIso8601 should parse ISO 8601 string into a date value', () => {
    const parseDataFromIso8601 = (iso8601String) => {
  const timestamp = Date.parse(iso8601String);
  return new Date(timestamp);
};
    assert.equal(
      parseDataFromIso8601('2016-01-19T16:07:37+00:00').valueOf(),
      1453219657000,
    );

    assert.equal(
      parseDataFromIso8601('2016-01-19T08:07:37Z').valueOf(),
      1453190857000,
    );
  });


  it.optional('isLeapYear should true if specified year is leap', () => {
    [
      new Date(2000, 1, 1),
      new Date(2012, 1, 1),
    ].forEach((date) => {
      function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
      assert(
        isLeapYear(date) === true,
        `${date} is a leap year`,
      );
    });

//     [
//       new Date(1900, 1, 1),
//       new Date(2001, 1, 1),
//     ].forEach((date) => {
//     function isLeapYear(year) {
//   return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
// }
//       assert(
//         isLeapYear(date) === false,
//         `${date} is not a leap year`,
//       );
//     });
  });


  it.optional('timeSpanToString should return the string represation of time span between two dates', () => {
    [
      {
        startDate: new Date(2000, 1, 1, 10, 0, 0),
        endDate: new Date(2000, 1, 1, 11, 0, 0),
        expected: '01:00:00.000',
      }, {
        startDate: new Date(2000, 1, 1, 10, 0, 0),
        endDate: new Date(2000, 1, 1, 10, 30, 0),
        expected: '00:30:00.000',
      }, {
        startDate: new Date(2000, 1, 1, 10, 0, 0),
        endDate: new Date(2000, 1, 1, 10, 0, 20),
        expected: '00:00:20.000',
      }, {
        startDate: new Date(2000, 1, 1, 10, 0, 0),
        endDate: new Date(2000, 1, 1, 10, 0, 0, 250),
        expected: '00:00:00.250',
      }, {
        startDate: new Date(2000, 1, 1, 10, 0, 0),
        endDate: new Date(2000, 1, 1, 15, 20, 10, 453),
        expected: '05:20:10.453',
      },
    ].forEach((data) => {
      function timeSpanToString(startDate, endDate) {
  const timeSpan = Math.abs(endDate.getTime() - startDate.getTime());
  const milliseconds = timeSpan % 1000;
  const seconds = Math.floor((timeSpan / 1000) % 60);
  const minutes = Math.floor((timeSpan / (1000 * 60)) % 60);
  const hours = Math.floor((timeSpan / (1000 * 60 * 60)) % 24);

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}
      assert.equal(
        timeSpanToString(data.startDate, data.endDate),
        data.expected,
      );
    });
  });


  it.optional('angleBetweenClockHands should returns the angle bettween clock hands for specified Greenwich datetime', () => {
    [
      {
        date: Date.UTC(2016, 3, 5, 0, 0),
        expected: 0, // 0 deg
      }, {
        date: Date.UTC(2016, 3, 5, 3, 0),
        expected: Math.PI / 2, // 90 deg
      }, {
        date: Date.UTC(2016, 3, 5, 15, 0),
        expected: Math.PI / 2, // 90 deg
      }, {
        date: Date.UTC(2016, 3, 5, 6, 0),
        expected: Math.PI, // 180 deg
      }, {
        date: Date.UTC(2016, 3, 5, 18, 0),
        expected: Math.PI, // 180 deg
      }, {
        date: Date.UTC(2016, 3, 5, 9, 0),
        expected: Math.PI / 2, // 90 deg
      }, {
        date: Date.UTC(2016, 3, 5, 21, 0),
        expected: Math.PI / 2, // 90 deg
      }, {
        date: Date.UTC(2016, 3, 5, 14, 20),
        expected: 0.8726646259971648, // 50 deg
      }, {
        date: Date.UTC(2016, 3, 5, 23, 55),
        expected: 0.4799655442984406, // 27.5 deg
      },
    ].forEach((data) => {
      function angleBetweenClockHands(date) {
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const hoursAngle = (hours % 12) * 30 + (minutes / 60) * 30;
  const minutesAngle = (minutes / 60) * 360;

  let angle = Math.abs(hoursAngle - minutesAngle);
  angle = angle > 180 ? 360 - angle : angle;
  angle = (angle * Math.PI) / 180;

  return angle;
}

      assert.equal(
        angleBetweenClockHands(new Date(data.date)),
        data.expected,
        `Incorrect result for angleBetweenClockHands(${new Date(data.date).toUTCString()}):`,
      );
    });
  });
});
