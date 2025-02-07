/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let i = 0;
  let j = s.length - 1;
  while (true) {
    if (i === j) break;
    const t = s[i];
    s[i] = s[j];
    s[j] = t;

    if (i === j - 1) break;
    i++;
    j--;
  }
}

export default function testQuiz() {
  let s;

  // ["o","l","l","e","h"]
  s = ["h", "e", "l", "l", "o"];
  reverseString(s);
  console.log(s);

  // ["h","a","n","n","a","H"]
  s = ["H", "a", "n", "n", "a", "h"];
  reverseString(s);
  console.log(s);
}
