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
export class CubixCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        border-radius: 10px;
        box-shadow: 0px 3px 15px rgba(0,0,0, 0.2);
        padding: 32px;
        max-width: 800px;
        font-family: 'Roboto', sans-serif;
        margin: 8px 0;
      }

      p {
        font-weight: bold
      }
    `;
  }

  static get properties() {
    return {
      title: {type: String}
    };
  }

  constructor() {
    super();
    this.title = '';
  }

  render() {
    return html`
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
      <h1>${this.title}</h1>
      <slot></slot>
    `;
  }
}

window.customElements.define('cubix-card', CubixCard);
