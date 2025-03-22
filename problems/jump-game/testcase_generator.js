function getRandom(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

function canJump(nums) {
    let reachable = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > reachable) {
            return false;
        }
        reachable = Math.max(reachable, i + nums[i]);
    }
    return true;
}

function create(maxN, maxJump) {
    let n = getRandom(1, maxN);
    const nums = [];
    for (let i = 0; i < n; i++) {
        nums.push(getRandom(0, maxJump));
    }

    let result = canJump(nums);

    return {
        "isVisible": false,
        "output": {
            "name": "result",
            "type": "boolean",
            "value": JSON.stringify(result)
        },
        "params": [
            {
                "name": "nums",
                "type": "array",
                "value": JSON.stringify(nums)
            }
        ]
    };
}

function main() {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        let maxN, maxJump;
        if (i < 20) {
            maxN = 20;
            maxJump = 10;
        } else if (i < 50) {
            maxN = 20;
            maxJump = 10;
        } else {
            maxN = 10000;
            maxJump = 100;
        }
        arr.push(create(maxN, maxJump));
    }

    let obj = structuredClone(window.data);
    obj.cases.push(...arr);

    console.log(JSON.stringify(obj, null, 2));
}

main();