function problem(lines: string[]) {
  const [n, k] = lines[0].split(" ").map((v) => Number(v));
  const s = lines[1];
  let riseCount = 0;
  let fallCount = 0;
  let echoCount = k;
  const stats = {
    s: 0,
    ss: 0,
    sss: 0,
  };

  for (let i = 0; i < n; i++) {
    if (s[i] === ".") {
      riseCount++;
      fallCount = 0;
    } else {
      fallCount++;
      if (fallCount === 1) {
        stats.s++;
      } else if (fallCount === 2) {
        stats.s--;
        stats.ss++;
      } else if (fallCount === 3) {
        stats.ss--;
        stats.sss++;
        fallCount = 0;
      }
    }
  }

  if (stats.sss > 0 && echoCount > 0) {
    if (echoCount - stats.sss <= 0) {
      riseCount += echoCount * 3;
      echoCount = 0;
    } else {
      riseCount += stats.sss * 3;
      echoCount -= stats.sss;
    }
  }

  if (stats.ss > 0 && echoCount > 0) {
    if (echoCount - stats.ss <= 0) {
      riseCount += echoCount * 2;
      echoCount = 0;
    } else {
      riseCount += stats.ss * 2;
      echoCount -= stats.ss;
    }
  }

  if (stats.s > 0 && echoCount > 0) {
    if (echoCount - stats.s <= 0) {
      riseCount += echoCount;
      echoCount = 0;
    } else {
      riseCount += stats.s;
      echoCount -= stats.s;
    }
  }

  console.log(riseCount);
}

export default function testQuiz() {
  let lines;

  // 5
  lines = ["5 3", "....."];
  problem(lines);

  // 4
  lines = ["5 1", "SS..S"];
  problem(lines);

  // 9
  lines = ["12 2", ".SSSS.SS.SSS"];
  problem(lines);

  // 6
  lines = ["6 2", "S.SSSS"];
  problem(lines);
}
