import { CSSResultGroup, css } from "lit";

export const tooltipStyles: CSSResultGroup = [
  css`
    :host {
      visibility: var(--tooltip-visibility, hidden);
      --tooltip-background-color: #3b3b3a;
      --tooltip-color: #fff;
      --tooltip-padding: 0.4375rem 0.625rem 0.4375rem 0.6875rem;
      --tooltip-border-radius: 0.25rem;
      --tooltip-font-size: 0.75rem;
      --tooltip-box-shadow: 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.25);
    }

    .tooltip {
      background-color: var(--tooltip-background-color);
      color: var(--tooltip-color);
      padding: var(--tooltip-padding);
      border-radius: var(--tooltip-border-radius);
      letter-spacing: 1px;
      font-size: var(--tooltip-font-size);
      font-weight: 400;
      z-index: 1;
      left: 50%;
      position: absolute;
      box-shadow: var(--tooltip-box-shadow);
      bottom: 125%;
      transform: translateX(-50%);
      text-align: center;
    }

    .tooltip::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -0.3125rem;
      border-width: 0.3125rem;
      border-style: solid;
      border-color: var(--tooltip-background-color) transparent transparent
        transparent;
    }
  `,
];
