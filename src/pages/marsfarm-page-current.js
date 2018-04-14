import { LitElement, html } from "@polymer/lit-element/lit-element.js";
import * as d3 from "d3";

class MarsfarmPageCurrent extends LitElement {
  ready() {
    super.ready();
    this.drawChart();
  }

  drawChart() {}

  render() {
    return html`
      <style> 
        .content {
          margin: 10px 10px 0 10px;
          padding: 5px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          background-color: #fff;
        }
      </style>

      <div class="content">
        <h1>Current Status</h1>
        <svg width="960" height="500"></svg>
      </div>
    `;
  }
}

customElements.define("marsfarm-page-current", MarsfarmPageCurrent);
