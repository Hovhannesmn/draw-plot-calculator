import React from 'react';
import { shallow } from 'enzyme';

import CalculatorItems from '../Components/Calculator/CalculatorItems';

import noop from '../utils/noop';

describe("Test CalculatorItems Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CalculatorItems handleChange={noop} />);
  });

  it('it should render CalculatorItems snapshot when loaded', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
