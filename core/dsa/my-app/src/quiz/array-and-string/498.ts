function findDiagonalOrder(mat: number[][]): number[] {
  const len = mat.length;
  if (len < 2) return mat[0];
  if (len === 2) return [mat[0][0], mat[1][0]];
  // const temp = [];
  const result = [];

  for (let i = 0; i < len * 2 + 1; i++) {
    if (i % 2 === 0) {
      for (let j = i; j >= 0; j--) {
        if (i - j < len && j < len) {
          result.push(mat[j][i - j]);
          // temp.push([j, i - j]);
        }
      }
    } else {
      for (let j = 0; j <= i; j++) {
        if (i - j < len && j < len) {
          result.push(mat[j][i - j]);
          // temp.push([j, i - j]);
        }
      }
    }
  }
  // console.log(temp);
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

  mat = [[3], [2]];
  console.log(findDiagonalOrder(mat));
}
