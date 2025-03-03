function numIslands(grid: string[][]): number {
  // Should be changed to BFS
  const islands: Map<string, number> = new Map();
  let current = 0;
  const m = grid.length;
  const n = grid[0].length;

  function walkFrom(row: number, col: number) {
    if (grid[row][col] !== "1") return;

    if (!islands.has(`${row},${col}`)) {
      islands.set(`${row},${col}`, current);
      console.log("set: ", row, col);
    }

    console.log("walk start from:", row, col);
    const neighbors = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    let separated = true;
    for (const v of neighbors) {
      const ii = row + v[0];
      const jj = col + v[1];
      if (
        grid[ii] !== undefined &&
        grid[ii][jj] !== undefined &&
        grid[ii][jj] === "1"
      ) {
        if (!islands.has(`${ii},${jj}`)) {
          islands.set(`${ii},${jj}`, current);
          console.log("goto: ", ii, jj);
          walkFrom(ii, jj);
        } else {
          separated = false;
          console.log("separated:", separated, row, col, ii, jj);
        }
      }
    }
    if (separated) {
      current++;
      console.log("new start:", row, col, current);
      islands.set(`${row},${col}`, current);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      walkFrom(i, j);
    }
  }

  return current;
}

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

  // // 3
  // grid = [
  //   ["1", "1", "0", "0", "0"],
  //   ["1", "1", "0", "0", "0"],
  //   ["0", "0", "1", "0", "0"],
  //   ["0", "0", "0", "1", "1"],
  // ];
  // console.log(numIslands(grid));

  // // 2
  // grid = [
  //   ["1", "1", "0", "0", "0"],
  //   ["1", "1", "0", "0", "0"],
  //   ["1", "0", "1", "0", "0"],
  //   ["1", "1", "1", "0", "1"],
  // ];
  // console.log(numIslands(grid));

  // // 1
  // grid = [["1"]];
  // console.log(numIslands(grid));
}
