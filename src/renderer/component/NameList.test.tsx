import React from "react";
import ReactDOM from "react-dom";

import NameList from "./NameList";

describe("NameList", () => {
  let container: Element;

  function render(component: JSX.Element): void {
    ReactDOM.render(component, container);
  }

  beforeEach(() => {
    container = document.createElement("div");
  });

  it("NameList is not null", () => {
    render(<NameList names={[]} />);
    expect(container).not.toBeNull();
  });

  it("Render an item", () => {
    render(<NameList names={["fred"]} />);
    expect(container.textContent).toMatch("fred");
  });

  it("Render two item", () => {
    render(<NameList names={["fred", "mike"]} />);
    expect(container.querySelectorAll("li")[0].textContent).toMatch("fred");
    expect(container.querySelectorAll("li")[1].textContent).toMatch("mike");
  });
});
