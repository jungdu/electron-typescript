import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Input, { Props as InputProps } from "./Input";

describe("Input", () => {
  const setup = (props: InputProps = {}) => {
    const { getByRole, ...utils } = render(<Input {...props}></Input>);
    const textbox = getByRole("textbox");

    return {
      textbox,
      getByRole,
      ...utils,
    };
  };

  it("Renders Input tag", () => {
    const { textbox } = setup();
    expect(textbox).toBeInTheDocument();
  });

  it("Initial value is empty", () => {
    const { textbox } = setup();
    expect(textbox.getAttribute("value")).toBe("");
  });

  it("textbox has initialValue ", () => {
    const { textbox } = setup({ initialValue: "init" });
    expect(textbox.getAttribute("value")).toBe("init");
  });

  it("change value by changeEvent", () => {
    const { textbox } = setup({ initialValue: "init" });
    fireEvent.change(textbox, {
      target: {
        value: "new value",
      },
    });
    expect(textbox.getAttribute("value")).toBe("new value");
  });
});
