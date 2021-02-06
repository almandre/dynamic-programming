export default function getSumOption(target, numbers, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === 0) {
        return [];
    }

    if (target < 0) {
        return null;
    }

    for (const number of numbers) {
        const remainder = target - number;

        const array = getSumOption(remainder, numbers, memo);

        if (array) {
            array.push(number);

            memo[target] = array;

            return array;
        }
    }

    memo[target] = null;

    return null;
}
