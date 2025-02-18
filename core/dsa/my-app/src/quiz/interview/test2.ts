type MenuItemType = {
  no: number;
  stock: number;
  price: number;
};

type OrderItemType = {
  table: number;
  menuNo: number;
  count: number;
};

type ChecksType = {
  table: number;
  cost: number;
  allReady: boolean;
};

function handleStep4(lines: string[]) {
  const menuTypeCount = Number(lines[0]);
  const menu: MenuItemType[] = [];
  const outputs: string[] = [];

  for (let i = 1; i <= menuTypeCount; i++) {
    const item = lines[i].split(" ").map((s) => Number(s));
    menu.push({
      no: item[0],
      stock: item[1],
      price: item[2],
    });
  }

  const orders: OrderItemType[] = [];
  const checks: ChecksType[] = [];

  for (let i = menuTypeCount + 1; i < lines.length; i++) {
    const item = lines[i].split(" ");
    if (item[0] === "received" && item[1] === "order") {
      orders.push({
        table: Number(item[2]),
        menuNo: Number(item[3]),
        count: 1,
      });
      const check = checks.find((c) => c.table === Number(item[2]));
      if (check) {
        check.cost += menu.find((m) => m.no === Number(item[3]))!.price;
        check.allReady = false;
      } else {
        checks.push({
          table: Number(item[2]),
          cost: menu.find((m) => m.no === Number(item[3]))!.price,
          allReady: false,
        });
      }
    } else if (item[0] === "ready") {
      const order = orders.find(
        (o) => o.menuNo === Number(item[2]) && o.table === Number(item[1])
      );
      const check = checks.find((c) => c.table === Number(item[1]));
      if (order && check) {
        orders.splice(orders.indexOf(order), 1);
        if (orders.find((o) => o.table === Number(item[1])) === undefined) {
          check.allReady = true;
        }
      }
    } else if (item[0] === "check") {
      const check = checks.find((c) => c.table === Number(item[1]));
      if (check) {
        if (check.allReady) {
          outputs.push(`${check.cost}`);
          check.cost = 0;
        } else {
          outputs.push("please wait");
        }
      } else {
        outputs.push("0");
      }
    }
  }
  console.log(outputs.join("\n"));
}

function handleStep3(lines: string[]) {
  const menuTypeCount = Number(lines[0]);
  const menu: MenuItemType[] = [];
  const outputs: string[] = [];

  for (let i = 1; i <= menuTypeCount; i++) {
    const item = lines[i].split(" ").map((s) => Number(s));
    menu.push({
      no: item[0],
      stock: item[1],
      price: item[2],
    });
  }

  const orders: OrderItemType[] = [];
  for (let i = menuTypeCount + 1; i < lines.length; i++) {
    const item = lines[i].split(" ");
    if (item[0] === "received" && item[1] === "order") {
      orders.push({
        table: Number(item[2]),
        menuNo: Number(item[3]),
        count: 1,
      });
    } else if (item[0] === "complete") {
      const order = orders.findIndex((o) => o.menuNo === Number(item[1]));
      if (order >= 0) {
        outputs.push(`ready ${orders[order].table} ${orders[order].menuNo}`);
        orders.splice(order, 1);
      }
    }
  }

  console.log(outputs.join("\n"));
}

function handleStep2(lines: string[]) {
  const [menuTypeCount, microwaveCount] = lines[0]
    .split(" ")
    .map((s) => Number(s));
  const menu: MenuItemType[] = [];
  const outputs: string[] = [];

  for (let i = 1; i <= menuTypeCount; i++) {
    const item = lines[i].split(" ").map((s) => Number(s));
    menu.push({
      no: item[0],
      stock: item[1],
      price: item[2],
    });
  }

  const orders: string[] = [];
  for (let i = menuTypeCount + 1; i < lines.length; i++) {
    const item = lines[i].split(" ");
    if (item[0] === "received" && item[1] === "order") {
      if (orders.length < microwaveCount) {
        orders.push(item[3]);
        outputs.push(item[3]);
      } else {
        orders.push(item[3]);
        outputs.push("wait");
      }
    } else if (item[0] === "complete") {
      if (!orders.includes(item[1])) {
        outputs.push("unexpected input");
      } else {
        if (orders.length > microwaveCount) {
          outputs.push(`ok ${orders[microwaveCount]}`);
        }
        orders.splice(orders.indexOf(item[1]), 1);
        if (!orders.includes(item[1])) {
          outputs.push("ok");
        }
      }
    }
  }

  console.log(outputs.join("\n"));
}

function handleStep1(lines: string[]) {
  const menuTypeCount = Number(lines[0]);
  const menu: MenuItemType[] = [];
  const orders: OrderItemType[] = [];
  const outputs: string[] = [];

  for (let i = 1; i <= menuTypeCount; i++) {
    const item = lines[i].split(" ").map((s) => Number(s));
    menu.push({
      no: item[0],
      stock: item[1],
      price: item[2],
    });
  }

  for (let i = menuTypeCount + 1; i < lines.length; i++) {
    const item = lines[i]
      .split(" ")
      .slice(1)
      .map((s) => Number(s));
    orders.push({
      table: item[0],
      menuNo: item[1],
      count: item[2],
    });
  }

  orders.forEach((order) => {
    const menuItem = menu.find((m) => m.no === order.menuNo);
    if (menuItem) {
      if (menuItem.stock >= order.count) {
        menuItem.stock -= order.count;
        for (let i = 0; i < order.count; i++) {
          outputs.push(`received order ${order.table} ${order.menuNo}`);
        }
      } else {
        outputs.push(`sold out ${order.table}`);
      }
    }
  });

  console.log(outputs.join("\n"));
}

function main(lines: string[]) {
  const stepNo = Number(lines[0]);

  switch (stepNo) {
    case 1:
      handleStep1(lines.slice(1));
      break;
    case 2:
      handleStep2(lines.slice(1));
      break;
    case 3:
      handleStep3(lines.slice(1));
      break;
    case 4:
      handleStep4(lines.slice(1));
      break;
  }
}

export default function testQuiz() {
  const test1 = `
    1
    2
    100 5 700
    50 2 300
    order 13 100 4
    order 12 100 2
    order 11 100 1
    `;

  main(
    test1
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s !== "")
  );

  const test2 = `
      2
    2 2
    100 5 700
    101 5 300
    received order 10 100
    complete 101
    received order 11 100
    received order 12 101
    complete 100
    complete 101
  `;

  main(
    test2
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s !== "")
  );

  const test3 = `
  3
1
100 5 700
received order 10 100
received order 11 100
complete 100
received order 10 100
complete 100
complete 100`;

  main(
    test3
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s !== "")
  );

  const test4 = `
  4
  1
  100 5 700
  received order 10 100
  ready 10 100
  check 10
  received order 10 100
  check 10
  ready 10 100
  check 10
  `;
  main(
    test4
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s !== "")
  );
}
