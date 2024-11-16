const thumb = slider.querySelector(".thumb");
const sliderRect = slider.getBoundingClientRect();

if (thumb) {
  thumb.ondragstart = () => false;

  thumb.onmousedown = (event) => {
    const rect = thumb.getBoundingClientRect();
    const deltaX = event.clientX - rect.left;

    thumb.style.position = "absolute";
    thumb.style.left = `${rect.left}px`;
    thumb.style.top = `${rect.top}px`;
    document.body.append(thumb);

    const mouseMove = (event) => {
      let left = event.clientX - deltaX;
      if (left < sliderRect.left) left = sliderRect.left;
      if (left > sliderRect.right - rect.width)
        left = sliderRect.right - rect.width;
      thumb.style.left = `${left}px`;
    };

    document.onmouseup = () => {
      document.removeEventListener("mousemove", mouseMove);
    };
    document.addEventListener("mousemove", mouseMove);
  };
}
