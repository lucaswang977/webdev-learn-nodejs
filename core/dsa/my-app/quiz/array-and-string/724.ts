function pivotIndex(nums: number[]): number {
  const len = nums.length;

  let leftAcc = [0];
  let rightAcc = [0];

  let l = 0;
  let r = 0;

  for (let i = 0; i < len; i++) {
    l = l + nums[i];
    r = r + nums[len - i - 1];
    leftAcc.push(l);
    rightAcc.push(r);
  }

  for (let i = 0; i <= len; i++) {
    const rightI = len - i - 1;
    if (leftAcc[i] === rightAcc[rightI]) return i;
  }
  return -1;
}

export default function testQuiz() {
  let nums;
  nums = [1, 7, 3, 6, 5, 6];
  // [0, 1, 8, 11, 17, 22, 28]
  // [0, 6, 11, 17, 20, 27, 28]
  console.log(pivotIndex(nums));

  nums = [1, 2, 3];
  // [0, 1, 3, 6]
  // [0, 3, 5, 6]
  console.log(pivotIndex(nums));

  nums = [2, 1, -1];
  console.log(pivotIndex(nums));
}
