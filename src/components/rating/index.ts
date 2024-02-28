import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ratingStyles } from "./styles";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";

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

  /**
   * Handles the change event to update the rating value.
   * @param event - The change event
   * @returns void
   * @internal
   */
  handleRatingChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.rating = parseInt(target.value, 10);
  }

  /**
   * Determines whether to display a half icon based on the rating value and the component's state.
   * @param value - The rating value
   * @returns A boolean value
   * @internal
   */
  shouldDisplayHalfIcon(value: number): boolean {
    return !!this.readonly && this.rating > value - 1 && this.rating < value;
  }

  /**
   * Sets the color of the rating icon based on the rating value and the component's state.
   * @param value - The rating value
   * @returns The CSS custom property value
   * @internal
   */
  setIconColor(value: number): string {
    const isSelected = this.rating >= value;
    if (this.disabled && isSelected) {
      return "--icon-color: var(--rating-icon-color-disabled)";
    }
    return isSelected ? "--icon-color: var(--rating-icon-color-selected)" : "";
  }

  /**
   * Handles the keydown event to allow users to navigate the rating using the keyboard.
   * @param event - The keyboard event
   * @returns void
   * @internal
   */
  handleKeyDown(event: KeyboardEvent) {
    if (this.readonly || this.disabled) return;

    const maxRating = 5;
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

  /**
   * Renders the rating icon based on the rating value and the component's state.
   * @param value - The rating value
   * @returns A template result
   * @internal
   */
  renderRatingIcon(value: number) {
    const isSelected = this.rating >= value;
    const iconColor = this.setIconColor(value);
    const icon = this.shouldDisplayHalfIcon(value)
      ? html`<connect-icon></connect-icon
          ><connect-icon
            class="rating__icon--half"
            style="--icon-color: var(--rating-icon-color-selected)"
          ></connect-icon>`
      : html`<connect-icon style="${iconColor}"></connect-icon>`;

    return html`
      <input
        type="radio"
        name="${this.name}"
        id="${value}"
        value="${value}"
        @change="${this.handleRatingChange}"
        aria-label="Rating ${value}"
        ?checked="${isSelected}"
      />
      <label for="${value}" class="rating__label rating__label--${this.size}">
        ${icon}
        <connect-tooltip rating="${value}"></connect-tooltip>
      </label>
    `;
  }

  render() {
    return html`
      <fieldset
        class="rating__fieldset"
        role="radiogroup"
        ?disabled="${this.disabled || this.readonly}"
        @keydown="${this.handleKeyDown}"
      >
        <legend class="sr-only">Provide your rating</legend>
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
          return html`${this.renderRatingIcon(value)} `;
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
