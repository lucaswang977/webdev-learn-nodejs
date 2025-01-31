function heightChecker(heights: number[]): number {
  const sortedHeights = [...heights];
  sortedHeights.sort((a, b) => a - b);

  let count = 0;
  sortedHeights.forEach((v, i) => {
    if (heights[i] !== v) count++;
  });

  return count;
}

export default function testQuiz() {
  let heights;

  heights = [1, 1, 4, 2, 1, 3];
  console.log(heightChecker(heights));

  heights = [5, 1, 2, 3, 4];
  console.log(heightChecker(heights));

  heights = [1, 2, 3, 4, 5];
  console.log(heightChecker(heights));
}
