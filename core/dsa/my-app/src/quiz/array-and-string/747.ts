function dominantIndex(nums: number[]): number {
  const len = nums.length;
  if (len < 2) return 1;

  let max = -Infinity;
  let secMax = -Infinity;
  let maxIndex = -1;

  for (let i = 0; i < len; i++) {
    if (nums[i] > max) {
      secMax = max;
      max = nums[i];
      maxIndex = i;
    } else if (nums[i] > secMax) {
      secMax = nums[i];
    }
  }

  if (secMax * 2 <= max) return maxIndex;

  return -1;
}

export default function testQuiz() {
  let nums;

  nums = [3, 6, 1, 0];
  console.log(dominantIndex(nums));

  nums = [1, 2, 3, 4];
  console.log(dominantIndex(nums));
}
