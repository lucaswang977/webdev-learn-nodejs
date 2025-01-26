function findNumbers(nums: number[]): number {
  let count = 0;
  nums.forEach((num) => {
    const len = num.toString().split("").length;
    if (len % 2 === 0) {
      count++;
    }
  });

  return count;
}

function sortedSquares(nums: number[]): number[] {
  const absNums = nums.map((n) => (n < 0 ? -n : n));
  absNums.sort((a, b) => a - b);
  return absNums.map((n) => n * n);
}

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

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m);
  nums1.splice(m, 0, ...nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
}

const runQuiz = () => {
  // console.log("findNumbers:", findNumbers([12, 345, 2, 6, 7896]), findNumbers([555, 901, 482, 1771]));]

  // console.log(
  //   "sortedSquares:",
  //   sortedSquares([-4, -1, 0, 3, 10]),
  //   sortedSquares([-7, -3, 2, 3, 11])
  // );

  // let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
  // let arr2 = [1, 2, 3];
  // duplicateZeros(arr1);
  // duplicateZeros(arr2);
  // console.log("duplicateZeros: ", arr1, arr2);

  let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;
  merge(nums1, m, nums2, n);
  console.log("merge: ", nums1);

  nums1 = [1];
  m = 1;
  nums2 = [];
  n = 0;
  merge(nums1, m, nums2, n);
  console.log("merge: ", nums1);

  nums1 = [0];
  m = 0;
  nums2 = [1];
  n = 1;
  merge(nums1, m, nums2, n);
  console.log("merge: ", nums1);
};

export default runQuiz;
