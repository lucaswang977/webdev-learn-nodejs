function sortedSquares(nums: number[]): number[] {
  const absNums = nums.map((n) => (n < 0 ? -n : n));
  absNums.sort((a, b) => a - b);
  return absNums.map((n) => n * n);
}

export default function testQuiz() {
  console.log(
    "sortedSquares:",
    sortedSquares([-4, -1, 0, 3, 10]),
    sortedSquares([-7, -3, 2, 3, 11])
  );
}
