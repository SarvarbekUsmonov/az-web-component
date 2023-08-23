import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './styles/buttonStyles';

@customElement('az-button')
export class AzButton extends LitElement {
  static styles = [buttonStyles];

  @property({ type: String })
  size: 'default' | 'large' | 'medium' | 'small' = 'default';

  @property({ type: String })
  btntype: 'defaulttype' | 'btn-red' | 'btn-blue' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-outline-red' | 'btn-outline-blue' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark' | 'btn-outline-white' = 'defaulttype';

  @property({ type: String })
  display: 'default' | 'block' = 'default';

  @property({ type: Boolean }) // Change the property type to Boolean
  arrow: boolean = false; // Default to false

  constructor() {
    super();
    this.size = 'default';
    this.btntype = 'defaulttype';
    this.display = 'default';
    this.arrow = false; // Default to false
  }

  connectedCallback() {
    super.connectedCallback();
    this.injectStylesheetIfNotExists();
  }

  injectStylesheetIfNotExists() {
    const stylesheetUrl = 'https://use.typekit.net/emv3zbo.css';
    if (!document.head.querySelector(`link[href="${stylesheetUrl}"]`)) {
      const linkEl = document.createElement('link');
      linkEl.href = stylesheetUrl;
      linkEl.rel = 'stylesheet';
      linkEl.crossOrigin = 'anonymous';
      document.head.appendChild(linkEl);
    }
  }

  render() {
    return html`
      <button class="${this.size} ${this.btntype} btn-${this.display} ${this.arrow ? 'btn-arrow-arrow' : ''}">
        <slot></slot>
      </button>
    `;
  }
}