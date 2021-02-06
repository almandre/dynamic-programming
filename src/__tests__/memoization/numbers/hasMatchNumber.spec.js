import hasMatchNumber from '../../../memoization/numbers/hasMatchNumber';

describe('hasMatchNumber', () => {
    test('should return if the set of numbers can result in target', () => {
        expect(hasMatchNumber(7, [2, 3])).toBeTruthy();
        expect(hasMatchNumber(7, [5, 3, 4, 7])).toBeTruthy();
        expect(hasMatchNumber(7, [2, 4])).toBeFalsy();
        expect(hasMatchNumber(8, [2, 3, 5])).toBeTruthy();
        expect(hasMatchNumber(9, [4, 2])).toBeFalsy();
        expect(hasMatchNumber(300, [7, 14])).toBeFalsy();
    });
});
