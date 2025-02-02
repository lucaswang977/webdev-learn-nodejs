function findDisappearedNumbers(nums: number[]): number[] {
  const len = nums.length;
  const numSet = new Set(nums);
  const notAvail = [];

  for (let i = 1; i <= len; i++) {
    if (!numSet.has(i)) notAvail.push(i);
  }

  return notAvail;
}

export default function testQuiz() {
  let nums;
  nums = [4, 3, 2, 7, 8, 2, 3, 1];
  console.log(findDisappearedNumbers(nums));

  nums = [1, 1];
  console.log(findDisappearedNumbers(nums));
}
