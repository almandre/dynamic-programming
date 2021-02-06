export default function countMatchStrings(target, prefixes, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return 1;
    }

    let count = 0;

    for (const prefix of prefixes) {
        if (target.startsWith(prefix)) {
            const suffix = target.substring(prefix.length);

            count += countMatchStrings(suffix, prefixes, memo);
        }
    }

    memo[target] = count;

    return count;
}
