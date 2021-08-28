import React, {ReactElement, useState} from 'react'
import {ReactComponent as LeftArrowIcon} from "public/svgs/left-arrow.svg";
import {useHistory} from "react-router";
import {VerificationApi} from "api/VerificationApi";
import {CodesApi} from "api/CodesApi";
import {UsersApi} from "api/UsersApi";
import {useAuthentication} from "hooks/useAuthentication";

type Props = {
  title: ReactElement
  phoneNumber: string
}

export const BaseCodeVerification = ({title, phoneNumber}: Props) => {
  const history = useHistory()
  const authentication = useAuthentication(new UsersApi(), new VerificationApi())
  const [code, setCode] = useState('123456')
  const [wrongCodeMessage, setWrongMessage] = useState('')

  const codes = new CodesApi()

  const toIndex = async (code: string) => {
    if (await codes.valid({value: code, phoneNumber})) {
      history.push('/')
      await authentication(code, phoneNumber)

      return
    }

    setWrongMessage('Wrong code, try again.')
  }
  const onCodeInput = (value: string) => {
    setCode(value)
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
            value={code}
            onInput={e => onCodeInput(e.currentTarget.value)}
            className="clear-input form-input code-input"/>
          <div className="input-line"/>
        </div>
        <p style={{color: 'red'}}>{wrongCodeMessage}</p>
        <div
          className="btn btn-primary login-form-btn"
          onClick={() => toIndex(code)}>
          NEXT
        </div>
      </form>
    </div>
  )
}