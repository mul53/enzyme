import React, { useState } from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should render App component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it('should create context and pass it to App component', () => {
  const context = { name: 'bob' };
  const wrapper = shallow(<App />, { context });
  expect(wrapper.context()).toBe(true);
});
