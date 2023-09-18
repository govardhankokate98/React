const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the value of N: ', (n) => {
    n = parseInt(n);

    rl.question(`Enter ${n} numbers separated by space: `, (numbersInput) => {
        const numbers = numbersInput.split(' ').map(Number);

        const dp = new Array(n).fill().map(() => new Array(n).fill(0));

        for (let i = 0; i < n; i++) {
            dp[i][i] = numbers[i];
        }

        for (let len = 2; len <= n; len++) {
            for (let i = 0; i <= n - len; i++) {
                const j = i + len - 1;
                dp[i][j] = Math.max(numbers[i] - dp[i + 1][j], numbers[j] - dp[i][j - 1]);
            }
        }

        const lastNumber = dp[0][n - 1];
        console.log(`The last number left on the sheet is: ${lastNumber}`);

        rl.close();
    });
});