function solveNQueens(n) {
    const results = [];

    // backtrack
    function solveNQueensHelper(row, cols, diagonals1, diagonals2, board) {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diagonals1.has(row - col) || diagonals2.has(row + col)) {
                continue;
            }

            cols.add(col);
            diagonals1.add(row - col);
            diagonals2.add(row + col);
            board[row][col] = 'Q';

            solveNQueensHelper(row + 1, cols, diagonals1, diagonals2, board);

            cols.delete(col);
            diagonals1.delete(row - col);
            diagonals2.delete(row + col);
            board[row][col] = '.';
        }
    }

    const board = Array(n).fill(null).map(() => Array(n).fill('.'));
    solveNQueensHelper(0, new Set(), new Set(), new Set(), board);
    return results;
}

function create(n) {
    let result = solveNQueens(n);

    return {
        "isVisible": false,
        "output": {
            "name": "result",
            "type": "array",
            "value": JSON.stringify(result)
        },
        "params": [
            {
                "name": "n",
                "type": "number",
                "value": JSON.stringify(n)
            }
        ]
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function main() {
    let arr = [];

    const nValues = [2, 3, 5, 6, 7, 8, 9];
    shuffleArray(nValues);

    for (let n of nValues) {
        arr.push(create(n));
    }

    let obj = structuredClone(window.data);
    obj.cases.push(...arr);

    console.log(JSON.stringify(obj, null, 2));
}

main();
