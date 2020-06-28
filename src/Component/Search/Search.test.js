import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

const fakeData = {
  count: 2,
  recipes: [
    {
      publisher: "test publisher 1",
      title: "test title 1",
      source_url: "http://example.com/",
      recipe_id: "c82994",
      image_url: "http://example.com/test_image1.jpg",
      social_rank: 98.80509471559378,
      publisher_url: "http://examplepublisher1.com/",
    },
    {
      publisher: "test publisher 2",
      title: "test title 2",
      source_url: "http://example2.com/",
      recipe_id: "c82993",
      image_url: "http://example.com/test_image2.jpg",
      social_rank: 97,
      publisher_url: "http://examplepublisher2.com/",
    },
  ],
};

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
