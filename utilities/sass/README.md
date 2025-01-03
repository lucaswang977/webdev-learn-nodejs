# Learn Sass

https://sass-lang.com/guide/

## Preprocessing

- Watching files or directories:

```bash
sass --watch src/app/sass:dist/app/stylesheets
sass --watch input.scss output.css
```

- Two syntaxes
  - The SCSS syntax (.scss, superset of CSS)
  - The indented syntax (.sass, uses indentation rather than curly braces)

## Variables

```SCSS
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

_Compare with pure CSS:_

```CSS
:root {
  --font-stack: Helvetica, sans-serif;
  --primary-color: #333;

  body {
    font: 100% var(--font-stack);
    color: var(--primary-color);
  }
}
```

## Nesting

```SCSS
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

_May be supported by the CSS nesting module_

## Partials

- A partial is a Sass file named with a leading underscore like \_partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file.
- Sass partials are used with the @use rule.

## Modules

- Using a file will also include the CSS it generates in your compiled output!

```SCSS
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

```SCSS
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

## Mixins

```SCSS
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

## Extend/Inheritance

```SCSS
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

## Operators

```SCSS
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```
