import { CSSResultGroup, css } from "lit";

export const ratingStyles: CSSResultGroup = [
  css`
    /* Host targets the shadow DOM host element of your component, 
    allowing for better encapsulation and style scoping. 
    Defining variables in :host makes them available within the component and its shadow DOM, 
    but not outside, which aligns with the encapsulation principles of Web Components. */

    :host {
      /* Define the color of the stars */
      --rating-icon-color: #eee;
      --rating-icon-color-selected: #f2a702;
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
      flex-direction: row;
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

    .rating__label.small {
      width: var(--rating-icon-size-small);
      height: var(--rating-icon-size-small);
    }

    .rating__label.medium {
      width: var(--rating-icon-size-medium);
      height: var(--rating-icon-size-medium);
    }

    .rating__label.large {
      width: var(--rating-icon-size-large);
      height: var(--rating-icon-size-large);
    }

    input[type="radio"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    input[type="radio"]:disabled + label {
      pointer-events: none;
      opacity: 0.5;
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
