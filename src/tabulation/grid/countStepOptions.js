export default function countStepOptions(n, m) {
    const table = new Array(n + 1)
        .fill()
        .map(() => new Array(m + 1).fill(0));

    table[1][1] = 1;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            const current = table[i][j];

            if (i + 1 <= n) {
                table[i + 1][j] += current;
            }

            if (j + 1 <= m) {
                table[i][j + 1] += current;
            }
        }
    }

    return table[n][m];
}
