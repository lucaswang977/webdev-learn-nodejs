# Unstanding CSS Layout Algorithms

https://www.joshwcomeau.com/css/understanding-layout-algorithms/

- Layout algorithms
  - This is the critical mental-model shift. CSS properties on their own are meaningless. It's up to the **layout algorithm** to define what they do, how they're used in the calculations.
  - For example, z-index is not implemented in Flow layout but implemented in Flexbox.
  - The Flexbox algorithm implements the "width" property in a different way than the Flow algorithm.
  - The properties we write are inputs, like arguments being passed to a function. It's up to the layout algorithm to choose what to do with those inputs.
- Identifying the layout algorithm
  - In some cases, a CSS property applied to an element will opt in to a specific layout mode. (eg. position: fixed; float: left;)
  - In other cases, we need to look at what CSS the parent applies.
  - In technical terms, display: flex creates a flex **formatting context**. All direct children will participate in this context, and it means that they will use Flexbox layout instead of the default Flow layout.
  - display: flex will also turn an inline element, like a \<span> into a Block-level element, so it does have some effect on the parent element's layout
- Layout algorithm variants
  - Some layout algorithms are split into multiple variants, for example, Positioned layout refers to several different “positioning schemes”:
    - Relative, Absolute, Fixed, Sticky
  - Each variant is sorta like its own mini-layout algorithm, though they do share things in common.
- Conflicts
  - I don't know the exact hierarchy, but Positioned layout tends to beat everything.
  - But if you ever find that an element isn't behaving the way you'd expect, it can be worth trying to identify which layout algorithm it's using.
  - An element with position: relative is clearly rendered using Positioned layout. It can use exclusive Positioned-layout properties like top or left. And yet, it can also participate in Flexbox / Grid layouts! You can think of it a bit like composition. The Positioned layout algorithm will compose the Flexbox layout algorithm for relatively-positioned elements.
- Inline magic space
  - Flow layout is designed for documents, similar to word-processing software.
  - Individual characters are assembled into words and sentences. These elements sit inline, side-by-side, and line-wrap when there isn't enough horizontal space.
  - Paragraphs are considered blocks, like headings or images. Blocks will be stacked vertically, one on top of the other, from the top down.
  - Images are inline elements by default! By default, inline elements are “baseline” aligned. This means that the bottom of the image will align with the invisible horizontal line that text sits on.

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

# Grid Layout

https://www.joshwcomeau.com/css/interactive-guide-to-grid/

- Mental model
  - With CSS Grid, a single DOM node is sub-divided into rows and columns.
  - The most unusual part of CSS Grid, in my opinion, unlike Table layout, is that the grid structure, the rows and columns, are defined purely in CSS.
- Grid flow
  - By default, CSS Grid uses a single column, and will create rows as needed, based on the number of children. This is known as an **implicit grid**, since we aren't explicitly defining any structure.
  - Implicit grids are dynamic; rows will be added and removed based on the number of children. Each child gets its own row.
  - By default, the height of the grid parent is determined by its children. It grows and shrinks dynamically.
  - The grid parent is still using Flow layout, and block elements in Flow layout grow vertically to contain their content. Only the children are arranged using Grid layout.
- Grid Construction
  - By default, CSS Grid will create a single-column layout.
  - We can specify columns using the grid-template-columns property.
  - Percentage column and fr-based column:
    - Percentage-based columns are rigid, and so our ghost image will overflow, spilling out of the column.
    - fr-based columns are flexible, and so the column won't shrink below its minimum content size, even if that means breaking the proportions. The fr unit, is calculated based on the extra space.
  - Implicit and explicit rows: by defining both grid-template-rows and grid-template-columns, we've created an explicit grid.
  - The repeat helper: grid-template-columns: repeat(7, 1fr);
- Assigning children
  - The grid-row and grid-column properties allow us to specify which track(s) our grid child should occupy.
  - "grid-column: 1 / 4;" there's a sneaky gotcha here: The numbers we're providing are based on the column lines, not the column indexes.
  - "grid-column: 1 / -1;" with negative line numbers, however, we can also count in the opposite direction, from right to left.
  - Grid areas
    - grid-template-areas
    - Areas work best when the grid has a fixed number of rows and columns. grid-column and grid-row can be useful for implicit grids.
  - Being mindful of keyboard users
    - Tab order will still be based on DOM position, not grid position.
    - **In the future**, the "reading-order" CSS property should allow us to instruct the browser to ignore the DOM order, and focus elements in the order they appear onscreen.
  - Alignment
    - Align columns:
      - As long as the grid parent is larger than the children width, there will be some dead space at the end. We can control the distribution of the columns using the "justify-content" property.
      - "justify-content" lets us arrange the compartments of our grid, distributing them across the grid however we wish.
      - When we plop a DOM node into a grid parent, the default behaviour is for it to stretch across that entire column, just like how a \<div> in Flow layout will stretch horizontally to fill its container. With "justify-items", however, we can tweak that behaviour.
      - We can even control the alignment of a specific grid child using the "justify-self" property.
    - Align rows:
      - "align-content" is like justify-content, but it affects rows instead of columns.
      - Similarly, "align-items" is like justify-items, but it handles the vertical alignment of items inside their grid area, rather than horizontal.
      - In addition to justify-self, we also have "align-self". This property controls the vertical position of a single grid item within its cell.
    - The "place-content" property is a shorthand. It's syntactic sugar for setting justify-content and align-content simultaneously.
