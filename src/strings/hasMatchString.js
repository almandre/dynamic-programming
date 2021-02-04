export default function hasMatchString(target, prefixes, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === '') {
        return true;
    }

    for (const prefix of prefixes) {
        if (target.startsWith(prefix)) {
            const suffix = target.substring(prefix.length);

            if (hasMatchString(suffix, prefixes, memo)) {
                memo[target] = true;

                return true;
            }
        }
    }

    memo[target] = false;

    return false;
}
