import { CSSResultGroup, css } from "lit";

export const ratingStyles: CSSResultGroup = [
  css`
    :host {
      /* Define the color of the stars */
      --rating-icon-color: #eee;
      --rating-icon-color-selected: #ffd500;
      --rating-icon-color-disabled: #b8b8b7;
      --rating-color-focus: #189ee3;

      /* Define the size of the stars */
      --rating-icon-size-small: 16px;
      --rating-icon-size-medium: 24px;
      --rating-icon-size-large: 32px;
    }

    .rating__fieldset {
      width: fit-content;
      border: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .rating__fieldset:focus-within {
      outline: 3px solid var(--rating-color-focus);
      border-radius: 5px;
    }

    .rating__label {
      color: var(--rating-icon-color);
      cursor: pointer;
    }

    .rating__label--small {
      width: var(--rating-icon-size-small);
      height: var(--rating-icon-size-small);
    }

    .rating__label--medium {
      width: var(--rating-icon-size-medium);
      height: var(--rating-icon-size-medium);
    }

    .rating__label--large {
      width: var(--rating-icon-size-large);
      height: var(--rating-icon-size-large);
    }

    .rating__value {
      font-size: 1.25rem;
      font-weight: bold;
      margin-left: 0.5rem;
    }

    input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    input[type="radio"]:disabled + label {
      pointer-events: none;
    }

    /* Styling for visually hidden elements */
    .visually-hidden {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }
  `,
];
