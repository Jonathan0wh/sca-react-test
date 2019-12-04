import React from 'react';
import classNames from 'classnames';

import styles from './SubscribeForm.module.scss';
import Input from 'Components/Shared/Input';
import Button from 'Components/Shared/Button';

const SubscribeForm = () => (
  <form action="" method="post" className={styles.form}>
    <div className={classNames('container', styles.form_container)}>
      <div className="row">
        <div className="col-md-6">
          <Input labelName="First Name" inputType="text" required />
        </div>
        <div className="col-md-6">
          <Input labelName="Last Name" inputType="text" required />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Input labelName="Email" inputType="email" required />
        </div>
        <div className="col-md-6">
          <Input labelName="Mobile Phone" inputType="number" required={false} />
        </div>
      </div>

      <div className="row">
        <Button buttonText="Submit" />
      </div>
    </div>
  </form>
);

export default SubscribeForm;
