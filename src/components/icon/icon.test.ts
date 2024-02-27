import { html, fixture, expect } from "@open-wc/testing";
import { Icon } from "./index";
import ".";

describe("Icon", () => {
  it("initializes with an SVG element", async () => {
    const el = await fixture<Icon>(html`<connect-icon></connect-icon>`);
    await el.updateComplete;

    expect(el.shadowRoot).to.not.be.null;

    const svg = el.shadowRoot!.querySelector("svg");
    expect(svg).to.not.be.null;
  });
});
