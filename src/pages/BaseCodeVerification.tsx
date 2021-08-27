import React, {ReactElement} from 'react'
import {ReactComponent as LeftArrowIcon} from "public/svgs/left-arrow.svg";

type Props = {
  title: ReactElement
  number: string
}

export const BaseCodeVerification = ({title, number}: Props) => {
  return (
    <div className="page code-verification">
      <div className="navigation">
        <LeftArrowIcon/>
        <a className="settings-link navigation-link">SETTINGS</a>
      </div>
      <form className="login-form">
        <div className="form-title">{number}</div>
        <p className="phone-caption">
          {title}
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