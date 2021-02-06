export default function hasMatchString(target, prefixes) {
    const table = new Array(target.length + 1).fill(false);

    table[0] = true;
    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (const prefix of prefixes) {
                if (target.slice(i, prefix.length + i) === prefix) {
                    table[prefix.length + i] = true;
                }
            }
        }
    }

    return table[target.length];
}
