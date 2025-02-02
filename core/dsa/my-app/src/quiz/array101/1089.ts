function duplicateZeros(arr: number[]): void {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      if (i + 1 >= arr.length) break;

      if (i + 2 >= arr.length) {
        arr[i + 1] = 0;
        break;
      }

      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i + 1] = 0;

      i += 2;
    } else {
      i++;
    }
  }
}

export default function testQuiz() {
  let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
  let arr2 = [1, 2, 3];
  duplicateZeros(arr1);
  duplicateZeros(arr2);
  console.log("duplicateZeros: ", arr1, arr2);
}
