function checkIfExist(arr: number[]): boolean {
  if (arr.length < 2) return false;
  const arrMap = new Map();
  arr.forEach((num, index) => {
    arrMap.set(num, index);
  });

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const resultIndex = arrMap.get(num * 2);
    if (resultIndex !== undefined && resultIndex !== i) {
      return true;
    }
  }

  return false;
}

export default function testQuiz() {
  let arr;
  arr = [10, 2, 5, 3];
  console.log(checkIfExist(arr));

  arr = [3, 1, 7, 11];
  console.log(checkIfExist(arr));

  arr = [-10, 12, -20, -8, 15];
  console.log(checkIfExist(arr));
}
