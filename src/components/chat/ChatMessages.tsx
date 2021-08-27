import React, {createRef, FC, useEffect} from 'react'
import {Message} from "models";
import {useAppSelector} from "app/hooks";
import {ChatMessage} from "./ChatMessage";
import {nullMessage} from "nullables";

type Props = {
  messages: Message[]
}

export const ChatMessages: FC<Props> = ({messages}: Props) => {
  const currentUser = useAppSelector(state => state.authorization.currentUser)
  const scrollBarRef = createRef<HTMLDivElement>()

  const makeMessages = (messages: Message[]) => {
    return messages.map((message, i) => {
      const previous = i === 0? nullMessage: messages[i - 1]
      const next = i + 1 === messages.length? nullMessage: messages[i + 1]

      return <ChatMessage
        key={i}
        previousAuthor={previous.author}
        message={message}
        nextAuthor={next.author}/>
    })
  }

  useEffect(() => {
    const scrollBar = scrollBarRef.current
    if (scrollBar !== null) {
      const height = scrollBar.scrollHeight
      scrollBar.scrollTo({top: height})
    }
  }, [])

  return (
    <div
      ref={scrollBarRef}
      className="chat-messages scrollbar">
      {makeMessages(messages)}
    </div>
  )
}