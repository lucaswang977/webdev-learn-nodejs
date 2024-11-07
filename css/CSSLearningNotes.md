# CSS Learning Notes

## Specificity
  - Inline styles have the highest priority.
  - ID selectors are stronger than class selectors.
  - Class selectors are stronger than element selectors.
  - Universal selector (*), combinators (+, >, ~), and negation pseudo-class (:not()) do not affect specificity.

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
  * The __main axis__ is the axis running in the direction the flex items are laid out in (for example, as a row across the page, or a column down the page.) The start and end of this axis are called the main start and main end. The length from the __main-start__ edge to the __main-end__ edge is the main size.
  * The __cross axis__ is the axis running perpendicular to the direction the flex items are laid out in. The start and end of this axis are called the __cross start__ and __cross end__. The length from the cross-start edge to the cross-end edge is the __cross size__.
  * The parent element that has display: flex set on it is called the __flex container__.
  * The items laid out as flexible boxes inside the flex container are called __flex items__.

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