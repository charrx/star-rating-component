import { CSSResultGroup, css } from "lit";

export const tooltipStyles: CSSResultGroup = [
  css`
    :host {
      visibility: var(--tooltip-visibility, hidden);
      --tooltip-background-color: #3b3b3a;
      --tooltip-color: #fff;
    }

    .tooltip {
      background-color: var(--tooltip-background-color);
      color: var(--tooltip-color);
      padding: 0.75rem 0.8rem 0.75rem 1rem;
      border-radius: 4px;
      letter-spacing: 3px;
      font-size: 0.75rem;
      font-weight: 500;
      z-index: 1;
      left: 50%;
      position: absolute;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
      bottom: 125%;
      transform: translateX(-50%);
    }

    .tooltip::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--tooltip-background-color) transparent transparent
        transparent;
    }
  `,
];
