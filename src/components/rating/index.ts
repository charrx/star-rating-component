import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ratingStyles } from "./styles";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";

//TODO:
// 1. Add tooltip component and activate it on hover
// 2. Write tests for the component
// 3. Add half star functionality
// 4. Implement read-only and disabled states

type Sizes = "small" | "medium" | "large";

/**
 * `Rating` is a custom element that renders a star rating system.
 * It allows users to provide a rating by selecting stars.
 * The component can be customized with properties such as `rating`, `name`, `readonly`, `disabled`, and `size`.
 */
@customElement(`connect-rating`)
export class Rating extends LitElement {
  static styles = ratingStyles;

  @property({ type: Number })
  rating: number = 3;

  @property({ type: String })
  name?: string = "rating";

  @property({ type: Boolean })
  readonly?: boolean = false;

  @property({ type: Boolean })
  disabled?: boolean = false;

  @property({ type: String })
  size?: Sizes = "medium";

  setSelectedIconColor(value: number): string {
    const isSelected = this.rating >= value;
    if (this.disabled && isSelected) {
      return "color: var(--rating-icon-color-disabled)";
    }
    return isSelected ? "color: var(--rating-icon-color-selected)" : "";
  }

  handleRatingChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.rating = parseInt(target.value, 10);
  }

  render() {
    return html`
      <fieldset
        class="rating__fieldset"
        role="radiogroup"
        aria-hidden="${this.readonly}"
      >
        <legend class="visually-hidden">Rating</legend>
        <input
          type="radio"
          name="rating"
          value="0"
          checked
          @change="${this.handleRatingChange}"
          ?disabled="${this.disabled || this.readonly}"
        />
        ${map(range(1, 5 + 1), (value) => {
          return html`
            <input
              type="radio"
              name="${this.name}"
              id="${value}"
              value="${value}"
              @change="${this.handleRatingChange}"
              aria-label="${value} stars"
              ?checked="${this.rating >= value}"
              ?disabled="${this.disabled || this.readonly}"
            />
            <label
              for="${value}"
              class="rating__label rating__label--${this.size}"
              style="${this.setSelectedIconColor(value)}"
            >
              <connect-icon></connect-icon>
              <connect-tooltip rating="${value}"></connect-tooltip>
            </label>
          `;
        })}
        ${this.readonly
          ? html`<connect-tooltip rating="${this.rating}"></connect-tooltip>`
          : ""}
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connect-rating": Rating;
  }
}
