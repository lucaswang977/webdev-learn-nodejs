function findMaxConsecutiveOnes(nums: number[]): number {
  let startPoint = -1;
  let maxConsectiveOnes = 0;

  nums.forEach((item, index) => {
    if (item === 1) {
      if (startPoint < 0) startPoint = index;

      let consectiveOnes = index - startPoint + 1;
      if (consectiveOnes > maxConsectiveOnes)
        maxConsectiveOnes = consectiveOnes;
    } else {
      startPoint = -1;
    }
  });

  return maxConsectiveOnes;
}

export default function testQuiz() {
  let nums;
  nums = [1, 1, 0, 1, 1, 1];
  console.log(findMaxConsecutiveOnes(nums));

  nums = [1, 0, 1, 1, 0, 1];
  console.log(findMaxConsecutiveOnes(nums));
}
