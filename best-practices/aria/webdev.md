# Learn Accessibility

https://web.dev/learn/accessibility

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
* iFrames: Use the `title` attribute to provide a descriptive title for the iframe content. It is good to set the scrolling to "yes" or "auto" to allows people with low vision to be able to scroll into content within the <iframe> that they might not otherwise be able to see.
  ```HTML
  <iframe src="https://example.com" title="Example Content" scrolling="auto"></iframe>
  ```