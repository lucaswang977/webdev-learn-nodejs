function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    const temp = [];
    for (let j = 0; j <= i; j++) {
      let left = 0;
      let right = 0;
      if (result[i - 1] !== undefined && result[i - 1][j - 1] !== undefined)
        left = result[i - 1][j - 1];
      if (result[i - 1] !== undefined && result[i - 1][j] !== undefined)
        right = result[i - 1][j];
      temp.push(left + right);
    }
    result.push(temp);
  }
  return result;
}

export default function testQuiz() {
  let numRows;

  // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
  numRows = 5;
  console.log(generate(numRows));

  // [[1]]
  numRows = 1;
  console.log(generate(numRows));
}
