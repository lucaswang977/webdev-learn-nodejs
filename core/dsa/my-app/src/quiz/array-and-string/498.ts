function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;

  const result = [];
  let i = 0;
  let j = 0;
  let wayUp = true;

  while (i < m && j < n) {
    result.push(mat[i][j]);

    if (wayUp) {
      i--;
      j++;
    } else {
      i++;
      j--;
    }

    if (mat[i] === undefined || mat[i][j] === undefined) {
      wayUp = !wayUp;
      if (wayUp) {
        i--;
        j++;
      } else {
        i++;
        j--;
      }
      if (wayUp) i++;
      else j++;
      if (mat[i] === undefined || mat[i][j] === undefined) {
        j--;
        i++;
      }
    }
  }
  if (m === n && m !== 1) result.push(mat[m - 1][n - 1]);

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
