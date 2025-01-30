function moveZeroes(nums: number[]): void {
  let i = 0;
  const len = nums.length;
  let j = 0;
  while (i < len) {
    if (nums[i] !== 0) {
      if (nums[j] === 0) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }

      j++;
    }
    i++;
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

  nums = [
    45192, 0, -659, -52359, -99225, -75991, 0, -15155, 27382, 59818, 0, -30645,
    -17025, 81209, 887, 64648,
  ];
  moveZeroes(nums);
  console.log(nums);
}
