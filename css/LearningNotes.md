# Learning Notes

## Specificity
  - Inline styles have the highest priority.
  - ID selectors are stronger than class selectors.
  - Class selectors are stronger than element selectors.
  - Universal selector (*), combinators (+, >, ~), and negation pseudo-class (:not()) do not affect specificity.

## Margin collapsing
  - Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.
  - Two negative margins will collapse and the smallest (furthest from zero) value will be used.
  - If one margin is negative, its value will be subtracted from the total.

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

