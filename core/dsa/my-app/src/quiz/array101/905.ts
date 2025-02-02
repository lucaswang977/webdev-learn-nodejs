function sortArrayByParity(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 === 0) left++;
    else if (nums[right] % 2 === 1) right--;
    else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
  }

  return nums;
}

export default function testQuiz() {
  let nums = [];

  nums = [3, 1, 2, 4];
  console.log(sortArrayByParity(nums));

  nums = [0];
  console.log(sortArrayByParity(nums));

  nums = [0, 1, 2];
  console.log(sortArrayByParity(nums));
}
