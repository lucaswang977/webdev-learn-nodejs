# Notes of Web Components

https://developer.mozilla.org/en-US/docs/Web/API/Web_components

## Concepts

- Custom elements: A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
- Shadow DOM: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality.
- HTML templates: The \<template> and \<slot> elements enable you to write markup templates that are not displayed in the rendered page.

## Using custom elements

- Two types of custom element:
  - Customized built-in elements: inherit from standard HTML elements. To use a customized built-in element, use the built-in element but with the custom name as the value of the "is" attribute.
  - Autonomous custom elements: inherit from the HTML element base class HTMLElement. the custom name can be used like a built-in HTML element.
- Lifecycle callbacks:
  - connectedCallback(): called each time the element is added to the document.
  - disconnectedCallback(): called each time the element is removed from the document.
  - adoptedCallback(): called each time the element is moved to a new document.
  - attributeChangedCallback(): called when attributes are changed, added, removed, or replaced.
- Register a custom element:
  ```JS
  customElements.define("word-count", WordCount, { extends: "p" });
  ```

## Using Shadow DOM

- Shadow DOM terminology
  - Shadow root: the root of the shadow tree.
  - Shadow host: The regular DOM node that the shadow DOM is attached to.
  - Shadow tree: The DOM tree inside the shadow DOM.
  - Shadow boundary: the place where the shadow DOM ends, and the regular DOM begins.
- Create a shadow DOM

  - Imperatively with Javascript

    ```JS
    const host = document.querySelector("#host");
    const shadow = host.attachShadow({ mode: "open" });
    const span = document.createElement("span");
    span.textContent = "I'm in the shadow DOM";
    shadow.appendChild(span);
    ```

  - Declaratively with HTML

    ```HTML
    <div id="host">
      <template shadowrootmode="open">
        <span>I'm in the shadow DOM</span>
      </template>
    </div>
    ```

- Element.shadowRoot and the "mode" option
  - With mode set to "open", the JavaScript in the page is able to access the internals of your shadow DOM through the shadowRoot property of the shadow host.
  - If you don't want to give the page this ability, pass {mode: "closed"} instead, and then shadowRoot returns null.
- Encapsulation from CSS: CSS does not affect nodes inside the shadow DOM.
- Applying styles inside the shadow DOM

  - Programmatically, by constructing a CSSStyleSheet object and attaching it to the shadow root.

    ```JS
    const sheet = new CSSStyleSheet();
    sheet.replaceSync("span { color: red; border: 2px dotted black;}");

    const host = document.querySelector("#host");

    const shadow = host.attachShadow({ mode: "open" });
    shadow.adoptedStyleSheets = [sheet];

    const span = document.createElement("span");
    span.textContent = "I'm in the shadow DOM";
    shadow.appendChild(span);
    ```

  - Declaratively, by adding a \<style> element in a \<template> element's declaration.

    ```HTML
    <template id="my-element">
      <style>
        span {
          color: red;
          border: 2px dotted black;
        }
      </style>
      <span>I'm in the shadow DOM</span>
    </template>

    <div id="host"></div>
    <span>I'm not in the shadow DOM</span>
    ```

## Using templates and slots

- Using templates with web components

  ```JS
  customElements.define(
    "my-paragraph",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("custom-paragraph");
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    },
  );
  ```

  ```HTML
  <template id="custom-paragraph">
    <style>
      p {
        color: white;
        background-color: #666;
        padding: 5px;
      }
    </style>
    <p>My paragraph</p>
  </template>
  <my-paragraph></my-paragraph>
  ```

- Adding flexibility with slots

  ```HTML
  <template id="custom-paragraph">
    <style>
      p {
        color: white;
        background-color: #666;
        padding: 5px;
      }
    </style>
    <p>
      <slot name="my-text">My default text</slot>
    </p>
  </template>
  <my-paragraph>
    <span slot="my-text">Let's have some different text!</span>
  </my-paragraph>
  ```
