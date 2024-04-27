"use strict";

// Here's a brief sketch of the class
// with things that you'll need anyway
class HoverIntent {
  constructor({
    sensitivity = 0.1, // speed less than 0.1px/ms means "hovering over an element"
    interval = 100, // measure mouse speed once per 100ms: calculate the distance between previous and next points
    elem,
    over,
    out,
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;

    // make sure "this" is the object in event handlers.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    // assign the handlers
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);

    // continue from this point
  }

  onMouseOver(event) {
    this.lastPoint = [event.clientX, event.clientY];
    this.mouseSpeed = 0;
    this.lastDate = Date.now();

    this.elem.addEventListener("mousemove", this.onMouseMove);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.intervalChecker = setInterval(() => {
      if (this.mouseSpeed < this.sensitivity) {
        this.over();
      }
    }, this.interval);
  }

  onMouseOut(event) {
    if (this.intervalChecker) {
      clearInterval(this.intervalChecker);
    }

    if (this.elem.contains(event.relatedTarget)) return;

    this.out();
    this.elem.removeEventListener("mousemove", this.onMouseMove);
    this.point = null;
    this.intervalChecker = null;
  }

  onMouseMove(event) {
    const point = [event.clientX, event.clientY];
    const now = Date.now();
    this.mouseSpeed = this.calcSpeed(
      point,
      this.lastPoint,
      now - this.lastDate
    );
    this.lastPoint = point;
    this.lastDate = now;
  }

  destroy() {
    this.elem.removeEventListener("mouseover", this.onMouseOver);
    this.elem.removeEventListener("mouseout", this.onMouseOut);
    this.elem.removeEventListener("mousemove", this.onMouseMove);
    if (this.intervalChecker) clearInterval(this.intervalChecker);

    this.onMouseMove =
      this.onMouseOver =
      this.onMouseOut =
      this.point =
      this.intervalChecker =
        null;
  }

  calcSpeed(p1, p2, interval) {
    if (interval === 0) return 0;
    const distance = Math.sqrt(
      Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
    );
    const speed = distance / interval;
    // console.log(
    //   p1,
    //   p2,
    //   "distance: ",
    //   distance,
    //   "interval: ",
    //   interval,
    //   "speed: ",
    //   speed
    // );
    return speed;
  }
}
