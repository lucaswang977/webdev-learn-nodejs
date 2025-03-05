function openLock(deadends: string[], target: string): number {
  const queue = ["0000"];
  const deadendsSet = new Set(deadends);
  const visited = new Set<string>(["0000"]);
  let count = 0;

  while (queue.length > 0 && queue.length < 50) {
    const p = queue.shift()!;
    console.log(p);
    let flag = false;
    for (let i = 0; i < 4; i++) {
      const s = Number(p[i]) + 1 > 9 ? 0 : Number(p[i]) + 1;
      const r = Number(p[i]) - 1 < 0 ? 9 : Number(p[i]) - 1;
      const ns = p.slice(0, i) + s + p.slice(i + 1);
      const rs = p.slice(0, i) + r + p.slice(i + 1);

      if (!deadends.includes(ns) && !visited.has(ns)) {
        queue.push(ns);
        visited.add(ns);
      }
      if (!deadends.includes(rs) && !visited.has(rs)) {
        queue.push(rs);
        visited.add(rs);
      }
      if (ns === target || rs === target) {
        flag = true;
        break;
      }
    }
    if (flag) break;
    count++;
    console.log(queue, count);
  }

  return count;
}

export default function testQuiz() {
  let deadends, target;

  // 6
  deadends = ["0201", "0101", "0102", "1212", "2002"];
  target = "0202";
  console.log(openLock(deadends, target));

  // // 1
  // deadends = ["8888"];
  // target = "0009";
  // console.log(openLock(deadends, target));

  // // -1
  // deadends = ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"];
  // target = "8888";
  // console.log(openLock(deadends, target));
}
