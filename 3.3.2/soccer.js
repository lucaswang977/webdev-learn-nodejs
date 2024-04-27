document.onmousedown = (event) => {
  const elem = event.target.closest(".draggable");
  if (elem) {
    elem.ondragstart = () => false;
    event.preventDefault();

    const elemRect = elem.getBoundingClientRect();
    const [deltaX, deltaY] = [
      event.clientX - elemRect.left,
      event.clientY - elemRect.top,
    ];

    elem.style.position = "absolute";
    document.body.append(elem);

    elem.style.left = event.pageX - deltaX + "px";
    elem.style.top = event.pageY - deltaY + "px";

    const onMouseMove = (event) => {
      if (event.clientY - deltaY < 0 && event.pageY - deltaY > 0) {
        window.scrollBy(0, -10);
      }
      console.log(event.clientY, event.pageY - deltaY);
      if (
        event.clientY - deltaY + elem.offsetHeight >
        document.documentElement.clientHeight
      ) {
        window.scrollBy(0, 10);
      }

      elem.style.left = event.pageX - deltaX + "px";
      elem.style.top = event.pageY - deltaY + "px";
    };

    document.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
    document.addEventListener("mousemove", onMouseMove);
  }
};
