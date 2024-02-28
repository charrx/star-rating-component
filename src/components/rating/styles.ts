import { CSSResultGroup, css } from "lit";

export const ratingStyles: CSSResultGroup = [
  css`
    :host {
      /* Define the color of the icons */
      --rating-icon-color-selected: #ffd500;
      --rating-icon-color-disabled: #9f9f9f;
      --rating-color-focus: #189ee3;

      /* Define the size of the icons */
      --rating-icon-size-small: 16px;
      --rating-icon-size-medium: 24px;
      --rating-icon-size-large: 32px;
    }

    .rating__fieldset {
      width: fit-content;
      position: relative;
      border: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .rating__fieldset:focus-within {
      outline: 3px solid var(--rating-color-focus);
      border-radius: 5px;
    }

    .rating__fieldset:hover > connect-tooltip {
      --tooltip-visibility: visible;
    }

    .rating__label {
      display: inline-block;
      position: relative;
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

    .rating__label:hover > connect-tooltip {
      --tooltip-visibility: visible;
    }

    .rating__icon--half {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      display: block;
      width: 50%;
      height: 100%;
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

    .sr-only {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      width: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    }
  `,
];
