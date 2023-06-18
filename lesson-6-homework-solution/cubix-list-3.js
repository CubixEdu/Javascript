/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';

 /**
  * An example element.
  *
  * @fires count-changed - Indicates when the count changes
  * @slot - This element has a slot
  * @csspart button - The button
  */
 export class CubixList3 extends LitElement {
   static get styles() {
     return css`
       :host {
         display: block;
         border: solid 1px #e2e2e2;
         border-radius: 10px;
         max-width: 400px;
         font-family: Arial, Helvetica, sans-serif;
         color: #767676;
       }

       .title {
        background-color: #e2e2e2;
        padding: 6px;
        border-radius: 10px 10px 0 0;
        text-align: center;
       }

       ul {
        list-style: none;
        padding: 0;
        margin: 0;
       }

       .list-item {
        border-top: solid 1px #e2e2e2;
        padding: 14px 12px;
       }
     `;
   }
 
   static get properties() {
     return {
      items: {type: Array}
     };
   }
 
   constructor() {
     super();
   }

   createListItem(items) {
    // const parsedItems = JSON.parse(this.items);
    return items.map(item =>  html`<li class="list-item">${item}</li>`);
   }
 
   render() {
     return html`
        <div class="title">
            <p>Podium</p>
        </div>
        <ul>
          ${this.createListItem(this.items)}
        </ul>
     `;
   }

 }
 
 window.customElements.define('cubix-list-3', CubixList3);
 