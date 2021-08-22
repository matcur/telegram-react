import React from 'react'
import {LeftArrow} from "../components/icons/LeftArrow";

type Props = {

}

export const CodeVerification = (props: Props) => {
  return (
    <div className="page code-verification">
      <div className="navigation">
        <LeftArrow/>
        <a className="settings-link navigation-link">SETTINGS</a>
      </div>
      <form className="login-form">
        <div className="form-title">+7 434 123 43 34</div>
        <p className="phone-caption">
          A code was sent <strong>via Telegram</strong> to your other<br/>
          devices, if you have any connected.
        </p>
        <div className="form-group code-verification-group">
          <label htmlFor="code" className="input-label">Code</label>
          <input id="code" type="text" className="clear-input form-input code-input"/>
          <div className="input-line"/>
        </div>
        <div className="btn btn-primary login-form-btn">
          NEXT
        </div>
      </form>
    </div>
  )
}