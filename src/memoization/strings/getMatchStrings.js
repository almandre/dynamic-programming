export default function getMatchStrings(target, prefixes, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return [[]];
    }

    const array = [];

    for (const prefix of prefixes) {
        if (target.startsWith(prefix)) {
            const suffix = target.substring(prefix.length);
            const subArray = getMatchStrings(suffix, prefixes, memo);
            const combinations = subArray.map(item => [prefix, ...item]);

            array.push(...combinations);
        }
    }

    memo[target] = array;

    return array;
}
