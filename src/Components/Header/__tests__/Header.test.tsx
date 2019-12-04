import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

it('render Header without crashing', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
});
