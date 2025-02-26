function plusOne(digits: number[]): number[] {
  const len = digits.length;
  let carry = 0;

  digits[len - 1]++;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] > 9) {
      digits[i] %= 10;
      if (i === 0) {
        carry = 1;
      } else {
        digits[i - 1]++;
      }
    }
  }

  return carry ? [1, ...digits] : digits;
}

export default function testQuiz() {
  let digits;

  digits = [1, 2, 3];
  console.log(plusOne(digits));

  digits = [4, 3, 2, 1];
  console.log(plusOne(digits));

  digits = [9];
  console.log(plusOne(digits));
}
