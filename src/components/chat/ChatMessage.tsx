import React, {FC} from 'react'
import {Message, User} from "models";
import {inRowPositionClass} from "utils/inRowPositionClass";

type Props = {
  previousAuthor: User
  message: Message
  nextAuthor: User
}

export const ChatMessage: FC<Props> = ({previousAuthor, message, nextAuthor}: Props) => {
  const currentAuthor = message.author

  return (
    <div className={"message " + inRowPositionClass(previousAuthor, message.author, nextAuthor)}>
      <img src={currentAuthor.avatarUrl} alt="" className="circle message-author-avatar"/>
      <div className="message-wrapper">
        <div className="message-triangle"/>
        <span className="message-reply">Reply</span>
        <span className="message-author">{currentAuthor.firstName + " " + currentAuthor.lastName}</span>
        <div className="message-content">
          <span className="message-text">
            {message.content}
          </span>
          <div className="message-created-at">
            {message.creationDate}
          </div>
        </div>
      </div>
    </div>
  )
}