function getRandom(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

function solve(n) {
    n = BigInt(n);
    // use matrix expo
    const mod = BigInt(1e9 + 7);

    function multiply(a, b) {
        let c = [[0n, 0n], [0n, 0n]];
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {
                    c[i][j] = (c[i][j] + a[i][k] * b[k][j]) % mod;
                }
            }
        }
        return c;
    }

    function power(a, n) {
        let res = [[1n, 0n], [0n, 1n]];
        while (n > 0n) {
            if (n % 2n === 1n) {
                res = multiply(res, a);
            }
            a = multiply(a, a);
            n /= 2n;
        }
        return res;
    }

    let fibMatrix = [[1n, 1n], [1n, 0n]];
    let resultMatrix = power(fibMatrix, n);
    return resultMatrix[0][1];
}

function create(maxN) {
    let n = BigInt(getRandom(1, maxN));
    let result = solve(n);

    return {
        isVisible: false,
        output: {
            "name": "result",
            "type": "number",
            "value": JSON.stringify(result)
        },
        params: [
            {
              "name": "n",
              "type": "number",
              "value": JSON.stringify(n)
            }
        ]
    };
}

function main() {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        let maxN;
        if (i < 40) {
            maxN = 1e2;
        }
        else if (i < 60) {
            maxN = 1e4;
        }
        else if (i < 80) {
            maxN = 1e9;
        }
        else {
            maxN = 1e18;
        }

        arr.push(create(maxN));
    }

    console.log(JSON.stringify(arr, null, 2));
}

main();
