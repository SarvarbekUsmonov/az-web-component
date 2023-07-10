import { html, css, LitElement } from 'lit';
export class MyComponent extends LitElement {
    render() {
        return html `
      <h1>Hello Lit!</h1>
      <button>Arizona</button>
    `;
    }
}
MyComponent.styles = css `
    :host {
      display: block;
      padding: 16px;
      background-color: #f5f5f5;
      color: #333;
    }
  `;
customElements.define('my-component', MyComponent);
