export default function hasMatchNumber(target, numbers, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === 0) {
        return true;
    }

    if (target < 0) {
        return false;
    }

    for (const number of numbers) {
        const remainder = target - number;

        if (hasMatchNumber(remainder, numbers, memo)) {
            memo[target] = true;

            return true;
        }
    }

    memo[target] = false;

    return false;
}
