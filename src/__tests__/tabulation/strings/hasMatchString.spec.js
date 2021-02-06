import hasMatchString from '../../../tabulation/strings/hasMatchString';

describe('hasMatchString', () => {
    test('should return if the prefixes combination construct the target', () => {
        expect(hasMatchString('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])).toBeTruthy();
        expect(hasMatchString('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])).toBeFalsy();
        expect(hasMatchString('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])).toBeTruthy();
        expect(hasMatchString('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
            'e',
            'ee',
            'eee',
            'eeee',
            'eeeee',
            'eeeeee',
        ])).toBeFalsy();
    });
});
