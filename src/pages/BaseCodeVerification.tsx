import React, {ReactElement, useState} from 'react'
import {ReactComponent as LeftArrowIcon} from "public/svgs/left-arrow.svg";
import {useHistory} from "react-router";
import {VerificationApi} from "api/VerificationApi";
import {CodesApi} from "api/CodesApi";
import {UsersApi} from "api/UsersApi";
import {useAuthentication} from "hooks/useAuthentication";
import {useFormInput} from "hooks/useFormInput";

type Props = {
  title: ReactElement
  phoneNumber: string
}

export const BaseCodeVerification = ({title, phoneNumber}: Props) => {
  const history = useHistory()
  const authentication = useAuthentication(new UsersApi(), new VerificationApi())
  const code = useFormInput('123456')
  const [wrongCodeMessage, setWrongMessage] = useState('')

  const codes = new CodesApi()

  const toIndex = async (enteredCode: string) => {
    if (await codes.valid({value: enteredCode, phoneNumber})) {
      await authentication(enteredCode, phoneNumber)
      history.push('/')

      return
    }

    setWrongMessage('Wrong code, try again.')
  }
  const onCodeInput = (e: React.FormEvent<HTMLInputElement>) => {
    code.onChange(e)
    setWrongMessage('')
  }

  return (
    <div className="page code-verification">
      <div className="navigation">
        <LeftArrowIcon/>
        <a className="settings-link navigation-link">SETTINGS</a>
      </div>
      <form className="login-form">
        <div className="form-title">{phoneNumber}</div>
        <p className="phone-caption">
          {title}
        </p>
        <div className="form-group code-verification-group">
          <label htmlFor="code" className="input-label">Code</label>
          <input
            value={code.value}
            onInput={onCodeInput}
            className="clear-input form-input code-input"/>
          <div className="input-line"/>
        </div>
        <p style={{color: 'red'}}>{wrongCodeMessage}</p>
        <div
          className="btn btn-primary login-form-btn"
          onClick={() => toIndex(code.value)}>
          NEXT
        </div>
      </form>
    </div>
  )
}