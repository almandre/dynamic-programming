import getBestSum from '../../numbers/getBestSum';

describe('getBestSum', () => {
    test('should return the shortest set of numbers that result in target', () => {
        expect(getBestSum(7, [2, 3])).toEqual([3, 2, 2]);
        expect(getBestSum(7, [5, 3, 4, 7])).toEqual([7]);
        expect(getBestSum(7, [2, 4])).toBeFalsy();
        expect(getBestSum(8, [2, 3, 5])).toEqual([5, 3]);
        expect(getBestSum(8, [1, 4, 5])).toEqual([4, 4]);
        expect(getBestSum(100, [1, 2, 5, 25])).toEqual([25, 25, 25, 25]);
    });
});
