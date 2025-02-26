function replaceElements(arr: number[]): number[] {
  if (arr.length === 0) return [];
  const len = arr.length;

  let localMax = -Infinity;
  let temp = -Infinity;
  for (let i = len - 1; i >= 0; i--) {
    if (temp > localMax) localMax = temp;
    temp = arr[i];
    arr[i] = localMax;
  }
  arr[len - 1] = -1;
  return arr;
}

export default function testQuiz() {
  let arr;
  arr = [17, 18, 5, 4, 6, 1];
  console.log(replaceElements(arr));

  arr = [400];
  console.log(replaceElements(arr));
}
