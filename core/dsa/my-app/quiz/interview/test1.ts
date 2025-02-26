function calculateWeight(n: number, s: string): number[] {
  const weight: number[] = [];

  // Calculate the weight
  for (let i = 0; i < n; i++) {
    const threeChar = [
      s[i - 1] === undefined ? "." : s[i - 1],
      s[i],
      s[i + 1] === undefined ? "." : s[i + 1],
    ];
    switch (threeChar.join("")) {
      case "...":
        weight.push(0);
        break;
      case "S..":
      case ".S.":
      case "..S":
        weight.push(1);
        break;
      case "SS.":
      case "S.S":
      case ".SS":
        weight.push(2);
        break;
      case "SSS":
        weight.push(3);
        break;
    }
  }
  return weight;
}

function moralizeIndex(s: string, pos: number): string {
  let newS = s.slice(0, pos) + "." + s.slice(pos + 1);
  if (newS[pos - 1] !== undefined)
    newS = newS.slice(0, pos - 1) + "." + newS.slice(pos);
  if (newS[pos + 1] !== undefined)
    newS = newS.slice(0, pos + 1) + "." + newS.slice(pos + 2);

  return newS;
}

function getMoralizedCount(s: string): number {
  return [...s].reduce((count, char) => count + (char === "." ? 1 : 0), 0);
}

function problem(lines: string[]) {
  const [n, k] = lines[0].split(" ").map((v) => Number(v));
  const s = lines[1];

  let max = -1;
  const gen = (function* findMaxWeight(
    s: string,
    n: number,
    k: number
  ): Generator<undefined, void> {
    if (k === 0) {
      const t = getMoralizedCount(s);
      if (t > max) max = t;
      return;
    }
    const weight = calculateWeight(n, s);
    const maxWeight = Math.max(...weight);
    if (maxWeight === 0) {
      max = getMoralizedCount(s);
      return;
    }
    // console.log(s, weight.join(","));
    for (let i = 0; i < n; i++) {
      if (weight[i] === maxWeight) {
        yield;
        yield* findMaxWeight(moralizeIndex(s, i), n, k - 1);
      }
    }
  })(s, n, k);

  [...gen];

  return max;
}

export default function testQuiz() {
  let lines;

  // 5
  lines = ["5 3", "....."];
  console.log(problem(lines));

  // 4
  lines = ["5 1", "SS..S"];
  console.log(problem(lines));

  // 9
  lines = ["12 2", ".SSSS.SS.SSS"];
  console.log(problem(lines));

  // 6
  lines = ["6 2", "S.SSSS"];
  console.log(problem(lines));

  // 6
  lines = ["6 4", "S....S"];
  console.log(problem(lines));
}
