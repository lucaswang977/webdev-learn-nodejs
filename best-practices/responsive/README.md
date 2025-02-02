# Learn Responsive Design

https://web.dev/learn/design

## Introduction

- Early design choices
  - Fixed-width design
  - Liquid layouts (a flexible layout using percentages for your column widths)
- Build for difference screen sizes
  - Separate sites (user-agent sniffing)
  - Adaptive layouts (a mashup of media queries and fixed-width layouts)
  - Responsive web design (a mashup of media queries and liquid layouts)
  - [Ethan](https://alistapart.com/article/responsive-web-design/) defined three criteria for responsive design:
    - Fluid grids
    - Fluid media
    - Media queries
  - A meta element for viewport
    - By default mobile browsers assumed that 980 pixels was the width.
    - Even if you used a liquid layout, the browser would apply a width of 980 pixels and then scale the rendered web page down to the actual width of the screen.
    - A meta element in the head of the web page (width is not 980px and no scales):
      ```HTML
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ```
    - With a responsive design, you don't want the browser to do any scaling at all.

## Media queries

- You can use any CSS length units in your media queries. If your content is mostly image-based, pixels might make the most sense. If your content is mostly text-based, it probably makes more sense to use a relative unit that's based on text size, like em or ch:
  ```CSS
  @media (min-width: 25em) {
    // Styles for viewports wider than 25em.
  }
  ```

## Internationalization

- Use logical properties
  - such as _-inline-end/_-block-end, _-inline-start/_-block-start instead of _-right, _-left
- Identify page language
  ```HTML
    <html lang="en-us">
    <head>
      <link href="/path/to/german/version" rel="alternate" hreflang="de">
    </head>
    <a href="/path/to/german/version" hreflang="de" lang="de">Deutsche Version</a>
  ```
- Consider internationalization in your design:
  - Some languages, like German, have long words in common usage. You should avoid designing narrow columns.
  - Make sure your line-height values can accommodate characters like accents and other diacritics.
  - If you're using a web font, make sure it has a range of characters broad enough to cover the languages you'll be translating into.
  - Don't create images that have text in them.

## Macro layouts

- Grid

  ```CSS
  @media (min-width: 45em) {
    main {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
  }
  ```

- Flexbox

  ```CSS
  @media (min-width: 45em) {
    main {
      display: flex;
      flex-direction: row;
    }

    main article {
      flex: 2;
    }

    main aside {
      flex: 1;
    }
  }
  ```

- You might not always need to use a media query.

  ```CSS
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    grid-gap: 1em;
  }
  ```

## Micro layouts

## Typography

## Responsive images

## The picture element

## Icons

## Theming

## Accessibility

## Interaction

## User interface patterns

## Screen configurations
