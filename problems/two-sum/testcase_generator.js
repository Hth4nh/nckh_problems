function getRandom(minV, maxV) {
    return Math.floor(Math.random() * (maxV - minV + 1)) + minV;
}

function create(maxN, minV, maxV) {
    let n = getRandom(2, maxN);

    let target = getRandom(minV, maxV);
    let v1 = getRandom(minV + Math.max(0, target), maxV + Math.min(0, target));
    let v2 = target - v1;

    let res1, res2;
    while (res1 === res2) {
        res1 = getRandom(0, n - 1);
        res2 = getRandom(0, n - 1);
    }

    const arr = [];
    const set = new Set([v1, v2]);

    for (let i = 0; i < n; i++) {
        if (i === res1) {
            arr.push(v1);
        }
        else if (i === res2) {
            arr.push(v2);
        }
        else {
            let v = getRandom(minV, maxV);
            while (set.has(target - v)) {
                v = getRandom(minV, maxV);
            }

            arr.push(v);
            set.add(v);
        }
    }

    let input = `${n} ${target}\n${arr.join(" ")}`.split("\n");
    let output = `${res1} ${res2}`.split("\n");

    return { input, output };
}

function main() {
    let arr = [];

    for (let i = 0; i < 100; i++) {
        let maxN, minV, maxV;
        if (i < 40) {
            maxN = 1e2;
            minV = -1e2;
            maxV = 1e2;
        }
        else if (i < 60) {
            maxN = 1e3;
            minV = -1e4;
            maxV = 1e4;
        }
        else if (i < 80) {
            maxN = 1e4;
            minV = -1e6;
            maxV = 1e6;
        }
        else {
            maxN = 1e5;
            minV = -1e9;
            maxV = 1e9;
        }

        arr.push(create(maxN, minV, maxV));
    }

    console.log(JSON.stringify(arr, null, 2));
}

main();
