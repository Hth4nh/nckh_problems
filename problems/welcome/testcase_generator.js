function getRandom(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

function solve(name) {
    return `Hello ${name}, welcome to HUMGCoder!`;
}

function create(maxLen) {
    let nameLen = getRandom(1, maxLen);
    let name = "";
    for (let i = 0; i < nameLen; i++) {
        let charCode = getRandom(0, 1) === 0 ? getRandom(65, 90) : getRandom(97, 122);
        name += String.fromCharCode(charCode);
    }

    let result = solve(name);

    return {
        "isVisible": false,
        "output": {
            "name": "result",
            "type": "string",
            "value": JSON.stringify(result)
        },
        "params": [
            {
                "name": "name",
                "type": "string",
                "value": JSON.stringify(name)
            }
        ]
    };
}

function main() {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        let maxLen;
        if (i < 50) {
            maxLen = 10;
        } else {
            maxLen = 100;
        }

        arr.push(create(maxLen));
    }

    let obj = structuredClone(window.data);
    obj.cases.push(...arr);

    console.log(JSON.stringify(obj, null, 2));
}

main();