function numIslands(grid: string[][]): number {
  let current = 2;
  // walk one by one
  // if current is "1"
  //   look all the neighbours, if not "1" or "0", set it as the same number
  //   find all the neighboured "1", set it to
  //   recursively find the next "1", set it to "100"
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
      }
    }
  }

  return current - 1;
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
}
