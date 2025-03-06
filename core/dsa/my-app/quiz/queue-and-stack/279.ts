function numSquares(n: number): number {
  let result = 1;

  function dfs(num: number, r: number) {
    console.log(num, r);
    if (num - r * r === 0) return result;
    else if (num - r * r < 1) {
      result++;
      dfs(num, r - 1);
    } else if (num - r * r >= 1) {
      result++;
      dfs(num - r * r, Math.floor(Math.sqrt(num - r * r)));
    }
  }

  dfs(n, Math.floor(Math.sqrt(n)));

  return result;
}

export default function testQuiz() {
  let n;

  // 3
  n = 12;
  console.log(numSquares(n));

  // 2
  n = 13;
  console.log(numSquares(n));

  // 2
  n = 50;
  console.log(numSquares(n));

  // 3
  n = 37;
  console.log(numSquares(n));
}
