function twoSum(numbers: number[], target: number): number[] {
  const len = numbers.length;
  let i = 0;
  let j = len - 1;
  while (i < len && j >= 0) {
    if (target - numbers[j] < numbers[i]) j--;
    else if (target - numbers[j] > numbers[i]) i++;
    else if (target - numbers[j] === numbers[i]) return [i + 1, j + 1];
  }
  return [];
}

export default function testQuiz() {
  let numbers;
  let target;

  // [1,2]
  numbers = [2, 7, 11, 15];
  target = 9;
  console.log(twoSum(numbers, target));

  // [1,3]
  numbers = [2, 3, 4];
  target = 6;
  console.log(twoSum(numbers, target));

  // [1,2]
  numbers = [-1, 0];
  target = -1;
  console.log(twoSum(numbers, target));
}
