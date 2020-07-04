import { render } from "@testing-library/react";
import React from "react";

import NameList from "./NameList";

describe("NameList", () => {
  it("NameList is not null", () => {
    const { container } = render(<NameList names={[]} />);
    expect(container).not.toBeNull();
  });

  it("Render an item", () => {
    const { getByRole } = render(<NameList names={["fred"]} />);
    expect(getByRole("listitem")).not.toBeNull();
    expect(getByRole("listitem").textContent).toBe("fred");
  });

  it("Render two item", () => {
    const { queryAllByRole } = render(<NameList names={["fred", "mike"]} />);
    expect(queryAllByRole("listitem").length).toBe(2);
    const textContents = queryAllByRole("listitem").map(
      (elem) => elem.textContent
    );
    expect(textContents).toContain("fred");
    expect(textContents).toContain("mike");
  });
});
