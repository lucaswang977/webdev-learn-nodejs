function validMountainArray(arr: number[]): boolean {
  const len = arr.length;
  if (len < 3) return false;
  let i = 0;
  let j = len - 1;
  while (i < arr.length - 1 && arr[i + 1] - arr[i] > 0) {
    i++;
  }
  while (j > 0 && arr[j] - arr[j - 1] < 0) {
    j--;
  }
  if (i === j && i !== 0 && i !== len - 1) return true;
  return false;
}

export default function testQuiz() {
  let arr;

  arr = [2, 1];
  console.log(validMountainArray(arr));

  arr = [3, 5, 5];
  console.log(validMountainArray(arr));

  arr = [0, 3, 2, 1];
  console.log(validMountainArray(arr));

  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(validMountainArray(arr));
}
