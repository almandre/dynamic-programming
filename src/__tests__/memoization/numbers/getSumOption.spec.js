import getSumOption from '../../../memoization/numbers/getSumOption';

describe('getSumOption', () => {
    test('should return one of the set of numbers that result in target', () => {
        expect(getSumOption(7, [2, 3])).toEqual([3, 2, 2]);
        expect(getSumOption(7, [5, 3, 4, 7])).toEqual([4, 3]);
        expect(getSumOption(7, [2, 4])).toBeNull();
        expect(getSumOption(8, [2, 3, 5])).toEqual([2, 2, 2, 2]);
        expect(getSumOption(9, [4, 2])).toBeNull();
        expect(getSumOption(300, [7, 14])).toBeNull();
    });
});
