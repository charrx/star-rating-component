import { html, fixture, expect } from "@open-wc/testing";
import { Rating } from "./index";
import ".";

describe("Rating", () => {
  it("initializes with default properties", async () => {
    const el = await fixture<Rating>(html`<connect-rating></connect-rating>`);
    expect(el.rating).to.equal(3);
    expect(el.name).to.equal("rating");
    expect(el.readonly).to.be.false;
    expect(el.disabled).to.be.false;
    expect(el.size).to.equal("medium");
  });

  it("updates the rating on star click when not readonly or disabled", async function () {
    const el = await fixture<Rating>(html`<connect-rating></connect-rating>`);
    await el.updateComplete;
    const fourthIcon =
      el.shadowRoot!.querySelector<HTMLInputElement>('input[value="4"]');
    fourthIcon!.click();
    await el.updateComplete;
    expect(el.rating).to.equal(4);
  });

  it("does not update the rating when readonly", async () => {
    const el = await fixture<Rating>(
      html`<connect-rating readonly></connect-rating>`
    );
    const initialRating = el.rating;
    const firstIcon =
      el.shadowRoot!.querySelector<HTMLInputElement>('input[value="1"]');
    firstIcon!.click();
    expect(el.rating).to.equal(initialRating);
  });

  it("does not update the rating when disabled", async () => {
    const el = await fixture<Rating>(
      html`<connect-rating disabled></connect-rating>`
    );
    const initialRating = el.rating;
    const firstIcon =
      el.shadowRoot!.querySelector<HTMLInputElement>('input[value="1"]');
    firstIcon!.click();
    expect(el.rating).to.equal(initialRating);
  });

  it("setSelectedIconColor returns correct color", async () => {
    const el = await fixture<Rating>(html`<connect-rating></connect-rating>`);
    await el.updateComplete;

    el.rating = 3;
    el.disabled = false;
    expect(el.setSelectedIconColor(4)).to.equal("");
    expect(el.setSelectedIconColor(3)).to.equal(
      "color: var(--rating-icon-color-selected)"
    );

    el.disabled = true;
    expect(el.setSelectedIconColor(3)).to.equal(
      "color: var(--rating-icon-color-disabled)"
    );
  });
});

describe("Rating accessibility", () => {
  it("is accessible via keyboard", async () => {
    const el = await fixture<Rating>(
      html`<connect-rating rating="1"></connect-rating>`
    );
    await el.updateComplete;

    const ratingComponent = el.shadowRoot!.querySelector<HTMLFieldSetElement>(
      '[role="radiogroup"]'
    );
    ratingComponent!.focus();
    await el.updateComplete;

    let rightArrowEvent = new KeyboardEvent("keydown", { key: "ArrowRight" });
    ratingComponent!.dispatchEvent(rightArrowEvent);
    await el.updateComplete;

    expect(el.rating).to.equal(2);

    let leftArrowEvent = new KeyboardEvent("keydown", { key: "ArrowLeft" });
    ratingComponent!.dispatchEvent(leftArrowEvent);
    await el.updateComplete;

    expect(el.rating).to.equal(1);
  });

  it("radio buttons are correctly grouped by name", async () => {
    const el = await fixture<Rating>(html`<connect-rating></connect-rating>`);
    const radioButtons = el.shadowRoot!.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    );
    const groupName = radioButtons[0].name;
    radioButtons.forEach((radio) => {
      expect(radio.name).to.equal(groupName);
    });
  });

  it("uses correct aria labels and roles", async () => {
    const el = await fixture<Rating>(html`<connect-rating></connect-rating>`);
    expect(el.shadowRoot!.querySelector('[role="radiogroup"]')).to.not.be.null;

    const radioButtons = el.shadowRoot!.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    );
    radioButtons.forEach((radio, index) => {
      const expectedLabel =
        index === 0 ? "Selection cleared" : `Rating ${index}`;
      expect(radio).to.have.attribute("aria-label", expectedLabel);
    });
  });

  it("radiogroup has aria-disabled='true' when rating component is disabled", async () => {
    const el = await fixture<Rating>(
      html`<connect-rating disabled></connect-rating>`
    );
    const radioGroup = el.shadowRoot!.querySelector('[role="radiogroup"]');
    expect(radioGroup).to.have.attribute("disabled");
  });
});
