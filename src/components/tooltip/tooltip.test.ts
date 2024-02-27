import { html, fixture, expect } from "@open-wc/testing";
import { Tooltip } from "./index";
import ".";

describe("Tooltip", () => {
  it("initializes with a default rating of 0", async () => {
    const el = await fixture<Tooltip>(
      html`<connect-tooltip></connect-tooltip>`
    );
    await el.updateComplete;

    expect(el.rating).to.equal(0);
  });

  it("updates displayed rating when `rating` property changes", async () => {
    const el = await fixture<Tooltip>(
      html`<connect-tooltip></connect-tooltip>`
    );
    el.rating = 4;
    await el.updateComplete;
    const displayedText = el.shadowRoot!.querySelector(".tooltip")!.textContent;
    expect(displayedText).to.contain("4/5");
  });
});

describe("Tooltip styles", () => {
  it("initializes with hidden visibility", async () => {
    const el = await fixture<Tooltip>(
      html`<connect-tooltip></connect-tooltip>`
    );
    const tooltipElement = el.shadowRoot!.querySelector(".tooltip");
    const tooltipStyles = window.getComputedStyle(tooltipElement!);

    expect(tooltipStyles.getPropertyValue("visibility")).to.equal("hidden");
  });
});

describe("Tooltip accessibility", () => {
  it('has `aria-hidden` set to "true"', async () => {
    const el = await fixture<Tooltip>(
      html`<connect-tooltip></connect-tooltip>`
    );
    const tooltipElement = el.shadowRoot!.querySelector(".tooltip");
    expect(tooltipElement).to.have.attribute("aria-hidden", "true");
  });
});
