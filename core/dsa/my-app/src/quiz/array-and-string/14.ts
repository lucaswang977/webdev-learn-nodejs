function longestCommonPrefix(strs: string[]): string {
  let p = 0;
  let flag = true;

  while (flag) {
    const base = strs[0].substring(0, p + 1);

    for (let i = 0; i < strs.length; i++) {
      const curr = strs[i].substring(0, p + 1);
      if (strs[i][p] === undefined || curr !== base) {
        flag = false;
        p--;
        break;
      }
    }
    if (flag) p++;
  }
  return strs[0].substring(0, p + 1);
}

export default function testQuiz() {
  let strs;

  // "fl"
  strs = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(strs));

  // ""
  strs = ["dog", "racecar", "car"];
  console.log(longestCommonPrefix(strs));
}
