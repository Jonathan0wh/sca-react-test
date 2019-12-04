import React from 'react';
import { mount } from 'enzyme';

import App from './App';

it('render the whole App without crashing', () => {
  const wrapper = mount(<App />);

  expect(wrapper).toMatchSnapshot();
});
