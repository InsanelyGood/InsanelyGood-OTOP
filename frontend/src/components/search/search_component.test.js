import React from 'react'
import { shallow } from "enzyme";
import SearchComponent from './search_component'

describe('Search', () => {
  it("renders without crashing", () => {
    shallow(<SearchComponent />);
  });
})