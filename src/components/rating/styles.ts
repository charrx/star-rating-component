import { css } from "lit";

export const styles = [
  css`
    /* Host targets the shadow DOM host element of your component, 
    allowing for better encapsulation and style scoping. 
    Defining variables in :host makes them available within the component and its shadow DOM, 
    but not outside, which aligns with the encapsulation principles of Web Components. */

    :host {
      /* Define the color of the stars */
      --rating-star-color: #d0cccc;
      --rating-star-color-selected: #f2a702;
      --rating-star-color-disabled: #b8b8b7;
      --rating-color-focus: #189ee3;

      /* Define the size of the stars */
      --rating-star-size-small: 16px;
      --rating-star-size-medium: 24px;
      --rating-star-size-large: 32px;
    }

    .star-rating__fieldset {
      width: fit-content;
      border: none;
      display: flex;
      flex-direction: row;
    }

    .star-rating__fieldset:focus-within {
      outline: 3px solid var(--rating-color-focus);
      border-radius: 5px;
    }

    label {
      color: var(--rating-star-color);
    }

    .small {
      width: var(--rating-star-size-small);
      height: var(--rating-star-size-small);
    }

    .medium {
      width: var(--rating-star-size-medium);
      height: var(--rating-star-size-medium);
    }

    .large {
      width: var(--rating-star-size-large);
      height: var(--rating-star-size-large);
    }

    // input[type="radio"] {
    //   position: absolute;
    //   opacity: 0;
    //   width: 0;
    //   height: 0;
    // }
  `,
];
