# MDN CSS Learning Notes
https://developer.mozilla.org/en-US/docs/Web/CSS/

## Selectors
  - Simple selector
    - a single type selector, attribute selector, or pseudo-class
  - Compound selector
    - A compound selector is a sequence of simple selectors that are not separated by a combinator. A compound selector represents a set of simultaneous conditions on a single element.
    - No whitespace is allowed between the simple selectors that make up a compound selector
    - a#selected {}
  - Combinator
    - Child combinator: selector1 &gt; selector2 {}
    - Descendant combinator: selector1 selector2 {}
    - Namespace separator: namespace|element { style properties }
    - Next-sibling (immediately follow) combinator: former_element + target_element {} 
    - Subsequent-sibling (follow the first and share parent) combinator: former_element ~ target_element {}
  - Selector list
    - #main, article.heading {}
    - A downside to using a selector list is that a single unsupported selector in the selector list invalidates the entire rule.
  - Forgiving selector list
    - A way to remedy the invalid selector list problem is to use the :is() or the :where() pseudo-class, which accept a forgiving selector list.
    - :where()(not adding specific weight), :is()(most specific)
  - Relative selector & selector list
    - h1:has(+ h2) {}
    - h2:has(+ p, + ul.red) {}

## Specificity
  - Inline styles have the highest priority. 
  - ID selectors such as #example. :is(), :has(), and negation (:not()) pseudo-classes. 1-0-0
  - Class selectors such as .myClass, attribute selectors like [type="radio"] and [lang|="fr"], and pseudo-classes, such as :hover, :nth-of-type(3n), and :required. 0-1-0
  - Type selectors such as p, h1, and td, and pseudo-elements like ::before, ::placeholder, and all other selectors with double-colon notation. 0-0-1
  - Universal selector (*), combinators (+, >, ~), and negation pseudo-class (:not()) do not affect specificity. 0-0-0
  - Combinator and nesting combinator(&) do not add weight.

## Display type (Box model)
  * display: block
    - The box will break onto a new line.
    - The width and height properties are respected.
    - Padding, margin and border will cause other elements to be pushed away from the box.
    - If width is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.

  * display: inline
    - The box will not break onto a new line.
    - The width and height properties will not apply.
    - Top and bottom padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
    - Left and right padding, margins, and borders will apply and will cause other inline boxes to move away from the box.

  * display: inline-block
    - The width and height properties are respected.
    - padding, margin, and border will cause other elements to be pushed away from the box.

  * display: content
    - Structuring elements logically without affecting the visual layout.
    - Making an element's box disappear while keeping its children in the DOM and layout flow.

## box-sizing
  - content-box: If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.
  - border-box: If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width.

## Margin collapsing
  - Collapsing rule
    - Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.
    - Two negative margins will collapse and the smallest (furthest from zero) value will be used.
    - If one margin is negative, its value will be subtracted from the total.
  - Cases
    - Adjacent siblings
      ```HTML    
        <div class="sibling1" style="margin: 20px 0;">Sibling 1</div>
        <div class="sibling2" style="margin: 20px 0;">Sibling 2</div>
      ```
    - No content separating parent and descendants
      ```HTML
      <div class="parent" style="margin-top: 30px;">
         <div class="child" style="margin-top: 30px;">Child</div>
      </div>
      ```
    - Empty blocks
      ```HTML
      <div class="empty-block" style="margin: 40px 0;"></div>
      ```

## Standard CSSOM coordinate systems
There are four standard coordinate systems used by the CSS object model.
- Offset
- Viewport (client)
- Page
- Screen

## Visual formatting model
  - Block formatting context: "In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse. In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch)."
  - Inline formatting context: "In an inline formatting context, boxes are laid out horizontally, one after the other, beginning at the top of a containing block. Horizontal margins, borders, and padding are respected between these boxes. The boxes may be aligned vertically in different ways: their bottoms or tops may be aligned, or the baselines of text within them may be aligned. The rectangular area that contains the boxes that form a line is called a line box."
  - Anonymous boxes: they inherit styles from their direct parent, but you cannot change how they look by targeting the anonymous box.
  - Line boxes: the boxes that wrap each line of text. You can see the difference between line boxes and their containing block if you float an item and then follow it by a block that has a background color.
  - An element is called **out of flow** if it is floated, absolutely/fixed positioned, or is the root element. An element is called **in-flow** if it is not out of the flow.
  - Independent formatting context:
    * Independent formatting contexts contain floats, and margins do not collapse across formatting context boundaries. Therefore, creating a new block formatting context can ensure that floats and margins remain inside a box.
    * Create [BFC](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) for:
      * Contain internal floats
      * Exclude external floats
      * Prevent margin collapsing
    * Create by (not limited to those):
      * display: flow-root
      * Inline-blocks
      * Table cells

