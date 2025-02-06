function addBinary(a: string, b: string): string {
  const arrA = a.split("").reverse();
  const arrB = b.split("").reverse();
  const result = [];

  let i = 0;
  let carry = 0;
  while (arrA[i] !== undefined || arrB[i] !== undefined) {
    const an = arrA[i] !== undefined ? (arrA[i] === "0" ? 0 : 1) : 0;
    const bn = arrB[i] !== undefined ? (arrB[i] === "0" ? 0 : 1) : 0;
    let rn = an + bn + carry;
    if (rn > 1) {
      carry = 1;
      rn = rn % 2;
    } else {
      carry = 0;
    }
    result.push(String(rn));
    i++;
  }
  if (carry === 1) result.push("1");

  return result.reverse().join("");
}

export default function testQuiz() {
  let a, b;

  // "100"
  a = "11";
  b = "1";
  console.log(addBinary(a, b));

  // "10101"
  a = "1010";
  b = "1011";
  console.log(addBinary(a, b));
}
