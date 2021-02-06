import countMatchStrings from '../../../tabulation/strings/countMatchStrings';

describe('countMatchStrings', () => {
    test('should return the ways number that the set of prefixes constructs the target', () => {
        expect(countMatchStrings('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])).toBe(1);
        expect(countMatchStrings('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])).toBe(0);
        expect(countMatchStrings('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])).toBe(4);
        expect(countMatchStrings('purple', ['purp', 'p', 'ur', 'le', 'purpl'])).toBe(2);
        expect(countMatchStrings('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
            'e',
            'ee',
            'eee',
            'eeee',
            'eeeee',
            'eeeeee',
        ])).toBe(0);
    });
});
