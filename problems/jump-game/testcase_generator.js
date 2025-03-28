function getRandom(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

function solve(nums) {
    let reachable = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > reachable) {
            return false;
        }
        reachable = Math.max(reachable, i + nums[i]);
    }
    return true;
}

function create(maxN, maxJump, makeReachable) {
    let n = getRandom(1, maxN);
    const nums = [];

    if (makeReachable) {
        // Create a reachable array
        let currentPosition = 0;
        while (currentPosition < n - 1) {
            let jump = getRandom(1, Math.min(maxJump, n - 1 - currentPosition));
            nums[currentPosition] = jump;
            currentPosition += getRandom(Math.floor(jump / 3), jump);
        }
        // Fill remaining with random values
        for (let i = 0; i < n; i++) {
            if (nums[i] === undefined) {
                nums[i] = getRandom(0, maxJump);
            }
        }
    } else {
        // Create an unreachable array (more likely)
        for (let i = 0; i < n - 1; i++) {
            let jump = Math.max(0, getRandom(Math.floor(-1 * (n - i - 2) / 2), n - i - 2))
            nums.push(jump);
        }
        nums.push(0);
    }
    

    let result = solve(nums);

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

        if (i < 30) {
            maxN = 10;
            maxJump = 5;
        }
         else if (i < 60) {
            maxN = 100;
            maxJump = 50;
        }
        else if (i < 80) {
            maxN = 1000;
            maxJump = 5000;
        }
        else {
            maxN = 10000;
            maxJump = 100000;
        }
        
        let makeReachable = (i % 2 === 0); // Alternate between making it reachable or not

        arr.push(create(maxN, maxJump, makeReachable));
    }

    let obj = structuredClone(window.data);
    obj.cases.push(...arr);

    console.log(JSON.stringify(obj, null, 2));
}

main();