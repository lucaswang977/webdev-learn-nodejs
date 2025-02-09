function getRow(rowIndex: number): number[] {
  let result = [1];
  for (let i = 1; i <= rowIndex; i++) {
    const temp = [];
    for (let j = 0; j <= i; j++) {
      const left = result[j - 1] === undefined ? 0 : result[j - 1];
      const right = result[j] === undefined ? 0 : result[j];
      temp.push(left + right);
    }
    result = temp;
  }

  return result;
}

export default function testQuiz() {
  let rowIndex;

  // [1,3,3,1]
  rowIndex = 3;
  console.log(getRow(rowIndex));

  // [1]
  rowIndex = 0;
  console.log(getRow(rowIndex));

  // [1,1]
  rowIndex = 1;
  console.log(getRow(rowIndex));
}
