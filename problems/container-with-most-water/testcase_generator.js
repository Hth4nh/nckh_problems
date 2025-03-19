function getRandom(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

function solve(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

function create(maxN, maxH) {
    let n = getRandom(2, maxN);
    
    const height = [];
    for (let i = 0; i < n; i++) {
        height.push(getRandom(0, maxH));
    }

    let result = solve(height)

    return {
      "isVisible": false,
      "output": {
        "name": "result",
        "type": "number",
        "value": JSON.stringify(result)
      },
      "params": [
        {
          "name": "height",
          "type": "array",
          "value": JSON.stringify(height)
        }
      ]
    };
}

function main() {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        let maxN, maxH;
        if (i < 40) {
            maxN = 100;
            maxH = 100;
        }
        else if (i < 60) {
            maxN = 1000;
            maxH = 1000;
        }
        else if (i < 80) {
            maxN = 10000;
            maxH = 5000;
        }
        else {
            maxN = 100000;
            maxH = 10000;
        }

        arr.push(create(maxN, maxH));
    }
    
    let obj = structuredClone(window.data);
    obj.cases.push(...arr);

    console.log(JSON.stringify(obj, null, 2));
}

main();
