import getMatchStrings from '../../../memoization/strings/getMatchStrings';

describe('getMatchStrings', () => {
    test('should return the ways array that the set of prefixes constructs the target', () => {
        expect(getMatchStrings('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
            .toEqual([
                ['ab', 'cd', 'ef'],
                ['ab', 'c', 'def'],
                ['abc', 'def'],
                ['abcd', 'ef'],
            ]);

        expect(getMatchStrings('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
            .toEqual([]);

        expect(getMatchStrings('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
            .toEqual([
                ['purp', 'le'],
                ['p', 'ur', 'p', 'le'],
            ]);

        expect(getMatchStrings('aaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']))
            .toEqual([]);
    });
});
