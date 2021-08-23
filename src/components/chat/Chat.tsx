import React, {FC, useEffect, useState} from 'react'
import {MessageInput} from "components/message/MessageInput";
import {ChatMessages} from "components/chat/ChatMessages";
import {useAppDispatch, useAppSelector} from "app/hooks";
import {Chat as ChatModel} from "models";
import {addMessages, chatMessages} from "app/slices/chatsSlice";
import {LoadingChat} from "./LoadingChat";
import {nullMessage} from "nullables";

type Props = {
  chat: ChatModel
}

export const Chat: FC<Props> = ({chat}: Props) => {
  const messages = useAppSelector(state => chatMessages(state, chat.id))
  const dispatch = useAppDispatch()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (messages.length !== 0) {
      setLoaded(true)
      return
    }

    async function load() {
      await setTimeout(() => {
        dispatch(addMessages({chat, messages: [nullMessage, nullMessage]}))
        setLoaded(true)
      }, 1000)
    }

    load()
    debugger
  }, [chat])

  return (
    <div className="chat">
      {
        loaded? (<>
          <ChatMessages messages={messages}/>
          <MessageInput/>
        </>)
        : <LoadingChat/>
      }
    </div>
  )
}