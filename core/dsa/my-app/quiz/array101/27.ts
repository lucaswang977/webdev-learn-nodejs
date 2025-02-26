function removeElement(nums: number[], val: number): number {
  let k = nums.length;
  let i = 0;
  if (k === 0) return 0;
  while (nums[i] !== Infinity && i < k) {
    if (nums[i] === val) {
      nums[i] = nums[k - 1];
      nums[k - 1] = Infinity;
      k--;
    } else {
      i++;
    }
  }

  return k;
}

export default function testQuiz() {
  let nums, val, k;
  nums = [3, 2, 2, 3];
  val = 3;
  k = removeElement(nums, val);
  console.log("removeElement: ", k, nums);
  nums = [0, 1, 2, 2, 3, 0, 4, 2];
  val = 2;
  k = removeElement(nums, val);
  console.log("removeElement: ", k, nums);
}
