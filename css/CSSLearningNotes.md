# CSS Learning Notes

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

## Specificity
  - Inline styles have the highest priority.
  - ID selectors are stronger than class selectors.
  - Class selectors are stronger than element selectors.
  - Universal selector (*), combinators (+, >, ~), and negation pseudo-class (:not()) do not affect specificity.

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

## Block formatting context
  * It's the region in which the layout of block boxes occurs and in which floats interact with other elements.
  * Create [BFC](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context) for:
    * Contain internal floats
    * Exclude external floats
    * Prevent margin collapsing
  * Create by (not limited to those):
    * display: flow-root
    * Inline-blocks
    * Table cells

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

https://scroll-driven-animations.style/

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
