import { LitElement, html } from 'lit';
import { buttonStyles } from './styles/buttonStyles';
class MyComponent extends LitElement {
    constructor() {
        super();
        this.size = 'medium';
        this.btntype = 'deafulttype';
    }
    render() {
        return html `
      <button class="${this.size} ${this.btntype}">
        <slot></slot>
      </button>
    `;
    }
}
MyComponent.styles = [buttonStyles];
MyComponent.properties = {
    size: { type: String },
    btntype: { type: String }
};
customElements.define('my-component', MyComponent);
export { MyComponent };
