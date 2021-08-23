import React, {FC} from 'react'
import {Chat} from "models";
import {splitByThousands} from "utils/splitByThousands";

type Props = {
  chat: Chat
}

export const ChatHeader: FC<Props> = ({chat}: Props) => {
  return (
    <div className="chat-header">
      <div className="chat-details">
        <div className="chat-name">{chat.name}</div>
        <div className="members-count">{splitByThousands(chat.messages.length)} members</div>
      </div>
      <div className="chat-actions">
        <button className="clear-btn chat-action-btn">
          <svg className="chat-action-icon chat-icon-hover" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg"
                  d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735   c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0   c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z    M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0   C21.517,9.026,21.517,14.63,18.073,18.074z"/>
          </svg>
        </button>
        <button className="clear-btn chat-action-btn">
          <svg className="chat-action-icon chat-icon-hover"
               version="1.1" id="Capa_1" x="0px" y="0px"
               viewBox="0 0 512 512">
            <g>
              <g>
                <path
                  d="M512,197.819l-185.933-12.228L256,9.571l-70.067,176.021L0,197.82l142.658,120.93L95.856,502.429L256,401.214    l160.144,101.215l-46.8-183.671L512,197.819z M256,365.724l-112.464,71.08l32.827-128.831L75.829,222.888l130.971-8.603    L256,90.687l49.2,123.599l131.124,8.602l-100.689,85.077l32.829,128.839L256,365.724z"/>
              </g>
            </g>
          </svg>
        </button>
        <button className="clear-btn chat-action-btn">
          <svg className="chat-action-icon chat-icon-hover" xmlns="http://www.w3.org/2000/svg" width="16px"
               height="16px" viewBox="0 0 16 16"
               fill="currentColor">
            <path fill-rule="evenodd"
                  d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}