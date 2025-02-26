function minSubArrayLen(target: number, nums: number[]): number {
  const len = nums.length;
  let i = 0;
  let j = 0;
  let count = 1;
  let result = nums[0];
  let minCount = len + 1;

  while (!(j >= len - 1 && result < target)) {
    if (result >= target) {
      if (count < minCount) {
        minCount = count;
      }
      result -= nums[i];
      i++;
      count--;
    } else {
      j++;
      result += nums[j];
      count++;
    }
  }
  if (minCount > len) minCount = 0;

  return minCount;
}

export default function testQuiz() {
  let nums;
  let target;

  // 2
  target = 7;
  nums = [2, 3, 1, 2, 4, 3];
  console.log(minSubArrayLen(target, nums));

  // 1
  target = 4;
  nums = [1, 4, 4];
  console.log(minSubArrayLen(target, nums));

  // 0
  target = 11;
  nums = [1, 1, 1, 1, 1, 1, 1, 1];
  console.log(minSubArrayLen(target, nums));

  // 3
  target = 11;
  nums = [1, 2, 3, 4, 5];
  console.log(minSubArrayLen(target, nums));

  // 2
  target = 20;
  nums = [2, 16, 14, 15];
  console.log(minSubArrayLen(target, nums));

  // 8
  target = 213;
  nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
  console.log(minSubArrayLen(target, nums));

  // 5
  target = 15;
  nums = [1, 2, 3, 4, 5];
  console.log(minSubArrayLen(target, nums));
}
