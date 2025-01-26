function findNumbers(nums: number[]): number {
  let count = 0;
  nums.forEach((num) => {
    const len = num.toString().split("").length;
    if (len % 2 === 0) {
      count++;
    }
  });

  return count;
}

function sortedSquares(nums: number[]): number[] {
  const absNums = nums.map((n) => (n < 0 ? -n : n));
  absNums.sort((a, b) => a - b);
  return absNums.map((n) => n * n);
}

const runQuiz = () => {
  // console.log("findNumbers:", findNumbers([12, 345, 2, 6, 7896]), findNumbers([555, 901, 482, 1771]));
  console.log(
    "sortedSquares:",
    sortedSquares([-4, -1, 0, 3, 10]),
    sortedSquares([-7, -3, 2, 3, 11])
  );
};

export default runQuiz;
