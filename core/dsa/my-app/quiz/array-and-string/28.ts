function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

export default function testQuiz() {
  let haystack;
  let needle;

  // 0
  haystack = "sadbutsad";
  needle = "sad";
  console.log(strStr(haystack, needle));

  // -1
  haystack = "leetcode";
  needle = "leeto";
  console.log(strStr(haystack, needle));
}
