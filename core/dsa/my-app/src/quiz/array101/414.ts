function thirdMax(nums: number[]): number {
  let maxes = [-Infinity, -Infinity, -Infinity];

  nums.forEach((v) => {
    if (v > maxes[0]) {
      maxes[2] = maxes[1];
      maxes[1] = maxes[0];
      maxes[0] = v;
    } else if (v > maxes[1] && v < maxes[0]) {
      maxes[2] = maxes[1];
      maxes[1] = v;
    } else if (v > maxes[2] && v < maxes[1]) {
      maxes[2] = v;
    }
  });
  if (maxes[2] !== -Infinity) return maxes[2];
  else return maxes[0];
}

export default function testQuiz() {
  let nums;

  nums = [3, 2, 1];
  console.log(thirdMax(nums));

  nums = [1, 2];
  console.log(thirdMax(nums));

  nums = [2, 2, 3, 1];
  console.log(thirdMax(nums));
}
