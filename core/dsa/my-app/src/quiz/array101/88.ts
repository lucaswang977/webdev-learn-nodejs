function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m);
  nums1.splice(m, 0, ...nums2.slice(0, n));
  nums1.sort((a, b) => a - b);
}

export default function testQuiz() {
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
}
