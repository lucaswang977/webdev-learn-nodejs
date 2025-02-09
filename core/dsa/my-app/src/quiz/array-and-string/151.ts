function reverseWords(s: string): string {
  let h = 0;
  let t = 0;
  const words: string[] = [];

  let wordStart = false;

  while (t < s.length) {
    if (!wordStart && s[h] !== " ") {
      wordStart = true;
    } else if (!wordStart && s[h] === " ") {
      h++;
      t++;
    } else if (wordStart && s[t] === " ") {
      wordStart = false;
      words.push(s.slice(h, t));
      t++;
      h = t;
    } else if (wordStart && s[t] !== " ") {
      t++;
    }
  }
  if (h !== t) words.push(s.slice(h));

  return words.reverse().join(" ");
}

export default function testQuiz() {
  let s;
  s = "the sky is blue";
  console.log(reverseWords(s));

  s = "  hello world  ";
  console.log(reverseWords(s));

  s = "a good   example";
  console.log(reverseWords(s));
}
