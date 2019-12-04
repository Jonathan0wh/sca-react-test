import React, { Component } from 'react';
import classNames from 'classnames';
import Swal from 'sweetalert2';
import axios from 'axios';

import styles from './SubscribeForm.module.scss';
import Input from 'Components/Shared/Input';
import Button from 'Components/Shared/Button';

interface SubscribeFormState {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  submitting: boolean;
  subscribeSuccess: boolean;
}

class SubscribeForm extends Component<{}, SubscribeFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      mobilePhone: '',
      submitting: false,
      subscribeSuccess: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(dataField: string, newValue: string) {
    this.setState<never>({
      [dataField]: newValue
    });
  }

  async handleFormSubmit() {
    this.setState({ submitting: true });

    // validate all required fields are filled
    if (!this.state.firstName || !this.state.lastName || !this.state.email) {
      Swal.fire({
        icon: 'warning',
        text: 'Please fill in all required fields'
      });
      this.setState({ submitting: false });
      return;
    }
    // validate email address
    if (
      !this.state.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      )
    ) {
      Swal.fire({
        icon: 'warning',
        text: 'Please fill in a valid email address'
      });
      this.setState({ submitting: false });
      return;
    }

    // submit to the server
    try {
      const response = await axios.post('localhost:4000', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        mobilePhone: this.state.mobilePhone
      });
      if (response.status === 200) {
        this.setState({ submitting: false, subscribeSuccess: true });
      } else {
        throw new Error(
          response.status + ' ' + response.statusText + ' ' + response.data
        );
      }
    } catch (error) {
      this.setState({ submitting: false });
      Swal.fire({
        icon: 'error',
        text: error.message
      });
    }
  }

  render() {
    return this.state.subscribeSuccess ? (
      <div className={styles.succsss_wrapper}>Thank you for subscribing!</div>
    ) : (
      <form className={styles.form}>
        <div className={classNames('container', styles.form_container)}>
          <div className="row">
            <div className="col-md-6">
              <Input
                labelName="First Name"
                inputType="text"
                required
                dataField="firstName"
                handleInputChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <Input
                labelName="Last Name"
                inputType="text"
                required
                dataField="lastName"
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Input
                labelName="Email"
                inputType="email"
                required
                dataField="email"
                handleInputChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <Input
                labelName="Mobile Phone"
                inputType="number"
                required={false}
                dataField="mobilePhone"
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <Button
              buttonText="Submit"
              handleClick={this.handleFormSubmit}
              loading={this.state.submitting}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SubscribeForm;
