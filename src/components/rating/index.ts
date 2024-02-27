import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ratingStyles } from "./styles";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";

//TODO:
// 3. Add half star functionality

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
  declare rating: number;

  @property({ type: String })
  declare name?: string;

  @property({ type: Boolean })
  declare readonly?: boolean;

  @property({ type: Boolean })
  declare disabled?: boolean;

  @property({ type: String })
  declare size?: Sizes;

  constructor() {
    super();
    this.rating = 3;
    this.name = "rating";
    this.readonly = false;
    this.disabled = false;
    this.size = "medium";
  }

  render() {
    return html`
      <fieldset
        class="rating__fieldset"
        role="radiogroup"
        ?disabled="${this.disabled || this.readonly}"
        @keydown="${this.handleKeyDown}"
      >
        <legend class="visually-hidden">Provide your rating</legend>
        <input
          type="radio"
          name="rating"
          value="0"
          checked
          @change="${this.handleRatingChange}"
          aria-hidden="true"
          aria-label="Selection cleared"
        />
        ${map(range(1, 5 + 1), (value) => {
          return html`
            <input
              type="radio"
              name="${this.name}"
              id="${value}"
              value="${value}"
              @change="${this.handleRatingChange}"
              aria-label="Rating ${value}"
              ?checked="${this.rating >= value}"
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

  handleKeyDown(event: KeyboardEvent) {
    if (this.readonly || this.disabled) return;

    const maxRating = 5; // Could have had a maxRating property to increase flexibility
    const minRating = 1;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        this.rating = this.rating < maxRating ? this.rating + 1 : minRating;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        this.rating = this.rating > minRating ? this.rating - 1 : maxRating;
        break;
      default:
        return;
    }

    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "connect-rating": Rating;
  }
}
