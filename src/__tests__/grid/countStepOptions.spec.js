import countStepOptions from '../../grid/countStepOptions';

describe('countStepOptions', () => {
    test('should return all the options to reach the destination', () => {
        expect(countStepOptions(1, 1)).toBe(1);
        expect(countStepOptions(2, 3)).toBe(3);
        expect(countStepOptions(3, 2)).toBe(3);
        expect(countStepOptions(3, 3)).toBe(6);
        expect(countStepOptions(18, 18)).toBe(2333606220);
    });
});
