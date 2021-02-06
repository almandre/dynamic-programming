import getMatchStrings from '../../../tabulation/strings/getMatchStrings';

describe('getMatchStrings', () => {
    test('should return the ways array that the set of prefixes constructs the target', () => {
        expect(getMatchStrings('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
            .toEqual([
                ['abc', 'def'],
                ['ab', 'c', 'def'],
                ['abcd', 'ef'],
                ['ab', 'cd', 'ef'],
            ]);

        expect(getMatchStrings('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
            .toEqual([]);

        expect(getMatchStrings('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
            .toEqual([
                ['purp', 'le'],
                ['p', 'ur', 'p', 'le'],
            ]);

        expect(getMatchStrings('aaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']))
            .toEqual([]);
    });
});
