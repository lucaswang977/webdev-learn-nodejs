function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;

  const result = [];
  let i = 0;
  let j = 0;
  let wayUp = true;

  while (result.length < m * n) {
    if (mat[i] !== undefined && mat[i][j] !== undefined) result.push(mat[i][j]);
    if (wayUp) {
      if (mat[i - 1] === undefined && mat[i][j + 1] !== undefined) {
        wayUp = !wayUp;
        j++;
      } else if (mat[i - 1] === undefined && mat[i][j + 1] === undefined) {
        wayUp = !wayUp;
        i++;
      } else if (mat[i - 1] !== undefined && mat[i - 1][j + 1] === undefined) {
        wayUp = !wayUp;
        i++;
      } else {
        i--;
        j++;
      }
    } else {
      if (mat[i + 1] === undefined && mat[i][j - 1] !== undefined) {
        wayUp = !wayUp;
        j++;
      } else if (mat[i + 1] === undefined && mat[i][j - 1] === undefined) {
        wayUp = !wayUp;
        j++;
      } else if (mat[i + 1] !== undefined && mat[i + 1][j - 1] === undefined) {
        wayUp = !wayUp;
        i++;
      } else {
        i++;
        j--;
      }
    }
  }

  return result;
}

export default function testQuiz() {
  let mat;
  // 0: [0,0],
  // 1: [0,1], [1,0],
  // 2: [2,0], [1,1], [0,2],
  // 3: [1,2], [2,1],
  // 4: [2,2]
  mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(findDiagonalOrder(mat));

  // [0,0], [0,1], [1,0], [1,1]
  mat = [
    [1, 2],
    [3, 4],
  ];
  console.log(findDiagonalOrder(mat));

  // [0,0], [1,0]
  mat = [[3], [2]];
  console.log(findDiagonalOrder(mat));

  mat = [[6, 9, 7]];
  console.log(findDiagonalOrder(mat));
}
