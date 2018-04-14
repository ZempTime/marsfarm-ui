import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { LitElement, html } from "@polymer/lit-element/lit-element.js";
import "@polymer/app-layout/app-header-layout/app-header-layout.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@polymer/paper-item/paper-icon-item.js";

class MarsfarmApp extends LitElement {
  constructor() {
    super();
    this.toggleDrawerLayout = this.toggleDrawerLayout.bind(this);
  }

  toggleDrawerLayout() {
    const drawerLayout = this.shadowRoot.querySelector("app-drawer-layout");

    if (drawerLayout.forceNarrow || !drawerLayout.narrow) {
      drawerLayout.forceNarrow = !drawerLayout.forceNarrow;
    } else {
      drawerLayout.drawer.toggle();
    }
  }

  render() {
    return html`
    <style>
      app-header {
        background-color: #4285f4;
        color: #fff;
      }
      app-header paper-icon-button {
        --paper-icon-button-ink-color: #fff;
      }
      app-drawer-layout {
        --app-drawer-layout-content-transition: margin 0.2s;
      }
      app-drawer {
        --app-drawer-content-container: {
          background-color: #eee;
        }
      }
      .drawer-content {
        margin-top: 80px;
        height: calc(100% - 80px);
        overflow: auto;
      }
    </style>

    <app-header-layout>
      <app-header fixed effects="waterfall" slot="header">
        <app-toolbar>
          <paper-icon-button
            icon="menu"
            on-click=${this.toggleDrawerLayout}
          ></paper-icon-button>
        </app-toolbar>
      </app-header>

      <app-drawer-layout>

        <app-drawer slot="drawer">
          <div class="drawer-content">
            <paper-icon-item>
              <iron-icon icon="account-box" slot="item-icon"></iron-icon> <span>Log In</span>
            </paper-icon-item>
            <paper-icon-item>
              <iron-icon icon="trending-up" slot="item-icon"></iron-icon> <span>Current Status</span>
            </paper-icon-item>
            <paper-icon-item>
              <iron-icon icon="add-box" slot="item-icon"></iron-icon> <span>Data Entry</span>
            </paper-icon-item>
          </div>
        </app-drawer>

        <h1>Sample Content</h1>

      </app-drawer-layout>

    </app-header-layout>
    `;
  }
}

// Register the element with the browser.
customElements.define("marsfarm-app", MarsfarmApp);
