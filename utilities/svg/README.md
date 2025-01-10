# Notes on learning SVG

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction

- https://www.smashingmagazine.com/2024/09/svg-coding-examples-recipes-writing-vectors-by-hand/
- https://www.smashingmagazine.com/2019/05/svg-design-tools-practical-guide/
- https://www.smashingmagazine.com/2024/12/mastering-svg-arcs/
- https://www.smashingmagazine.com/2019/01/html5-svg-fill-animation-css3-vanilla-javascript/
- https://www.smashingmagazine.com/2023/01/svg-customization-animation-practical-guide/
- https://www.smashingmagazine.com/2021/05/accessible-svg-patterns-comparison/
- https://www.smashingmagazine.com/2021/03/svg-generators/

## Position

```xml
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

The whole SVG canvas here is 200px by 200px in size. However, the viewBox attribute defines the portion of that canvas to display. These 200x200 pixels display an area that starts at user unit (0,0) and spans 100x100 user units to the right and to the bottom. This effectively zooms in on the 100x100 unit area and enlarges the image to double size.

## Basic shapes

- Rectangle

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- Circle

```xml
<circle cx="25" cy="75" r="20"/>
```

- Ellipse

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- Line

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>
```

- Polyline

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- Polygon

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- Path

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

## Path

- Line commands

  - "Move To" or M: M x y / m dx dy
  - "Line To" or L: L x y / l dx dy
  - H draws a horizontal line: H x / h dx
  - V draws a vertical line: V y / v dy
  - "Close Path" or Z: Z / z
  - _note: lowercase letters means rather than moving the cursor to an exact coordinate, they move it relative to its last position._

  ```xml
   <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
   <path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
  ```

- Curve commands
  - Cubic Béziers take in two control points: C x1 y1, x2 y2, x y / c dx1 dy1, dx2 dy2, dx dy
  - a shortcut for stringing together the cubic Bézier: S x2 y2, x y / s dx2 dy2, dx dy
  - quadratic curve: Q x1 y1, x y / q dx1 dy1, dx dy
  - a shortcut for stringing together the quadratic curve: T x y / t dx dy
  - Arcs is a part of an ellipse: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    - rx and ry are the radii of the ellipse
    - x-axis-rotation is the rotation of the ellipse in degrees
    - large-arc-flag determines if the arc should be greater(1) than or less(0) than 180 degrees
    - sweep-flag determines if the arc should begin moving at positive angles or negative ones (from standing at the start point then look at the end, arc is on the left side(1) or the right side(0) )
