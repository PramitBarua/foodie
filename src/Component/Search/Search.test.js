import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("Search Component", () => {
  const component = shallow(<Search />);

  it("Should have a search input field", () => {
    const wrapper = component.find(`[data-test='searchInput']`);
    expect(wrapper.length).toBe(1);
  });

  it("Should have a search button", () => {
    const wrapper = component.find(`[data-test='searchBtn']`);
    expect(wrapper.length).toBe(1);
  });
});
