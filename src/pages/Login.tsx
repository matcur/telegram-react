import React, {useState} from 'react';
import {ReactComponent as LeftArrowIcon} from 'public/svgs/left-arrow.svg';
import {useHistory} from "react-router";
import {isValidPhone} from "utils/isValidPhone";
import {PhonesApi} from "api/PhonesApi";

type Props = {

}

export const Login = (props: Props) => {
  const history = useHistory()
  const [phoneNumber, setPhoneNumber] = useState('89545672654')
  const [invalidPhoneMessage, setInvalidPhoneMessage] = useState('')

  const toVerification = async () => {
    if (isValidPhone(phoneNumber)) {
      const response = await new PhonesApi().find(phoneNumber)
      if (response.success) {
        history.push(`/registered-user-code-verification?number=${response.result.number}`)
      } else {
        history.push(`/new-user-code-verification?number=${phoneNumber}`)
      }
    } else {
      setInvalidPhoneMessage('Invalid phone number. Try again.')
    }
  }
  const onPhoneInput = (number: string) => {
    setPhoneNumber(number)
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
            value={phoneNumber}
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