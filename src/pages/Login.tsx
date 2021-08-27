import React, {useState} from 'react';
import {ReactComponent as LeftArrowIcon} from 'public/svgs/left-arrow.svg';
import {useHistory} from "react-router";
import {isValidPhone} from "utils/isValidPhone";

type Props = {

}

export const Login = (props: Props) => {
  const history = useHistory()
  const [phone, setPhone] = useState('')
  const [invalidPhoneMessage, setInvalidPhoneMessage] = useState('')

  const toVerification = () => {
    if (isValidPhone(phone)) {
      history.push('/code-verification')
    } else {
      setInvalidPhoneMessage('Invalid phone number. Try again.')
    }
  }
  const onPhoneInput = (number: string) => {
    setPhone(number)
    setInvalidPhoneMessage('')
  }

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
          <input
            value={phone}
            onInput={e => onPhoneInput(e.currentTarget.value)}
            className="clear-input form-input phone-input"/>
          <div className="input-line"/>
        </div>
        <div className="invalid-phone-number">{invalidPhoneMessage}</div>
        <div
          className="btn btn-primary login-form-btn"
          onClick={toVerification}>
          NEXT
        </div>
      </form>
    </div>
  )
}