export default function countMatchStrings(target, prefixes) {
    const table = new Array(target.length + 1).fill(0);

    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
        for (const prefix of prefixes) {
            if (target.slice(i, i + prefix.length) === prefix) {
                table[i + prefix.length] += table[i];
            }
        }
    }

    return table[target.length];
}
