import { render } from "@testing-library/react";
import React from "react";

import Timer from "./Timer";

// jest useFakerTimers 를 활용해서 실제 시간의 제약없이
// timeout을 mock으로 테스트할 수 있다

describe("Timer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("render Timer", async () => {
    const { getByTestId } = render(<Timer duration={1000}></Timer>);
    expect(getByTestId("status")).toBeInTheDocument();
    expect(getByTestId("status").textContent).toMatch("wating");
  });

  it("dataloader after timeout", async () => {
    const { getByTestId, findByText } = render(<Timer duration={5000}></Timer>);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);
    expect(getByTestId("status").textContent).toMatch("wating");

    jest.advanceTimersByTime(5000);
    expect(await findByText("done")).toBeInTheDocument;
  });
});
