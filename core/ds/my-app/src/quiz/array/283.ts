function moveZeroes(nums: number[]): void {
  let i = 0;
  const len = nums.length;
  let zeros = 0;
  while (i < len && zeros + i < len) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      zeros++;
    } else {
      i++;
    }
  }
}

export default function testQuiz() {
  let nums;
  nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums);

  nums = [0];
  moveZeroes(nums);
  console.log(nums);
}
