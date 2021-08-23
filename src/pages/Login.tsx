import React from 'react';
import { LeftArrowIcon } from '../components/icons/LeftArrowIcon';
import {useHistory} from "react-router";

type Props = {

}

export const Login = (props: Props) => {
  const history = useHistory()

  const toVerification = () => history.push('/code-verification')

  return (
    <div className="page login-page">
      <div className="navigation qr-code-navigation">
        <LeftArrowIcon/>
        <a className="settings-link navigation-link">SETTINGS</a>
      </div>
      <form className="login-form" onSubmit={toVerification}>
        <div className="form-title">Your Phone Number</div>
        <p className="phone-caption">
          Please confirm your country code and<br/>
          enter your mobile phone number.
        </p>
        <div className="form-group login-phone-group">
          <input type="text" className="clear-input form-input phone-input"/>
          <div className="input-line"/>
        </div>
        <div
          className="btn btn-primary login-form-btn"
          onClick={toVerification}>
          NEXT
        </div>
      </form>
    </div>
  )
}