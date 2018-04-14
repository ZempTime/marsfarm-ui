/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol.
import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { LitElement, html } from "@polymer/lit-element/lit-element.js";
import "@polymer/app-layout/app-header-layout/app-header-layout.js";
import "@polymer/polymer/lib/elements/dom-if.js";
import "@polymer/paper-checkbox/paper-checkbox.js";

class MarsfarmApp extends LitElement {
  static get properties() {
    return {
      message: {
        type: String,
        value: ""
      },
      pie: {
        type: Boolean,
        value: false,
        observer: "togglePie"
      },
      loadComplete: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    // If you override the constructor, always call the
    // superconstructor first.
    super();
    this.message = "Hello World! I'm a Polymer element :)";
    this.onPieChanged = this.onPieChanged.bind(this);
  }

  onPieChanged(e) {
    this.pie = e.detail.value;
  }

  togglePie() {
    if (this.pie && !this.loadComplete) {
      // See https://developers.google.com/web/updates/2017/11/dynamic-import
      import("./lazy-element.js")
        .then(LazyElement => {
          console.log("LazyElement loaded");
        })
        .catch(reason => {
          console.log("LazyElement failed to load", reason);
        });
      this.loadComplete = true;
    }
  }

  render({ pie, message }) {
    return html`
      <h1>Start Polymer 3.0</h1>
      <p>${message}</p>
      <paper-checkbox 
        checked="${pie}"
        on-checked-changed=${this.onPieChanged}
        >I like pie.</paper-checkbox>

      ${
        this.pie
          ? html`
            <lazy-element><p>lazy loading...</p></lazy-element>
            <p>hello this is if</i>
            `
          : html`<p>not checked<p>`
      }
    `;
  }
}

// Register the element with the browser.
customElements.define("marsfarm-app", MarsfarmApp);
