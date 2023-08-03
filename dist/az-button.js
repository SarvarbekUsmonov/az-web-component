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
    size = 'medium';
    btntype = 'defaulttype';
    constructor() {
        super();
        this.size = 'medium';
        this.btntype = 'defaulttype';
    }
    render() {
        return html `
      <button class="${this.size} ${this.btntype}">
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
AzButton = __decorate([
    customElement('az-button')
], AzButton);
// import { LitElement, html } from 'lit';
// import { customElement, property } from 'lit/decorators.js';
// @customElement('az-button')
// export class AzButton extends LitElement {
//   @property({ type: String })
//   size: 'large' | 'medium' | 'small' = 'medium';
//   @property({ type: String })
//   btntype: 'defaulttype' | 'btn-red' | 'btn-blue' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-outline-red' | 'btn-outline-blue' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark' = 'defaulttype';
//   constructor() {
//     super();
//   }
//   get btnClass() {
//     let sizeClass = '';
//     switch (this.size) {
//       case 'large':
//         sizeClass = 'btn-lg';
//         break;
//       case 'small':
//         sizeClass = 'btn-sm';
//         break;
//       default:
//         sizeClass = '';
//         break;
//     }
//     let typeClass = '';
//     if(this.btntype !== 'defaulttype') {
//       typeClass = this.btntype;
//     }
//     return `btn ${typeClass} ${sizeClass}`;
//   }
//   render() {
//     return html`
//       <button type="button" class="${this.btnClass}">
//         <slot></slot>
//       </button>
//     `;
//   }
// }
