import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tooltipStyles } from "./styles";

/**
 * `Tooltip` is a custom element that renders a tooltip with a rating value.
 * It displays the rating value when the user hovers over the rating component.
 */
@customElement(`connect-tooltip`)
export class Tooltip extends LitElement {
  static styles = tooltipStyles;

  @property({ type: Number })
  declare rating: number;

  constructor() {
    super();
    this.rating = 0;
  }

  render() {
    return html`<span aria-hidden="true" class="tooltip">
      ${`${this.rating}/5`}
    </span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connect-tooltip": Tooltip;
  }
}