## The flex model
![the flex model](https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg)

When elements are laid out as flex items, they are laid out along two axes:
  * The __main axis__ is defined by the *flex-direction* property, and it is the axis running in the direction the flex items are laid out in (for example, as a row across the page, or a column down the page.) The start and end of this axis are called the main start and main end. The length from the __main-start__ edge to the __main-end__ edge is the main size.
  * The __cross axis__ is the axis running perpendicular to the direction the flex items are laid out in. The start and end of this axis are called the __cross start__ and __cross end__. The length from the cross-start edge to the cross-end edge is the __cross size__.
  * The parent element that has display: flex set on it is called the __flex container__.
  * The items laid out as flexible boxes inside the flex container are called __flex items__.

flex shorthand:
  - flex: flex-grow, flex-shrink, flex-basis
  - flex: initial == flex: 0 1 auto
  - flex: auto == flex: 1 1 auto;
  - flex: none == flex: 0 0 auto;
  - flex: 1 == flex: 1 1 0;
  - flex: 2 == flex: 2 1 0;

auto magin for main axis alignment:
```CSS
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.push {
  margin-left: auto;
}
```
![main axis alignment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container/align7.png)

flex-basis:
- Is flex-basis set to auto, and does the item have a width set? If so, the size will be based on that width.
- Is flex-basis set to auto, but the item doesn't have a width set? If so, the size will be based on the item's content size.
- Is flex-basis a length or a percentage, but not zero? If so, this will be the size of the item (floored at min-content).
- Is flex-basis set to 0? If so, the item's size will not be taken into consideration for the space-sharing calculation.

grow and shrink:
- If we add up the widths of all the items (or heights if working in a column), is that total less than the total width (or height) of the container? If so, there will be positive free space, and flex-grow will come into play.
- If we add up the widths of all the items (or heights if working in a column), is that total more than the total width (or height) of the container? If so, there will be negative free space, and flex-shrink will come into play.

visibility: collapse
- Specifying visibility:collapse on a flex item causes it to become a collapsed flex item, producing an effect similar to visibility:collapse on a table-row or table-column: the collapsed flex item is removed from rendering entirely, but leaves behind a "strut" that keeps the flex line's cross-size stable. Thus, if a flex container has only one flex line, dynamically collapsing or uncollapsing items may change the flex container's main size, but is guaranteed to have no effect on its cross size and won't cause the rest of the page's layout to "wobble". Flex line wrapping is re-done after collapsing, however, so the cross-size of a flex container with multiple lines might or might not change.


## Grid
* Concepts
  - container: display: grid;
  - tracks: grid-template-columns, grid-template-rows, the fr unit, repeat() notation, grid-auto-rows, grid-auto-columns, minmax()
  - lines: grid-column-start, grid-column-end, grid-row-start and grid-row-end, grid-row, grid-column
  - cells: Conceptually it is like a table cell.
  - areas: Items can span one or more cells both by row or by column, and this creates a grid area.
  - gutters: column-gap, row-gap; In terms of line-based positioning, the gap acts like a thick line.
  - nesting grid: subgrid; grid-template-columns: subgrid; grid-template-rows: subgrid;
  - z-index: Grid items can occupy the same cell.
* Relationships with other layout
  - with flexbox: Content out or layout in; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  - with absolutely positioned elements: grid container with/without "position: relative"; grid area as the parent
  - display: content; : get items nested into the grid to act as if they are part of the grid
* Positioning
  - line based: grid-area shorthand(grid-row-start, grid-column-start, grid-row-end, grid-column-end), grid-area: 1 / 1 / 4 / 2; counting backward; using the "span" keyword; 
  - named lines: Multiple lines with the same name with repeat(), grid-template-columns: repeat(12, [col-start] 1fr);
  - areas: leaving grid cell empty; grid-template shorthand; grid shorthand
  - auto-placement: grid-auto-flow, grid-auto-row, grid-auto-columns; The auto-placed items will place themselves before the placed items in DOM order, they don't start after the position of a placed item that comes before them.
* Alignment
  - block axis: align-items, align-self
  - inline axis: justify-items, justify-self

