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

export default function testQuiz() {
  let nums;
  nums = [12, 345, 2, 6, 7896];
  console.log(findNumbers(nums));

  nums = [555, 901, 482, 1771];
  console.log(findNumbers(nums));
}
