class CounterButton extends HTMLButtonElement {
  count: number;

  constructor() {
    super();
    this.count = 0;
  }

  handleClick() {
    this.count++;
    this.updateDisplay();
  }

  updateDisplay() {
    this.textContent = `Count: ${this.count}`;
  }

  connectedCallback() {
    this.addEventListener("click", this.handleClick);

    this.updateDisplay();
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.handleClick);
  }
}

export function setupCounter() {
  customElements.define("counter-button", CounterButton, { extends: "button" });
}
