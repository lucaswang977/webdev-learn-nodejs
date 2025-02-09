/**
Do not return anything, modify nums in-place instead.
*/
function rotate(nums: number[], k: number): void {
  const len = nums.length;
  if (len === 0) return;

  const beforeMove = nums.splice(len - k, k);

  nums.splice(0, 0, ...beforeMove);
}

export default function testQuiz() {
  let nums, k;

  // [5,6,7,1,2,3,4]
  nums = [1, 2, 3, 4, 5, 6, 7];
  k = 3;
  rotate(nums, k);
  console.log(nums);

  // [3,99,-1,-100]
  nums = [-1, -100, 3, 99];
  k = 2;
  rotate(nums, k);
  console.log(nums);

  // [2,1]
  nums = [1, 2];
  k = 5;
  rotate(nums, k);
  console.log(nums);
}
