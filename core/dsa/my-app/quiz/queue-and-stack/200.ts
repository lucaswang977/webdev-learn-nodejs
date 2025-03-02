async function numIslands(grid: string[][]): number {
  const islands: Map<[number, number], number> = new Map();
  let current = 0;

  // walk one by one
  // find the first "1" && not in islands, current++
  //   walk four directions to push every visited node to islands
  //   no more nodes can be visited from this start point
  // find the next "1"
  const m = grid.length;
  const n = grid[0].length;

  async function walkFrom(row: number, col: number) {
    console.log("walk start from:", row, col);
    const neighbors = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    await new Promise((resolve) => setTimeout(resolve, 1000));
    for (const v of neighbors) {
      const ii = row + v[0];
      const jj = col + v[1];
      console.log("searching:", row, col, ii, jj);
      if (
        grid[ii] !== undefined &&
        grid[ii][jj] !== undefined &&
        grid[ii][jj] === "1" &&
        islands.get([ii, jj]) === undefined
      ) {
        islands.set([ii, jj], current);
        console.log("set2: ", ii, jj);
        walkFrom(ii, jj);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1" && islands.get([i, j]) === undefined) {
        islands.set([i, j], current);
        console.log("set1: ", i, j);
        await walkFrom(i, j);
      }
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
}
