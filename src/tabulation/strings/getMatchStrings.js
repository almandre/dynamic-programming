export default function getMatchStrings(target, prefixes) {
    const table = new Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];
    for (let i = 0; i <= target.length; i++) {
        for (const prefix of prefixes) {
            if (target.slice(i, i + prefix.length) === prefix) {
                const newArray = table[i].map(array => [...array, prefix]);
                table[i + prefix.length].push(...newArray);
            }
        }
    }

    return table[target.length];
}
