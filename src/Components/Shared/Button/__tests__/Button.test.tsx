import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('<Button />', () => {
  const clickFn = jest.fn();

  it('render button in normal condtion', () => {
    const wrapper = shallow(<Button buttonText="test" handleClick={clickFn} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('render button in loading condtion', () => {
    const wrapper = shallow(
      <Button buttonText="test" handleClick={clickFn} loading />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
