function numIslands(grid: string[][]): number {
  const islands: Map<[number, number], number> = new Map();
  let current = 0;

  // walk one by one
  // if current is "1"
  //   search array of set for neighbours
  //     if it has neighbour in one set, push it into this set
  //     if it has neighbour in another set, merge the two sets
  //     if no neighbour, add a new set, push it in
  //
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        console.log(i, j, islands);
        // up, down, left, right
        const neighbours = [
          islands.get([i - 1, j]),
          islands.get([i + 1, j]),
          islands.get([i, j - 1]),
          islands.get([i, j + 1]),
        ];
        if (neighbours.find((v) => v !== undefined) === undefined) {
          console.log(neighbours);
          current++;
          islands.set([i, j], current);
        } else {
          let temp = 0;
          for (let l = 0; l < 4; l++) {
            const t = neighbours[l];
            if (t !== undefined && t > 0) {
              if (temp > 0 && t !== temp) {
                // change all the value t to temp
                islands.forEach((v, key) => {
                  if (v === t) islands.set(key, temp);
                });
              } else {
                temp = t;
              }
            }
          }
        }
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
