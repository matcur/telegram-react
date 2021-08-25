import React, {FC} from 'react'
import {Message, User} from "models";
import {inRowPositionClass} from "utils/inRowPositionClass";
import {DetailMessageContent} from "components/message/DetailMessageContent";
import cat from "public/images/index/cat-3.jpg"

type Props = {
  previousAuthor: User
  message: Message
  nextAuthor: User
}

export const ChatMessage: FC<Props> = ({previousAuthor, message, nextAuthor}: Props) => {
  const currentAuthor = message.author

  return (
    <div className={"message " + inRowPositionClass(previousAuthor, message.author, nextAuthor)}>
      <img src={cat} /** {currentAuthor.avatarUrl} **/ alt="" className="circle message-author-avatar"/>
      <div className="message-wrapper">
        <div className="message-triangle"/>
        <span className="message-reply">Reply</span>
        <span className="message-author">{currentAuthor.firstName + " " + currentAuthor.lastName}</span>
        <DetailMessageContent message={message}/>
      </div>
    </div>
  )
}