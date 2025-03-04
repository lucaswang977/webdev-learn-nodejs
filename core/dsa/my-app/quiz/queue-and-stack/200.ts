function numIslands(grid: string[][]): number {
  let current = 0;
  const visited: Map<string, number> = new Map();

  const m = grid.length;
  const n = grid[0].length;

  const setVisited = (row, col) => {
    visited.set(`${row},${col}`, current);
  };

  const isVisited = (row, col) => visited.has(`${row},${col}`);

  function bfs(row: number, col: number) {
    const queue = [[row, col]];
    setVisited(row, col);

    while (queue.length > 0) {
      const [i, j] = queue.shift()!;
      const neighbors = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];

      for (const [dx, dy] of neighbors) {
        const ii = i + dx;
        const jj = j + dy;

        if (
          ii >= 0 &&
          ii < m &&
          jj >= 0 &&
          jj < n &&
          grid[ii][jj] === "1" &&
          !isVisited(ii, jj)
        ) {
          queue.push([ii, jj]);
          setVisited(ii, jj);
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && !isVisited(i, j)) {
        current++;
        bfs(i, j);
      }
    }
  }

  return current;
}

// function numIslandsWithDFS(grid: string[][]): number {
//   const islands: Map<string, number> = new Map();
//   let current = 0;
//   const m = grid.length;
//   const n = grid[0].length;

//   function walkFrom(row: number, col: number) {
//     if (grid[row][col] !== "1") return;

//     if (!islands.has(`${row},${col}`)) {
//       current++;
//       islands.set(`${row},${col}`, current);
//       // console.log("set: ", row, col, current);
//     }

//     // console.log("walk start from:", row, col);
//     const neighbors = [
//       [-1, 0],
//       [1, 0],
//       [0, -1],
//       [0, 1],
//     ];
//     let separated = true;
//     for (const v of neighbors) {
//       const ii = row + v[0];
//       const jj = col + v[1];
//       if (
//         grid[ii] !== undefined &&
//         grid[ii][jj] !== undefined &&
//         grid[ii][jj] === "1"
//       ) {
//         if (!islands.has(`${ii},${jj}`)) {
//           islands.set(`${ii},${jj}`, current);
//           // console.log("goto: ", ii, jj);
//           walkFrom(ii, jj);
//         }
//       }
//     }
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       walkFrom(i, j);
//     }
//   }

//   return current;
// }

export default function testQuiz() {
  let grid;

  // 1
  grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  console.log(numIslands(grid));

  // 3
  grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  console.log(numIslands(grid));

  // 2
  grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["1", "0", "1", "0", "0"],
    ["1", "1", "1", "0", "1"],
  ];
  console.log(numIslands(grid));

  // 1
  grid = [["1"]];
  console.log(numIslands(grid));
}
