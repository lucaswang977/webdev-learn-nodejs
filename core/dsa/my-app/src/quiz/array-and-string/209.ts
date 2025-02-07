function minSubArrayLen(target: number, nums: number[]): number {
  const len = nums.length;
  nums.sort((a, b) => b - a);
  let result = 0;
  let rest = target;

  for (let i = 0; i < len; i++) {
    console.log(rest, nums[i], result);
    if (rest - nums[i] > 0) {
      rest -= nums[i];
      result++;
    } else {
      rest = rest - nums[i];
      result++;
      break;
    }
  }
  console.log(rest, result);

  if (rest > 0) return 0;

  return result;
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
}