## CSS animations
```CSS
animation: @keyframes duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name;

animation: @keyframes duration | easing-function | delay | name;

@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```
## Animation types
* Not animatable
* Discrete
* By computed value
* Repeatable list

## Transitions
```CSS
transition: <property> <duration> <timing-function> <delay>;

```

Transitioning display and content-visibility
* transition-behavior: allow-discrete
* @starting-style

## Transforms
&lt;transform-function&gt;
* matrix, matrix3d
* perspective
* rotate, rotate3d, rotateX, rotateY, rotateZ
* scale, scale3d, scaleX, scaleY, scaleZ
* skew, skewX, skewY
* translate, translate3d, translateX, translateY, translateZ

https://3dtransforms.desandro.com/

## Background Image
* background-size: contain / cover
* multiple backgrounds

  ```CSS
  .multi-bg-example {
    width: 100%;
    height: 400px;
    background-image: url(firefox.png), url(bubbles.png),
      linear-gradient(to right, rgb(30 75 115 / 100%), rgb(255 255 255 / 0%));
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
      bottom right,
      left,
      right;
  }
  ```

## CSS Box Alignment
Two dimensions of alignment
* When aligning items on the inline axis you will use the properties which begin with justify-: justify-items, justify-self, justify-content
* When aligning items on the block axis you will use the properties that begin align-: align-items, align-self, align-content
* The place-* CSS shorthand property allows you to align content along both the block and inline directions at once.

Types of alignment
* Positional alignment: center, start, end, self-start, self-end, flex-start for flexbox only, flex-end for flexbox only, left, right
* Baseline alignment: baseline, first baseline, last baseline
* Distributed alignment: stretch, space-between, space-around, space-evenly

| Method | Block | Absolute | Float | Table | Flexbox | Grid |
|:--|:--:|:--:|:--:|:--:|:--:|--:|
|justify-content|not apply|not apply|not apply|not apply|main axis|inline axis|
|justify-self|inline axis|inline axis|inline axis|not apply|not apply|inline axis|
|justify-items|inline axis|inline axis|inline axis|not apply|not apply|inline axis|
|align-content|block axis|block axis|block axis|not apply|cross axis|block axis|
|align-items|not apply|not apply|not apply|not apply|cross axis|block axis|
|align-self|not apply|not apply|not apply|not apply|cross axis|block axis|

https://devinterview.io/


## Using relative colors
```CSS
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* color space included in the case of color() functions */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Example:
```CSS
:root {
  --base-color: orange;
}

#one {
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}
```

## CSS conditional rules
### Feature queries
```CSS
/* `@supports` at-rule */
@supports (color: red) {
  CSS rules to apply
}

/* A `selector()` query within a `supports()` function */
@import `/css/webkitShadowStyles.css`
  supports(selector(::-webkit-inner-spin-button));
```

### Media queries
Media queries are used for the following:
- To conditionally apply styles with the CSS @media and @import at-rules.
- To target specific media for the &lt;style&gt;, &lt;link&gt;, &lt;source&gt;, and other HTML elements with the media= or sizes=" attributes.
- To test and monitor media states using the Window.matchMedia() and EventTarget.addEventListener() methods.

**Media types** define the broad category of device for which the media query applies: all, print, screen.

[Media features](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features) describe a specific characteristic of the user agent, output device, or environment.

Examples:
```CSS
@media (min-height: 680px), screen and (orientation: portrait) {
  /* … */
}
```

Testing media queries programmatically:
```Javascript
// Create the query list.
const mediaQueryList = window.matchMedia("(orientation: portrait)");

// Define a callback function for the event listener.
function handleOrientationChange(mql) {
  // …
}

// Run the orientation change handler once.
handleOrientationChange(mediaQueryList);

// Add the callback function as a listener to the query list.
mediaQueryList.addEventListener("change", handleOrientationChange);
```

Using a print style sheet:
```CSS
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## CSS containment (for performance optimization)
CSS containment improves the **performance** of web pages by allowing the browser to isolate a subtree of the page from the rest of the page.

```CSS
article {
  contain: size layout paint style;
  contain-intrinsic-size: 80vw auto;
}
```

Four types of containment:
- layout
  - Ensures that layout changes within the element (such as resizing or reflowing) don’t affect the outside elements.
  - Useful when you want to make sure that the positioning or resizing of an element won’t trigger reflows in the rest of the document.
  - Example: Imagine a component that expands when clicked. With contain: layout;, the expansion won’t cause surrounding elements to adjust their positions.
