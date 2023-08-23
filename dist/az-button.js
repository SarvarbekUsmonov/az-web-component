var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './styles/buttonStyles';
export let AzButton = class AzButton extends LitElement {
    static styles = [buttonStyles];
    size = 'default';
    btntype = 'defaulttype';
    display = 'default';
    arrow = false; // Default to false
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
        return html `
      <button class="${this.size} ${this.btntype} btn-${this.display} ${this.arrow ? 'btn-arrow-arrow' : ''} aria-pressed='true'">
        <slot></slot>
      </button>
    `;
    }
};
__decorate([
    property({ type: String })
], AzButton.prototype, "size", void 0);
__decorate([
    property({ type: String })
], AzButton.prototype, "btntype", void 0);
__decorate([
    property({ type: String })
], AzButton.prototype, "display", void 0);
__decorate([
    property({ type: Boolean }) // Change the property type to Boolean
], AzButton.prototype, "arrow", void 0);
AzButton = __decorate([
    customElement('az-button')
], AzButton);
