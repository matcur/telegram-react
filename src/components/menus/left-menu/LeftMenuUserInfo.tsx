import React, {FC} from 'react'
import cat from "../../../public/images/index/cat-3.jpg";

type Props = {

}

export const LeftMenuUserInfo: FC<Props> = ({}: Props) => {
  return (
    <div className="left-menu-user-info">
      <div className="df jcsb aic top-part">
        <img className="circle middle-avatar" src={cat} alt="image"/>
        <div className="circle saved-messages">
          <svg className="saved-messages-icon" aria-hidden="true" focusable="false" data-prefix="fas"
               data-icon="angle-double-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor"
                  d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
                  className=""/>
          </svg>
        </div>
      </div>
      <div className="df jcsb aic bottom-part">
        <div className="user-details">
          <div className="user-name">Resurect Resurectovic</div>
          <div className="phone-number">+7 944 123 22 22</div>
        </div>
      </div>
    </div>
  )
}