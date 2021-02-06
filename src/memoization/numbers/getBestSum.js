export default function getBestSum(target, numbers, memo = {}) {
    if (target in memo) {
        return memo[target];
    }

    if (target === 0) {
        return [];
    }

    if (target < 0) {
        return null;
    }

    let best;

    for (const number of numbers) {
        const remainder = target - number;

        const array = getBestSum(remainder, numbers, memo);

        if (array) {
            const combination = [...array, number];

            if (!best || combination.length < best.length) {
                best = combination;
            }
        }
    }

    memo[target] = best;

    return best;
}