- paint
  - Restricts the painting (or visual rendering) of an element to its own boundary, meaning that it won’t spill over into other parts of the page visually.
  - Beneficial for performance, as it confines the area that the browser needs to redraw.
  - Example: This is particularly useful if you have animations or effects within an element that you don’t want to impact the visual rendering of other elements.
- size
  - Prevents the size of an element from being influenced by the size of its children.
  - When you apply contain: size;, the element is essentially "self-contained" in terms of its dimensions, so it won’t resize based on its children.
  - Example: A card component that should always be a specific size regardless of the size of its child elements.
- style
  - Ensures that style changes within an element do not affect elements outside of it.
  - This containment type limits the reach of style recalculations, meaning that style changes within an element won’t cause recalculations outside of it.
  - Example: If you dynamically change styles (like colors or fonts) on elements within a container, those updates won’t trigger style recalculations for the entire document.

Special values:
- content: layout, paint, style *(equals to content-visibility: auto)*
- strict: size layout paint style

An element becomes "relevant to the user" if any of the following are true:
- The element appears in the viewport, or a user-agent-defined margin around the viewport (50% of the viewport dimensions, to give the app time to prepare for when the element visibility changes).
- The element or its contents receive focus.
- The element or its contents are selected, for example by dragging over the text with the mouse cursor or by some other highlight operation.
- The element or its contents are placed in the top layer.

## CSS container queries (for reponsive design)
```CSS
.post {
  container-type: inline-size;
  container-name: sidebar;
}

@container sidebar (min-width: 700px) {
  .card h2 {
    font-size: max(1.5em, 1.23em + 2cqi);
  }
}

@container card (orientation: landscape) {
  /* styles */
}

@container style(color: green) and style(background-color: transparent),
    not style(background-color: red),
    style(--themeBackground),
    style(--themeColor: blue) or style(--themeColor: purple),
    (max-width: 100vw) and style(max-width: 600px) {
  /* <stylesheet> */
}
```

## Wrapping text
  - Breaking a word once it is too long to fit on a line by itself: "overflow-wrap: break-word"
  - Breaking the word at the point it overflows: "word-break: break-all;"
  - Adding hyphens: "hyphens: manual;"
  - You know where you want a long string to break, add &lt;wbr&gt;

## Font
  - OpenType font features: font-kerning, font-variant-alternates, font-variant-ligatures, font-variant-position, font-variant-caps, font-variant-numeric, font-variant-east-asian, font-variant(short hand), font-feature-settings(lower level syntax)
    - Use feature detection for implementation
      ```CSS
      .small-caps {
        font-feature-settings: "smcp", "c2sc";
      }

      @supports (font-variant-caps: all-small-caps) {
        .small-caps {
          font-feature-settings: normal;
          font-variant-caps: all-small-caps;
        }
      }  
      ```

  - Variable fonts
    - @font-face: load font from remote or local
      ```CSS
      @font-face {
        font-family: "MyVariableFontName";
        src: url("path/to/font/file/my-variable-font.woff2")
          format("woff2-variations");
        font-weight: 125 950;
        font-stretch: 75% 125%;
        font-style: italic;
      }
      ```
    - font-weight, font-stretch, font-style, font-style, font-optical-sizing, font-synthesisfont-variation-settings(lower level syntax)

## CSS gradients
  - linear gradients: 
    - color stops: linear-gradient(to left, lime 28px, red 77%, cyan);
    - hard lines: background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
    - gradient hints: background: linear-gradient(blue, 10%, pink);
  - Overlaying gradients by stacking multiple backgrounds.
    - blending gradients: background-blend-mode: screen/overlay/difference;
  - radial gradients:
    - color stops: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
    - positioning the center: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
    - sizing: closest-corner, closest-side, farthest-corner, and farthest-side 
  - conic gradients:
    - basic: background: conic-gradient(red, blue);
    - positioning the center: background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
    - changing the angle: background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
  - repeating gradients: 
    - repeating-linear-gradient(-45deg, red, red 5px, blue 5px, blue 10px);
    - repeating-radial-gradient(black, black 5px, white 5px, white 10px);

## Math functions
  - property: calc(expression);
  - property: min(&lt;first value&gt;, &lt;second value&gt;, &lt;third value&gt;, ...);
  - property: max(&lt;first value&gt;, &lt;second value&gt;, &lt;third value&gt;, ...);
  - property: clamp(&lt;minimum value&gt;, &lt;value to be clamped&gt;, &lt;maximum value&gt;);
  - Stepped value functions: round(), mod(), rem()
  - Trigonometric functions: sin(), cos(), tan(), asin(), acos(), atan(), atan2()
  - Exponential functions: pow(), sqrt(), hypot(), log(), exp()
  - Sign functions: abs(), sign()

