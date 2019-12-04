import React from 'react';
import { shallow } from 'enzyme';

import SubscribeForm from '../SubscribeForm';

describe('<SubscribeForm />', () => {
  it('render form by default', () => {
    const wrapper = shallow(<SubscribeForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('render form with some text entered', () => {
    const wrapper = shallow(<SubscribeForm />);
    wrapper.setState({
      firstName: 'test First Name',
      lastName: 'test Last Name',
      email: 'test@email.com',
      mobilePhone: '2121121',
      submitting: false,
      subscribeSuccess: false
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('render form when submitting', () => {
    const wrapper = shallow(<SubscribeForm />);
    wrapper.setState({
      firstName: 'test First Name',
      lastName: 'test Last Name',
      email: 'test@email.com',
      mobilePhone: '2121121',
      submitting: true,
      subscribeSuccess: false
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('render success message after submitting success', () => {
    const wrapper = shallow(<SubscribeForm />);
    wrapper.setState({
      firstName: 'test First Name',
      lastName: 'test Last Name',
      email: 'test@email.com',
      mobilePhone: '2121121',
      submitting: false,
      subscribeSuccess: true
    });

    expect(wrapper).toMatchSnapshot();
  });
});
