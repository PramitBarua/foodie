import React from "react";
import { shallow } from "enzyme";
import HeaderComponent from "./HeaderComponent";
import Search from "../Search/Search";

describe("header component", () => {
  const component = shallow(<HeaderComponent />);
  console.log(component.debug());

  it("should contain the Search component", () => {
    expect(component.find(Search)).toHaveLength(1);
  });
});
