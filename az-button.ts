import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { buttonStyles } from './styles/buttonStyles';

@customElement('az-button')
export class AzButton extends LitElement {
  static styles = [buttonStyles];

  @property({ type: String })
  size: 'large' | 'medium' | 'small' = 'medium';

  @property({ type: String })
  btntype: 'defaulttype' | 'btn-red' | 'btn-blue' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-outline-red' | 'btn-outline-blue' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark' = 'defaulttype';

  constructor() {
    super();
    this.size = 'medium';
    this.btntype = 'defaulttype';
  }

  render() {
    return html`
      <button class="${this.size} ${this.btntype}">
        <slot></slot>
      </button>
    `;
  }
}
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
