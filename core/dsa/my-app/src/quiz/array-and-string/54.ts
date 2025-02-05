function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const result: number[] = [];
  const walked = new Set<string>();
  const ways = [
    [0, 1, 1],
    [1, 0, 2],
    [0, -1, 3],
    [-1, 0, 0],
  ];

  let way = 0;
  let i = 0;
  let j = 0;

  while (result.length < m * n) {
    if (
      matrix[i] !== undefined &&
      matrix[i][j] !== undefined &&
      !walked.has(`${i},${j}`)
    ) {
      result.push(matrix[i][j]);
      walked.add(`${i},${j}`);
    }

    i += ways[way][0];
    j += ways[way][1];

    if (
      matrix[i] === undefined ||
      matrix[i][j] === undefined ||
      walked.has(`${i},${j}`)
    ) {
      i -= ways[way][0];
      j -= ways[way][1];
      way = ways[way][2];
    }
  }

  return result;
}

export default function testQuiz() {
  let matrix;

  // [1,2,3,6,9,8,7,4,5]
  matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(spiralOrder(matrix));

  // [1,2,3,4,8,12,11,10,9,5,6,7]
  matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  console.log(spiralOrder(matrix));
}
