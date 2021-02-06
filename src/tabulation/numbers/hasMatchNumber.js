export default function hasMatchNumber(target, numbers) {
    const table = new Array(target + 1).fill(false);

    table[0] = true;
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (const number of numbers) {
                table[i + number] = true;
            }
        }
    }

    return table[target];
}
