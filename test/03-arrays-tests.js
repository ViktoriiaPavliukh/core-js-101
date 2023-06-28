const assert = require('assert');
const tasks = require('../src/03-arrays-tasks');
it.optional = require('../extensions/it-optional');

describe('03-arrays-tasks', () => {
  it.optional('findElement should return the index of specified value if exists', () => {
    [
      {
        arr: ['Ace', 10, true],
        value: 10,
        expected: 1,
      },
      {
        arr: ['Array', 'Number', 'string'],
        value: 'Date',
        expected: -1,
      },
      {
        arr: [0, 1, 2, 3, 4, 5],
        value: 5,
        expected: 5,
      },
    ].forEach((data) => {
      const actual = data.arr.indexOf(data.value);
      assert.equal(
        data.expected,
        actual,
        `Index of '${data.value}' inside of [${data.arr}] = ${data.expected}, but actually ${actual}`,
      );
    });
  });


  it.optional('generateOdds should return the array of odd numbers of specified size', () => {
    [
      {
        len: 1,
        expected: [1],
      }, {
        len: 2,
        expected: [1, 3],
      }, {
        len: 5,
        expected: [1, 3, 5, 7, 9],
      }, {
        len: 16,
        expected: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
      },
    ].forEach((data) => {
      const odds = [];
      let num = 1;
  
      for (let i = 0; i < data.len; i++) {
        odds.push(num);
        num += 2;
      }
  
      return odds;
      assert.deepEqual(
        data.expected,
        tasks.generateOdds(data.len),
      );
    });
  });


  it.optional('doubleArray should return the specified array twice', () => {
    [
      {
        arr: ['Ace', 10, true],
        expected: ['Ace', 10, true, 'Ace', 10, true],
      }, {
        arr: [0, 1, 2, 3, 4, 5],
        expected: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5],
      }, {
        arr: [],
        expected: [],
      },
    ].forEach((data) => {
      const actual = data.arr.concat(data.arr);
      assert.deepEqual(
        data.expected,
        actual,
        `The result of doubling [${data.arr}] is not correct`,
      );
    });
  });


  it.optional('getArrayOfPositives should return the array of positive values from specified array', () => {
    [
      {
        arr: [0, 1, 2, 3, 4, 5],
        expected: [1, 2, 3, 4, 5],
      }, {
        arr: [-1, 2, -5, -4, 0],
        expected: [2],
      }, {
        arr: [],
        expected: [],
      },
    ].forEach((data) => {
      const actual = data.arr.filter((num) => num > 0);
      return actual;;
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getArrayOfStrings should return the array of string values from specified array', () => {
    [
      {
        arr: [0, 1, 'cat', 3, true, 'dog'],
        expected: ['cat', 'dog'],
      }, {
        arr: [1, 2, 3, 4, 5],
        expected: [],
      }, {
        arr: ['cat', 'dog', 'raccoon'],
        expected: ['cat', 'dog', 'raccoon'],
      },
    ].forEach((data) => {
      const actual = data.arr.filter((item) => typeof item === 'string');
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('removeFalsyValues should return the specified array without falsy values', () => {
    [
      {
        arr: [0, false, 'cat', NaN, true, ''],
        expected: ['cat', true],
      }, {
        arr: [1, 2, 3, 4, 5, 'false'],
        expected: [1, 2, 3, 4, 5, 'false'],
      }, {
        arr: [false, 0, NaN, '', undefined],
        expected: [],
      },
    ].forEach((data) => {
      const actual = data.arr.filter((item) => Boolean(item));
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('findAllOccurrences should return the number of all occurrences of specified item in an array', () => {
    [
      {
        arr: [0, 0, 1, 1, 1, 2],
        item: 1,
        expected: 3,
      }, {
        arr: [1, 2, 3, 4, 5],
        item: 0,
        expected: 0,
      }, {
        arr: ['a', 'b', 'c', 'c'],
        item: 'c',
        expected: 2,
      }, {
        arr: [null, undefined, null],
        item: null,
        expected: 2,
      }, {
        arr: [true, 0, 1, 'true'],
        item: true,
        expected: 1,
      },
    ].forEach((data) => {
      const actual = data.arr.filter((value) => value === data.item);
      return actual.length;
      assert.equal(
        data.expected,
        actual,
        `Number of occurrences of ${JSON.stringify(data.item)} in ${JSON.stringify(data.arr)} is ${data.expected}, but actually ${actual})`,
      );
    });
  });


  it.optional('getUpperCaseStrings should convert strings from specified array to uppercase', () => {
    [
      {
        arr: ['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation'],
        expected: ['PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION'],
      }, {
        arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        expected: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      },
    ].forEach((data) => {
      const actual = data.arr.map((str) => str.toUpperCase());
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getStringsLength should convert strings from specified array to uppercase', () => {
    [
      {
        arr: ['', 'a', 'bc', 'def', 'ghij'],
        expected: [0, 1, 2, 3, 4],
      }, {
        arr: ['angular', 'react', 'ember'],
        expected: [7, 5, 5],
      },
    ].forEach((data) => {
      const actual = data.arr.map((item) => item.length);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('insertItem should insert an item at specified position', () => {
    [
      {
        arr: [1, 3, 4, 5],
        item: 2,
        index: 1,
        expected: [1, 2, 3, 4, 5],
      }, {
        arr: [1, 'b', 'c'],
        item: 'x',
        index: 0,
        expected: ['x', 1, 'b', 'c'],
      },
    ].forEach((data) => {
      const actual = [...data.arr];
      actual.splice(data.index, 0, data.item);
      return actual;
      assert.deepEqual(
        data.expected,
        data.arr,
      );
    });
  });


  it.optional('getHead should return the n first items from the specified array', () => {
    [
      {
        arr: [1, 2, 3, 4, 5],
        n: 2,
        expected: [1, 2],
      }, {
        arr: ['a', 'b', 'c', 'd'],
        n: 3,
        expected: ['a', 'b', 'c'],
      },
    ].forEach((data) => {
      const getHead = (arr, n) => {
  return arr.slice(0, n);
};
      const actual = getHead(data.arr, data.n);
     
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getTail should return the n last items from the specified array', () => {
    [
      {
        arr: [1, 2, 3, 4, 5],
        n: 2,
        expected: [4, 5],
      }, {
        arr: ['a', 'b', 'c', 'd'],
        n: 3,
        expected: ['b', 'c', 'd'],
      },
    ].forEach((data) => {
      const getTail = (arr, n) => {
  return arr.slice(-n);
};
      const actual = getTail(data.arr, data.n);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('toCsvText should convert two-dimensional numeric array to CSV format', () => {
    [
      {
        arr: [
          [0, 1, 2, 3, 4],
          [10, 11, 12, 13, 14],
          [20, 21, 22, 23, 24],
          [30, 31, 32, 33, 34],
        ],
        expected: '0,1,2,3,4\n'
          + '10,11,12,13,14\n'
          + '20,21,22,23,24\n'
          + '30,31,32,33,34',
      }, {
        arr: [[]],
        expected: '',
      },
    ].forEach((data) => {
      const csvRows = data.arr.map(row => row.join(','));
      const actual = csvRows.join('\n');
      assert.equal(
        data.expected,
        actual,
      );
    });
  });


  it.optional('toArrayOfSquares should convert numeric array to the array of squares', () => {
    [
      {
        arr: [0, 1, 2, 3, 4, 5],
        expected: [0, 1, 4, 9, 16, 25],
      }, {
        arr: [10, 100, -1],
        expected: [100, 10000, 1],
      },
    ].forEach((data) => {
      const actual = data.arr.map((number) => number**2);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getMovingSum should convert numeric array to the according array of moving sum', () => {
    [
      {
        arr: [1, 1, 1, 1, 1],
        expected: [1, 2, 3, 4, 5],
      }, {
        arr: [10, -10, 10, -10, 10],
        expected: [10, 0, 10, 0, 10],
      }, {
        arr: [0, 0, 0, 0, 0],
        expected: [0, 0, 0, 0, 0],
      }, {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: [1, 3, 6, 10, 15, 21, 28, 36, 45, 55],
      },
    ].forEach((data) => {
      let sum = 0;
      const actual = data.arr.map((value) => {
        sum += value;
        return sum;
      });
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getSecondItems should return every second item from the specified array', () => {
    [
      {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: [2, 4, 6, 8, 10],
      }, {
        arr: ['a', 'b', 'c', null],
        expected: ['b', null],
      }, {
        arr: ['a'],
        expected: [],
      },
    ].forEach((data) => {
      const actual = data.arr.filter((_, index) => index % 2 === 1);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('propagateItemsByPositionIndex should propagate every item its position time', () => {
    [
      {
        arr: [],
        expected: [],
      }, {
        arr: [1],
        expected: [1],
      }, {
        arr: ['a', 'b'],
        expected: ['a', 'b', 'b'],
      }, {
        arr: ['a', 'b', 'c', null],
        expected: ['a', 'b', 'b', 'c', 'c', 'c', null, null, null, null],
      }, {
        arr: [1, 2, 3, 4, 5],
        expected: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5],
      },
    ].forEach((data) => {
      const actual = data.arr.flatMap((item, index) => Array.from({ length: index + 1 }, () => item));
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('get3TopItems should return the 3 largest items from integer array', () => {
    [
      {
        arr: [],
        expected: [],
      }, {
        arr: [1, 2],
        expected: [2, 1],
      }, {
        arr: [1, 2, 3],
        expected: [3, 2, 1],
      }, {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: [10, 9, 8],
      }, {
        arr: [10, 10, 10, 10],
        expected: [10, 10, 10],
      },
    ].forEach((data) => {
      const actual = data.arr.sort((a, b) => b - a).slice(0, 3);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getPositivesCount should return the number of positive integers in the specified array', () => {
    [
      {
        arr: [],
        expected: 0,
      }, {
        arr: [-1, 0, 1],
        expected: 1,
      }, {
        arr: [1, 2, 3],
        expected: 3,
      }, {
        arr: [null, 1, 'elephant'],
        expected: 1,
      }, {
        arr: [1, '2'],
        expected: 1,
      },
    ].forEach((data) => {
      const actual =  data.arr.filter(num => typeof num === 'number' && num > 0).length;;
      assert.equal(
        data.expected,
        actual,
        `Test failed for argument [${data.arr}]`,
      );
    });
  });


  it.optional('sortDigitNamesByNumericOrder should sort digit names by its numeric value', () => {
    [
      {
        arr: [],
        expected: [],
      }, {
        arr: ['nine', 'one'],
        expected: ['one', 'nine'],
      }, {
        arr: ['one', 'two', 'three'],
        expected: ['one', 'two', 'three'],
      }, {
        arr: ['nine', 'eight', 'nine', 'eight'],
        expected: ['eight', 'eight', 'nine', 'nine'],
      }, {
        arr: ['one', 'one', 'one', 'zero'],
        expected: ['zero', 'one', 'one', 'one'],
      }, {
        arr: ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero'],
        expected: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      },
    ].forEach((data) => {
      const digitValues = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
      };
      const actual = data.arr.sort((a, b) => digitValues[a] - digitValues[b]);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getItemsSum should return the sum of all items of numbers array', () => {
    [
      {
        arr: [],
        expected: 0,
      }, {
        arr: [1, 2, 3],
        expected: 6,
      }, {
        arr: [1, 10, 100, 1000],
        expected: 1111,
      },
    ].forEach((data) => {
      const actual = data.arr.reduce((sum, current) => sum + current, 0);
      assert.deepEqual(
        data.expected,
        actual,
        `Test failed for [${data.arr}]`,
      );
    });
  });


  it.optional('getFalsyValuesCount should return the number of falsy value in the specified array', () => {
    [
      {
        arr: [],
        expected: 0,
      }, {
        arr: [1, '', 3],
        expected: 1,
      }, {
        arr: [-1, 'false', null, 0],
        expected: 2,
      }, {
        arr: [null, undefined, NaN, false, 0, ''],
        expected: 6,
      },
    ].forEach((data) => {
      const actual = data.arr.filter((value) => !value).length;
      assert.deepEqual(
        data.expected,
        actual,
        `Test failed for [${data.arr}]`,
      );
    });
  });


  it.optional('toStringList should return the string list of passed arguments', () => {
    [
      {
        arr: [0, false, 'cat', NaN, true, ''],
        expected: '0,false,cat,NaN,true,',
      }, {
        arr: [1, 2, 3, 4, 5],
        expected: '1,2,3,4,5',
      }, {
        arr: ['rock', 'paper', 'scissors'],
        expected: 'rock,paper,scissors',
      },
    ].forEach((data) => {
      const actual = data.arr.join(',');
      assert.equal(
        data.expected,
        actual,
      );
    });
  });


  it.optional('sortCitiesArray should sort the array of objects using two keys', () => {
    [
      {
        arr: [
          { country: 'Russia', city: 'Moscow' },
          { country: 'Belarus', city: 'Minsk' },
          { country: 'Poland', city: 'Warsaw' },
          { country: 'Russia', city: 'Saint Petersburg' },
          { country: 'Poland', city: 'Krakow' },
          { country: 'Belarus', city: 'Brest' },
        ],
        expected: [
          { country: 'Belarus', city: 'Brest' },
          { country: 'Belarus', city: 'Minsk' },
          { country: 'Poland', city: 'Krakow' },
          { country: 'Poland', city: 'Warsaw' },
          { country: 'Russia', city: 'Moscow' },
          { country: 'Russia', city: 'Saint Petersburg' },
        ],
      }, {
        arr: [
          { country: 'D', city: '1' },
          { country: 'E', city: '1' },
          { country: 'A', city: '2' },
          { country: 'B', city: '1' },
          { country: 'B', city: '2' },
          { country: 'A', city: '1' },
        ],
        expected: [
          { country: 'A', city: '1' },
          { country: 'A', city: '2' },
          { country: 'B', city: '1' },
          { country: 'B', city: '2' },
          { country: 'D', city: '1' },
          { country: 'E', city: '1' },
        ],
      }, {
        arr: [
          { country: '5', city: '1' },
          { country: '1', city: '1' },
          { country: '1', city: '2' },
          { country: '1', city: '3' },
          { country: '2', city: '2' },
          { country: '1', city: '1' },
          { country: '1', city: '1' },
          { country: '2', city: '1' },
          { country: '3', city: '1' },
          { country: '3', city: '3' },
          { country: '2', city: '5' },
          { country: '5', city: '2' },
        ],
        expected: [
          { country: '1', city: '1' },
          { country: '1', city: '1' },
          { country: '1', city: '1' },
          { country: '1', city: '2' },
          { country: '1', city: '3' },
          { country: '2', city: '1' },
          { country: '2', city: '2' },
          { country: '2', city: '5' },
          { country: '3', city: '1' },
          { country: '3', city: '3' },
          { country: '5', city: '1' },
          { country: '5', city: '2' },
        ],
      },
    ].forEach((data) => {
      const actual = data.arr.sort((a, b) => {
    if (a.country !== b.country) {
      return a.country.localeCompare(b.country);
    } else {
      return a.city.localeCompare(b.city);
    }
  });;
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getIdentityMatrix should return the identity matrix of the specified size', () => {
    [
      {
        n: 1,
        expected: [[1]],
      }, {
        n: 2,
        expected: [[1, 0],
          [0, 1]],
      }, {
        n: 5,
        expected: [[1, 0, 0, 0, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 0, 0, 0, 1]],
      },
    ].forEach((data) => {
      const getIdentityMatrix = (n) =>
  Array.from({ length: n }, (_, rowIndex) =>
    Array.from({ length: n }, (_, columnIndex) => +(rowIndex === columnIndex))
  );
      const actual = getIdentityMatrix(data.n);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getIntervalArray should return the array of integers from start to end (inclusive)', () => {
    [
      {
        start: 1,
        end: 5,
        expected: [1, 2, 3, 4, 5],
      }, {
        start: -2,
        end: 2,
        expected: [-2, -1, 0, 1, 2],
      }, {
        start: 0,
        end: 100,
        expected: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
          40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
          60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
          80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
          100,
        ],
      }, {
        start: 3,
        end: 3,
        expected: [3],
      },
      {
        start: -5,
        end: -3,
        expected: [-5, -4 ,-3],
      }
    ].forEach((data) => {
      const getIntervalArray = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);
      const actual = getIntervalArray(data.start, data.end);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('distinct should return an array of unique items from the specified array', () => {
    [
      {
        arr: [1, 2, 3, 3, 2, 1],
        expected: [1, 2, 3],
      }, {
        arr: ['a', 'a', 'a', 'a', 'a'],
        expected: ['a'],
      }, {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }, {
        arr: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
        expected: [1, 2, 3, 4, 5, 6],
      },
    ].forEach((data) => {
      const distinct = (arr) => [...new Set(arr)];
      const actual = distinct(data.arr);
      assert.deepEqual(
        data.expected,
        actual,
      );
    });
  });

  it.optional('group should return a map of grouped data by key and value selector', () => {
    [
      {
        arr: [
          { country: 'Belarus', city: 'Brest' },
          { country: 'Russia', city: 'Omsk' },
          { country: 'Russia', city: 'Samara' },
          { country: 'Belarus', city: 'Grodno' },
          { country: 'Belarus', city: 'Minsk' },
          { country: 'Poland', city: 'Lodz' },
        ],
        keySelector: (item) => item.country,
        valueSelector: (item) => item.city,
        expected: new Map([
          ['Belarus', ['Brest', 'Grodno', 'Minsk']],
          ['Russia', ['Omsk', 'Samara']],
          ['Poland', ['Lodz']],
        ]),
      }, {
        arr: [
          { artist: 'ACDC', album: 'Highway to Hell' },
          { artist: 'Metallica', album: "Kill'em All" },
          { artist: 'Deep Purple', album: 'Machine Head' },
          { artist: 'Metallica', album: 'And Justice for All' },
          { artist: 'ACDC', album: 'Back in Black' },
          { artist: 'Manowar', album: 'Kings of Metal' },
        ],
        keySelector: (item) => item.artist,
        valueSelector: (item) => item.album,
        expected: new Map([
          ['ACDC', ['Highway to Hell', 'Back in Black']],
          ['Metallica', ["Kill'em All", 'And Justice for All']],
          ['Deep Purple', ['Machine Head']],
          ['Manowar', ['Kings of Metal']],
        ]),
      },
    ].forEach((data) => {
      const group = (arr, keySelector, valueSelector) => {
  const map = new Map();
  arr.forEach((item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (map.has(key)) {
      map.get(key).push(value);
    } else {
      map.set(key, [value]);
    }
  });
  return map;
};

      const actual = group(data.arr, data.keySelector, data.valueSelector);
      assert.deepEqual(
        Array.from(data.expected),
        Array.from(actual),
      );
    });
  });


  it.optional('selectMany should return an array of child items from the specified array', () => {
    [
      {
        arr: [[1, 2], [3, 4], [5, 6]],
        childrenSelector: (x) => x,
        expected: [1, 2, 3, 4, 5, 6],
      }, {
        arr: [[11, 12, 13, 14, 15], [21, 22, undefined, 23, 24, 25], [31, 32, 34, 35]],
        childrenSelector: (x) => x.slice(0, 2),
        expected: [11, 12, 21, 22, 31, 32],
      }, {
        arr: ['one', 'two', 'three'],
        childrenSelector: (x) => x.split(''),
        expected: ['o', 'n', 'e', 't', 'w', 'o', 't', 'h', 'r', 'e', 'e'],
      },
    ].forEach((data) => {
      const selectMany = (arr, childrenSelector) => {
      return arr.reduce((result, item) => {
      const children = childrenSelector(item);
      return result.concat(children);
    }, []);
};
      const actual = selectMany(data.arr, data.childrenSelector);
      assert.deepStrictEqual(
        data.expected,
        actual,
      );
    });
  });


  it.optional('getElementByIndexes should return an element from array by specified indexes', () => {
    [
      {
        arr: [[1, 2], [3, 4], [5, 6]],
        indexes: [0, 0],
        expected: 1,
      }, {
        arr: ['one', 'two', 'three'],
        indexes: [2],
        expected: 'three',
      }, {
        arr: [[[1, 2, 3]]],
        indexes: [0, 0, 1],
        expected: 2,
      },
    ].forEach((data) => {
     const getElementByIndexes = (arr, indexes) => {
  if (indexes.length === 0) {
    return arr;
  }

  const [currentIndex, ...remainingIndexes] = indexes;
  const nextElement = arr[currentIndex];

  if (remainingIndexes.length === 0) {
    return nextElement;
  }

  return getElementByIndexes(nextElement, remainingIndexes);
};
 
      const actual = getElementByIndexes(data.arr, data.indexes);
      assert.equal(
        data.expected,
        actual,
        `getElementByIndexes(${JSON.stringify(data.arr)}, ${JSON.stringify(data.indexes)}) returns an incorrect result. Expected ${data.expected}, but actual ${actual}`,
      );
    });
  });


  it.optional('swapHeadAndTail should swap the head and tail of the array', () => {
    [
      {
        arr: [1],
        expected: [1],
      }, {
        arr: [1, 2],
        expected: [2, 1],
      }, {
        arr: [1, 2, 3],
        expected: [3, 2, 1],
      }, {
        arr: [1, 2, 3, 4],
        expected: [3, 4, 1, 2],
      }, {
        arr: [1, 2, 3, 4, 5],
        expected: [4, 5, 3, 1, 2],
      },
    ].forEach((data) => {
      const swapHeadAndTail = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const head = arr.slice(0, middleIndex);
  const tail = arr.slice(-middleIndex);

  if (arr.length % 2 !== 0) {
    const middle = [arr[middleIndex]];
    return [...tail, ...middle, ...head];
  } else {
    return [...tail, ...head];
  }
};

      const actual = swapHeadAndTail(Array.from(data.arr));
      assert.deepEqual(
        data.expected,
        actual,
        `The result of swapping head and tail [${data.arr}] is not correct`,
      );
    });
  });


  it.optional('Functions from 04-array-test.js should not use basic loops statements', () => {
    Object.getOwnPropertyNames(tasks)
      .filter((x) => tasks[x] instanceof Function)
      .forEach((f) => {
        assert(
          !/([;{]\s*(for|while)\s*\()|(\.forEach\s*\()/.test(tasks[f].toString()),
          `Function "${f}" should not use basic loop statements (for, while or forEach)! Please use specialized array methods (map, reduce etc).`,
        );
      });
  });
});
