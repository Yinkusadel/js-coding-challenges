const aVeryBigSum = require('./challenge');

describe('sums a very large array of integers', () => {
  test('adds the integers in the array', () => {
    expect(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toBe(
      5000000015,
    );
  });

  test('adds the integers in the array', () => {
    expect(
      aVeryBigSum([
        1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010,
        1007514041, 1007548981, 1004402249,
      ]),
    ).toBe(10047338126);
  });
});
