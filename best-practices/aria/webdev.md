# Learn Accessibility

https://web.dev/learn/accessibility

- [Learn Accessibility](#learn-accessibility)
  - [What is digital accessibility, and why does it matter?](#what-is-digital-accessibility-and-why-does-it-matter)
  - [How is digital accessibility measured?](#how-is-digital-accessibility-measured)
  - [ARIA and HTML](#aria-and-html)
  - [Content structure](#content-structure)
  - [The Document](#the-document)
  - [Keyboard focus](#keyboard-focus)
  - [JavaScript](#javascript)

## What is digital accessibility, and why does it matter?
* Digital accessibility is the practice of ensuring that all users, including those with disabilities, can access and use digital content and services.
* It matters because it promotes inclusivity, improves user experience, and is often required by law.
* Digital accessibility is important for businesses and organizations to reach a wider audience, enhance their reputation, and avoid legal issues.
* It is also a moral obligation to ensure that everyone has equal access to information and services.

## How is digital accessibility measured?
* Digital accessibility is measured using various tools and techniques, including automated testing tools, manual testing, and user testing with people with disabilities.
* Web Content Accessibility Guidelines (WCAG): three levels of success criteria: A, AA, and AAA. For the current standard (WCAG 2.2), there are 87 success criteria in total, split across each level.
* Accessibility principles: Perceivable, Operable, Understandable, and Robust (POUR)

## ARIA and HTML
* ARIA (Accessible Rich Internet Applications) is a set of attributes that can be added to HTML elements to improve accessibility for users with disabilities.
* The accessibility tree is a representation of the content and structure of a web page that assistive technologies use to interpret and interact with the page.
* The three main features of ARIA are roles, properties, and states/values.
  * Roles define what an element is or does on the page or app.
    ```HTML
    <div role="button">Self-destruct</div>
    ```
  * Properties express characteristics or relationships to an object.
    ```HTML
    <div role="button" aria-describedby="more-info">Self-destruct</div>
    <div id="more-info">This page will self-destruct in 10 seconds.</div>
    ```
  * States and values define the current conditions or data values associated with the element.
    ```HTML
    <div role="button" aria-describedby="more-info" aria-pressed="false">
      Self-destruct
    </div>

    <div id="more-info">
      This page will self-destruct in 10 seconds.
    </div>
    ```
* When to use ARIA
  * Rule 1: Don't use ARIA: When in doubt, use semantic HTML elements.
  * Rule 2: Don't add (unnecessary) ARIA to HTML
  * Rule 3: Always support keyboard navigation
  * Rule 4: Don't hide focusable elements
  * Rule 5: Use accessible names for interactive elements

## Content structure
* Landmarks: Landmarks are HTML elements that define the structure of a web page and help users navigate the content. Examples include `<header>`, `<nav>`, `<main>`, `<footer>`, and `<aside>`.
* Headings: Headings are used to create a hierarchy of content on a web page. Use `<h1>` for the main heading, followed by `<h2>`, `<h3>`, etc., for subheadings.
* Lists: Use `<ul>`, `<ol>`, and `<li>` elements to create lists. Use `aria-label` or `aria-labelledby` to provide additional context for screen readers.
* Tables: Use `<table>`, `<thead>`, `<tbody>`, and `<th>` elements to create tables. Use `scope` attribute to define the scope of table headers.

## The Document
* Page title: The title of a web page is important for accessibility. Use the `<title>` element to provide a descriptive title for the page. (front load the title)
* Language
  * Page language: Use the `lang` attribute in the `<html>` element to specify the primary language of the page.
    ```HTML
    <html lang="en">
    ```
  * Section language: Use the `lang` attribute in specific elements to specify the language of that section.
    ```HTML
    <p lang="fr">Bonjour</p>
    ```
* iFrames: Use the `title` attribute to provide a descriptive title for the iframe content. It is good to set the scrolling to "yes" or "auto" to allows people with low vision to be able to scroll into content within the `<iframe>` that they might not otherwise be able to see.
  ```HTML
  <iframe src="https://example.com" title="Example Content" scrolling="auto"></iframe>
  ```

## Keyboard focus
* Keyboard support for all of these disabilities and circumstances is critical. A large part of keyboard accessibility is centered around focus. 
* Focus refers to the element on the screen actively receiving input from the keyboard.
* Focus order: also called tab or navigation order, is the order in which elements receive focus. The default focus order must be logical, intuitive, and match the visual order of a page.
  * Tabindex: 
    * The focus order begins with elements that have a positive tabindex attribute (if there are any) and moves from the smallest positive number to the largest (such as 1, 2, 3). 
    * When a tabindex of zero (tabindex="0") is applied to normally unfocusable elements, they are added into the natural focus order of the page according to the way they appear in the DOM.
    * A negative tabindex (tabindex="-1") removes an element from the focus order, but it can still be focused programmatically.
    * Avoid using positive tabindex values unless absolutely necessary, as it can lead to a non-intuitive tab order and disrupt the natural flow.
  * Skip links: 
    * Skip links are anchor links that jump to a different section of the same page, using that section's ID, instead of sending the user to another page on the website or an external resource.
    * Skip links are typically added as the first focusable element a user will encounter when arriving at a website and can be visible or visually hidden until a user tabs to it.
    * When a user presses the tab key, and an active skip link is in place, it sends the keyboard focus to the skip link.
* Focus indicator
  * Browser default styling: don't override the browser's default styling.
  * Custom styles: Adhere to a 3:1 color contrast ratio for all focus indicators to meet WCAG 2.2's Focus Appearance (Minimum).

## JavaScript
* Trigger events
  * It's critical that you add keyboard support to your JavaScript actions, as it affects all of these users.
  * If an onClick() event is used on a semantic HTML element such as a <button> or <a>, it naturally includes both mouse and keyboard functionality.
  * If a non-semantic element is used for a trigger event, a keydown/keyup event must be added to detect the enter or space key press.
* Page titles
  * The transitions or routes of SPA often forget to update the page title when the content changes.
  * Use the `document.title` property to update the page title dynamically.
* Dynamic content

| Possible misuse                                                                | Correct use                                                                                                                                                     |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Render large chunks of non-semantic HTML                                       | Render smaller pieces of semantic HTML                                                                                                                          |
| Not allowing time for dynamic content to be recognized by assistive technology | Using a setTimeout() time delay to allow users to hear the full message                                                                                         |
| Applying style attributes for onFocus() dynamically                            | Use :focus for the related elements in your CSS stylesheet                                                                                                      |
| Applying inline styles may cause user stylesheets to not be read properly      | Keep your styles in CSS files to keep the consistency of the theme                                                                                              |
| Creating very large JavaScript files that slow down overall s                  | Use less JavaScript. You may be able to perform similar functions in CSS (such as animations or sticky navigation), which parse faster and are more performant. |

* Focus management
  * Component level
    * One of the most common patterns where users experience focus management issues is in a modal component.
    * A keyboard-only user should never be allowed outside of the modal without explicitly dismissing it.
  * Page level
    * When transitioning between pages (or routing), the development team must decide where the focus goes when the page loads.
* State management
  * Component level: Depending on your page content and what information your users need, there are many ARIA states to consider when relaying information about a component to the user.
  * Page level
    * Developers often use a visually hidden area called the ARIA live region to announce changes on the screen and alert messages to assistive technology (AT) users.
    * This area can be paired with JavaScript to notify users of dynamic changes to the page without requiring the entire page to reload.
