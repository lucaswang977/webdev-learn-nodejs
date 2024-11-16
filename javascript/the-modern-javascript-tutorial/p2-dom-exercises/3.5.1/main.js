function runOnKeys(handler, ...codes) {
  let pressed = new Set();
  document.addEventListener("keydown", function (event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) return;
    }
    handler();
    pressed.clear();
  });
  document.addEventListener("keyup", function (event) {
    pressed.delete(event.code);
  });
}

runOnKeys(() => alert("Hello!"), "KeyQ", "KeyW", "KeyX");
