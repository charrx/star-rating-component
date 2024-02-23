import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tooltipStyles } from "./styles";

@customElement(`tooltip`)
export class Tooltip extends LitElement {
  static styles = tooltipStyles;

  @property({ type: Number })
  rating: number = 3;

  render() {
    return html`
      <span aria-hidden="true" class="tooltip"> ${`${this.rating}/5`} </span>;
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    tooltip: Tooltip;
  }
}
