import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('<Input />', () => {
  const handleInputChangeFn = jest.fn();

  it('render Input as normal (not required)', () => {
    const wrapper = shallow(
      <Input
        labelName="test"
        inputType="text"
        dataField="test"
        handleInputChange={handleInputChangeFn}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('render Input as required', () => {
    const wrapper = shallow(
      <Input
        labelName="test"
        inputType="text"
        required
        dataField="test"
        handleInputChange={handleInputChangeFn}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
