export default function getBestSum(target, numbers) {
    const table = new Array(target + 1).fill(null);

    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (const number of numbers) {
                const current = table[i + number];
                const newArray = [...table[i], number];

                if (!current || current.length > newArray.length) {
                    table[i + number] = newArray;
                }
            }
        }
    }

    return table[target];
}
