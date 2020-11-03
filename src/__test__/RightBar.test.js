import React from 'react';
import { shallow, mount } from 'enzyme';

import RightBar from '../Section/RightBar';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import initialState from '../store/reducers/initialState';

const mockStore = configureMockStore();

describe("Test RightBar Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({ applicationReducer: { ...initialState } });
    component = <Provider store={store}>
                  <RightBar />
                </Provider>;
  });

  it("it should render right  h1 text when isCustomLayout true", () => {
    const wrapper = mount(component);

    expect(wrapper.find('.right-bar__text').text()).toBe('Custom Implementation');
  });

  it("it should render right  h1 text when isCustomLayout false", () => {
    const store = mockStore({ applicationReducer: { ...initialState, isCustomLayout: false } });
    const wrapper = mount(
      <Provider store={store}>
        <RightBar />
      </Provider>
    );

    expect(wrapper.find('.right-bar__text').text()).toBe('Wolfram Alpha Implementation');
  });

  it('it should render snapshot correctly', () => {
    const wrapper = shallow(component);

    expect(wrapper).toMatchSnapshot();
  });
});
