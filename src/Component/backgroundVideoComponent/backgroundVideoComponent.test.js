import React from "react";
import BackgroundVideoComponent from "./BackgroundVideoComponent";
import { shallow } from "enzyme";

describe("background video component", () => {
  const component = shallow(<BackgroundVideoComponent />);

  it("should contain a video", () => {
    const wrapper = component.find(`[data-test='backgroundVideo']`);
    expect(wrapper.length).toBe(1);
  });
});
