export default function getSumOption(target, numbers) {
    const table = new Array(target + 1).fill(null);

    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (const number of numbers) {
                table[i + number] = [...table[i], number];
            }
        }
    }

    return table[target];
}
