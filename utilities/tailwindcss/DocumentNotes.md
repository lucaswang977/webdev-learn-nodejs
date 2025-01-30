# TailwindCSS Document Notes

https://tailwindcss.com/docs/

- [TailwindCSS Document Notes](#tailwindcss-document-notes)
  - [Core Concepts](#core-concepts)
    - [Styling with utility classes](#styling-with-utility-classes)
    - [Colors](#colors)
    - [Hover, focus, and other states](#hover-focus-and-other-states)
    - [Responsive design](#responsive-design)
    - [Dark mode](#dark-mode)
    - [Theme variables](#theme-variables)
    - [Adding custom styles](#adding-custom-styles)
    - [Detecting classes in source files](#detecting-classes-in-source-files)
    - [Functions and directives](#functions-and-directives)
  - [Base Styles](#base-styles)
  - [Layout](#layout)
  - [Flexbox and Grid](#flexbox-and-grid)
  - [Spacing and Sizing](#spacing-and-sizing)
  - [Typography](#typography)
  - [Backgrounds](#backgrounds)
  - [Borders](#borders)
  - [Effects and Filters](#effects-and-filters)
  - [Tables](#tables)
  - [Transition and Animation](#transition-and-animation)
  - [Transforms](#transforms)
  - [Interactivity](#interactivity)
  - [SVG](#svg)
  - [Accessibility](#accessibility)

## Core Concepts

### Styling with utility classes

- The benefits of combining many single-purpose presentational classes (utility classes) directly in your markup:
  - You get things done faster
  - Making changes feels safer
  - Maintaining old projects is easier
  - Your code is more portable
  - Your CSS stops growing
- Compare to inline styles:
  - Designing with constraints
  - Hover, focus, and other states
  - Media queries
- Thinking in utility classes:
  - Styling hover and focus states
  - Media queries and breakpoints
  - Targeting dark mode
  - Using class composition (filter property with variables)
  - Using arbitrary values (CSS is generated based on the class name)
  - Complex selectors (really complex scenarios arbitrary values can be used)
  - When to use inline styles (when a value is coming from a dynamic source or very complicated arbitrary values)
- Managing duplications:
  - Using loops
  - Using multi-cursor editing
  - Using components
  - Using custom CSS

### Colors

Every color in the default palette includes 11 steps, with 50 being the lightest, and 950 being the darkest.

- Working with colors
  - Using color utilities (bg-, text-, decoration-, border-, outline-, shadow-, inset-shadow-, ring-, inset-ring-, accent-, caret-, fill-, stroke-)
  - Adjusting opacity (bg-black/75)
  - Targeting dark mode (dark:bg-gray-800)
  - Referencing in CSS (--color-\*)
- Customizing your colors
  - Use @theme to add custom colors to your project under the --color-\* theme namespace
  - Overriding default colors (defining new theme variables with the same name)
  - Disabling default colors (setting the theme namespace for that color to initial)
  - Using a custom palette (use --color-\*: initial to completely disable all of the default colors and define your own custom color palette)
  - Referencing other variables (Use "@theme inline" when defining colors that reference other colors)
  - [Default color palette reference](https://tailwindcss.com/docs/colors#default-color-palette-reference)

### Hover, focus, and other states

- Pseudo-classes:
  - :hover, :focus, :focus-within(when it or one of its descendants has focus), :focus-visible(when it has been focused using the keyboard), :active, :disabled, :visited, :target (its ID matches the current URL fragment)
  - :first-child, :last-child, :only-child, :nth-child(odd), :nth-child(even), :first-of-type, :last-of-type, :only-of-type, :nth-last-child(), :nth-of-type(), :nth-last-of-type()
  - :required, :disabled
  - :has() (based on the state or content of its descendants), group-has-\* (based on the descendants of a parent element), peer-has-\* (based on the descendants of a sibling element)
  - :not() (style an element when a condition is not true)
  - group, group-\* (based on the state of some parent element), group/{name} (giving that parent a unique group name)
  - in-\* (works similarly to group except you don't need to add group to the parent element)
  - peer-\* (style an element based on the state of a sibling element, only be used on previous siblings)
  - peer/{name} (style something on the state of a specific peer by giving that peer a unique name )
- Pseudo-elements
  - ::before and ::after
  - ::placeholder, ::file, ::marker (counters or bullets in lists), ::selection
  - ::first-line and ::first-letter
  - ::backdrop
- Media and feature queries
  - To style an element at a specific breakpoint, use responsive variants like "md" and "lg".
  - To style an element based on the width of a parent element instead of the viewport, use variants like "@md" and "@lg"
  - prefers-color-scheme(dark), prefers-reduced-motion(motion-reduce, motion-safe), prefers-contrast(contrast-more, contrast-less), forced-colors/not-forced-colors
  - orientation(portrait/landscape), print
  - @supports(supports-[...]/not-supports-[...])
  - @starting-style(starting) (set the appearance of an element when it is first rendered in the DOM, or transitions from display: none to visible)
- Attribute selectors
  - ARIA states: aria-\*, aria-busy, aria-checked, aria-disabled, aria-expanded, aria-hidden, aria-pressed, aria-readonly, aria-required, aria-selected
  - Data attributes: data-\*
  - RTL support: rtl, ltr
  - Open/closed state: open(conditionally add styles when a \<details> or \<dialog> element is in an open state)
  - Styling inert elements: inert (HTML global attribute, used to make an element inert)
- Child selectors
  - Direct children: use the "\*" variant in situations where you need to style direct children that you don’t have control over
  - all descendants: "\*\*" will apply styles to all descendants, not just the direct children
- Custom variants

  - Using arbitrary variants:

    ```CSS
    [&.is-dragging]:cursor-grabbing

    [&_p]:mt-4

    [@supports(display:grid)]:grid
    ```

  - Registering a custom variant:

    ```CSS
    @custom-variant pointer-coarse (@media (pointer: coarse));

    @custom-variant any-hover {
      @media (any-hover: hover) {
        &:hover {
          @slot;
        }
      }
    }
    ```

### Responsive design

### Dark mode

### Theme variables

### Adding custom styles

### Detecting classes in source files

### Functions and directives

## Base Styles

## Layout

## Flexbox and Grid

## Spacing and Sizing

## Typography

## Backgrounds

## Borders

## Effects and Filters

## Tables

## Transition and Animation

## Transforms

## Interactivity

## SVG

## Accessibility
