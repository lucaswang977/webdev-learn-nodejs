function removeDuplicates(nums: number[]): number {
  let i = 0;
  let p = Infinity;
  let r = [];
  while (i < nums.length) {
    if (nums[i] !== p) {
      p = nums[i];
      r.push(nums[i]);
    } else {
      nums[i] = Infinity;
    }
    i++;
  }

  for (i = 0; i < nums.length; i++) {
    if (i < r.length) nums[i] = r[i];
    else nums[i] = Infinity;
  }
  return r.length;
}

export default function testQuiz() {
  let nums, k;
  nums = [1, 1, 2];
  k = removeDuplicates(nums);
  console.log("removeDuplicates: ", k, nums);
  nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  k = removeDuplicates(nums);
  console.log("removeDuplicates: ", k, nums);
}