## Counters
  - counter-reset: section page 3 topic;  (always create a new counter)
  - counter-reset: reversed(section);
  - counter-set: section 20; (only update an existing counter)
  - counter-increment: section
  - counter(&lt;counter-name&gt;, &lt;counter-style&gt;)
  - counters(&lt;counter-name&gt;, &lt;separator&gt;, &lt;counter-style&gt;)

## z-index
Default stacking order without setting z-index:
  - The background and borders of the root element.
  - Descendant non-positioned elements, in order of appearance in the HTML.
  - Floating elements.
  - Descendant non-positioned inline elements.
  - Descendant positioned elements, in order of appearance in the HTML.

[Stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage. HTML elements occupy this space in priority order based on element attributes.

## Logical properties
  - inset-inline-start(left), inset-inline-end(right), inset-block-start(top), inset-block-end(bottom)
  - border-inline-start(border-left), border-inline-end(border-right), border-block-start(border-top), border-block-end(border-bottom)
  - inline-size(width), block-size(right)

## Nesting style rules
  - Compound selectors: In order to target an element with class="a b" the & nesting selector is needed otherwise the whitespace will break the compound selector.
    ```CSS
    .a {
      /* styles for element with class="a" */
      .b {
        /* styles for element with class="b" which is a descendant of class="a" */
      }
      &.b {
        /* styles for element with class="a b" */
      }
    }    
    ```
  - Appended nesting selector: The & nesting selector can also be appended to a nested selector which has the effect of reversing the context.
    ```CSS
    .foo {
      /* .foo styles */
      .bar & {
        /* .bar .foo styles */
      }
    }
    ```

## Shapes
  - shape-outside: Allows definition of basic shapes. 
    - shape-outside: &lt;basic-shape&gt;
      - shape-outside: inset(20px 50px 10px 0 round 50px) margin-box;
      - shape-outside: circle(50% at 30%);
      - shape-outside: ellipse(40% 50% at left);
      - shape-outside: ellipse(closest-side farthest-side at 30%);
      - shape-outside: polygon(0px 0px, 0px 189px, 100.48% 94.71%, 200px 120px, 80.67% 37.17%);
    - shape-outside: border-box; (border-box, padding-box, content-box, margin-box)
    - shape-outside: circle(50%) margin-box; (default is [margin-box](http://razvancaliman.com/writing/css-shapes-reference-boxes/), can be modified)
    - shape-outside: url(../images/round-balloon-transparent.png); (must be CORS compatible)
    - shape-outside: linear-gradient(45deg, rebeccapurple, transparent 80%, transparent);
  - shape-image-threshold: set the threshold of image transparency used to define the area of the image used for the shape.
    - shape-image-threshold: 0.4;
  - shape-margin: adds a margin to shape-outside. 
    - shape-margin: 5px;
  - relationship to clip-path: if you want to create a shape using an image, and also clip away part of that image, you can use the same values.

## Scroll snap
  - scroll-snap-type: scrollable, axis, mandatory / proximity
  - scroll-snap-align: start, end, center, and none
  - scroll-padding: snap position to be slightly offset
  - scroll-margin: longhand scroll margin values can be set on child elements, defining an outset from the defined box
  - scroll-snap-stop: normal / always

https://scroll-driven-animations.style/

## CSS generated content
You can use CSS to add content when a document is displayed. You modify your stylesheet to add text content or images.

```CSS
.ref::before {
  font-weight: bold;
  color: navy;
  content: "Reference ";
}

a.glossary::after {
  content: " " url("glossary-icon.gif");
}

```

## Explain [CSS Arrow Please](https://cssarrowplease.com/)

  - Start with an element that has no width or height:
    ```javascript
    cssCopy.triangle {
      width: 0;
      height: 0;
    }
    ```
- Add a thick border to all sides:
    ```javascript
    cssCopy.triangle {
      width: 0;
      height: 0;
      border: 50px solid;
    }
    ```
    At this point, you'd see a square shape formed by the four borders meeting.

- Make three of the borders transparent, leaving only one visible:
    ```javascript
    cssCopy.triangle {
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-bottom-color: black;
    }
    ```
    Now you have a triangle pointing upwards!