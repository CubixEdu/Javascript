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
 export class CubixList2 extends LitElement {
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
     };
   }
 
   constructor() {
     super();
   }
 
   render() {
     return html`
        <div class="title">
            <p>Podium</p>
        </div>
        <ul>
            <li class="list-item">
              <slot name="item1"></slot>
            </li>
            <li class="list-item">
              <slot name="item2"></slot>
            </li>
            <li class="list-item">
              <slot name="item3"></slot>
            </li>
        </ul>
     `;
   }

 }
 
 window.customElements.define('cubix-list-2', CubixList2);
 