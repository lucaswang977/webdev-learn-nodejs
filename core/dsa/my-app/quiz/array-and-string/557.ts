function reverseWords(s: string): string {
  const words = s.split(" ").map((v) => v.split("").reverse().join(""));
  return words.join(" ");
}

export default function testQuiz() {
  let s;

  // "s'teL ekat edoCteeL tsetnoc"
  s = "Let's take LeetCode contest";
  console.log(reverseWords(s));

  // "rM gniD"
  s = "Mr Ding";
  console.log(reverseWords(s));
}
