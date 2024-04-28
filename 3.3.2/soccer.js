document.onmousedown = (event) => {
  const elem = event.target.closest(".draggable");
  const moveTo = (elem, x, y) => {
    elem.style.left = x + "px";
    elem.style.top = y + "px";
  };

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

    moveTo(elem, event.pageX - deltaX, event.pageY - deltaY);

    const onMouseMove = (event) => {
      const [elemPageLeft, elemPageTop] = [
        event.pageX - deltaX,
        event.pageY - deltaY,
      ];

      const [elemViewLeft, elemViewTop] = [
        event.clientX - deltaX,
        event.clientY - deltaY,
      ];

      if (elemViewTop < 0 && elemPageTop > 0) {
        window.scrollBy(0, elemViewTop);
      }
      if (elemViewLeft < 0 && elemPageLeft > 0) {
        window.scrollBy(elemViewLeft, 0);
      }
      if (
        elemPageTop + elem.offsetHeight >
        document.documentElement.clientHeight
      ) {
        if (
          elemPageTop + elem.offsetHeight >=
          document.documentElement.scrollHeight
        )
          elemPageTop =
            document.documentElement.clientHeight - elem.offsetHeight;
        else
          window.scrollBy(
            0,
            elemPageTop +
              elem.offsetHeight -
              document.documentElement.clientHeight
          );
      }
      if (
        elemPageLeft + elem.offsetWidth >
        document.documentElement.clientWidth
      ) {
        if (
          elemPageLeft + elem.offsetWidth >=
          document.documentElement.scrollWidth
        )
          elemPageLeft =
            document.documentElement.clientWidth - elem.offsetWidth;
        else
          window.scrollBy(
            elemPageLeft +
              elem.offsetWidth -
              document.documentElement.clientWidth,
            0
          );
      }

      if (elemPageLeft <= 0) elemPageLeft = 0;
      if (elemPageTop <= 0) elemPageTop = 0;

      moveTo(elem, elemPageLeft, elemPageTop);
    };

    document.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
    document.addEventListener("mousemove", onMouseMove);
  }
};
