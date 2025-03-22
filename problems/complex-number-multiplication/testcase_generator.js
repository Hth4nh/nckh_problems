function getRandom(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

function complexNumberMultiply(num1, num2) {
    const [real1, imag1] = num1.slice(0, -1).split('+').map(Number);
    const [real2, imag2] = num2.slice(0, -1).split('+').map(Number);

    const realPart = real1 * real2 - imag1 * imag2;
    const imagPart = real1 * imag2 + real2 * imag1;

    return `${realPart}+${imagPart}i`;
}

function create() {
    const real1 = getRandom(-100, 100);
    const imag1 = getRandom(-100, 100);
    const real2 = getRandom(-100, 100);
    const imag2 = getRandom(-100, 100);

    const num1 = `${real1}+${imag1}i`;
    const num2 = `${real2}+${imag2}i`;

    const result = complexNumberMultiply(num1, num2);

    return {
        "isVisible": false,
        "output": {
            "name": "result",
            "type": "string",
            "value": JSON.stringify(result)
        },
        "params": [
            {
                "name": "num1",
                "type": "string",
                "value": JSON.stringify(num1)
            },
            {
                "name": "num2",
                "type": "string",
                "value": JSON.stringify(num2)
            }
        ]
    };
}

function main() {
    let arr = [];

    for (let i = 0; i < 50; i++) {
        arr.push(create());
    }

    let obj = structuredClone(window.data);
    obj.cases.push(...arr);

    console.log(JSON.stringify(obj, null, 2));
}

main();