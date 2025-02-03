# Flex layout

https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

_This article is great! It helps me to remember the properties by understanding their designing purposes. And more importantly it well explained a lot of concepts behind the vocabularies._

- Flex directions
  - Primary axis: Children will be bunched up at the start of the container.
  - Cross axis: Children will stretch out to fill the entire container.
  - In Flexbox, items are distributed along the primary axis. By default, they're nicely **lined up**, side-by-side.
  - The cross axis is different, though. A straight vertical line will only ever **intersect one of the children**.
- Alignment
  - justify — to position something along the primary axis.
  - align — to position something along the cross axis.
  - content — a group of “stuff” that can be distributed.
  - items — single items that can be positioned individually.
  - justify-content(group) and align-items(individuals)
  - align-content? it relates to "flex-wrap".
- Hypothetical size
  - In Flow layout, width is a hard constraint. In Flexbox, however, the width property is more of a suggestion than a hard constraint.
- Growing and shrinking
  - flex-basis:
    - In a Flex row, flex-basis does the same thing as width. In a Flex column, flex-basis does the same thing as height.
    - Like we saw with width, flex-basis is more of a suggestion than a hard constraint.
  - flex-grow:
    - flex-grow controls how the extra space is distributed when the items are smaller than their container.
  - flex-shrink:
    - flex-shrink controls how space is removed when the items are bigger than their container.
    - When container shrinks and the children are too big for it, the children will shrink at the rate of the ratio of their flex-shrink.
    - When we set flex-shrink to 0, we essentially “opt out” of the shrinking process altogether. The Flexbox algorithm will treat flex-basis (or width) as a hard minimum limit.
- The minimum size gotcha
  - The Flexbox algorithm refuses to shrink a child below its minimum size. The content will overflow rather than shrink further, no matter how high we crank flex-shrink!
  - By setting min-width: 0px directly on the Flex child, we tell the Flexbox algorithm to overwrite the “built-in” minimum width.
- Gap
  - gap allows us to create space in-between each Flex child.
  - Auto margins will gobble up the extra space, and apply it to the element's margin. It gives us precise control over where to distribute the extra space.
- Wrapping
  - flex-wrap: wrap gives us two rows of stuff.
  - Within each row, align-items lets us slide each individual child up or down
  - The cross axis will now intersect two rows, not one. And so, we can't move the rows individually, we need to distribute them as a group. So we're dealing with content, not items, the property we want is align-content.

# Layout Patterns

https://web.dev/patterns/layout
