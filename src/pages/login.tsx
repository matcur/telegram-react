import React from 'react';
import { LeftArrow } from '../components/icons/LeftArrow';

type Props = {

}

export const Login = (props: Props) => {
  return (
    <div className="page login-page">
      <div className="navigation qr-code-navigation">
        <LeftArrow/>
        <a className="settings-link navigation-link">SETTINGS</a>
      </div>
      <form className="login-form">
        <div className="form-title">Your Phone Number</div>
        <p className="phone-caption">
          Please confirm your country code and<br/>
          enter your mobile phone number.
        </p>
        <div className="form-group login-phone-group">
          <input type="text" className="clear-input form-input phone-input"/>
          <div className="input-line"/>
        </div>
        <div className="btn btn-primary login-form-btn">
          NEXT
        </div>
      </form>
    </div>
  )
}