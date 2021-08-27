import React, {FC, useEffect, useState} from 'react'
import {MessageInput} from "components/message/MessageInput";
import {ChatMessages} from "components/chat/ChatMessages";
import {useAppDispatch, useAppSelector} from "app/hooks";
import {Chat as ChatModel, Content} from "models";
import {addMessage, addMessages, chatMessages} from "app/slices/chatsSlice";
import {LoadingChat} from "./LoadingChat";
import {nullMessage} from "nullables";
import {ChatHeader} from "components/chat/ChatHeader";
import {ChatApi} from "api/ChatApi";

type Props = {
  chat: ChatModel
}

export const Chat: FC<Props> = ({chat}: Props) => {
  const messages = useAppSelector(state => chatMessages(state, chat.id))
  const currentUser = useAppSelector(state => state.authorization.currentUser)
  const dispatch = useAppDispatch()
  const [loaded, setLoaded] = useState(false)

  const submitMessage = (data: FormData) => {
    (new ChatApi(chat.id)).addMessage(data)
  }
  const addMessageToStore = (content: Content[]) => {
    dispatch(addMessage({chat, message: {content, author: currentUser, chatId: chat.id}}))
  }
  const onSubmit = (data: FormData, content: Content[]) => {
    addMessageToStore(content)
    submitMessage(data)
  }

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
  }, [chat])

  return (
    <div className="chat">
      <ChatHeader chat={chat}/>
      {
        loaded? (<>
          <ChatMessages messages={messages}/>
          <MessageInput onSubmitting={onSubmit}/>
        </>)
        : <LoadingChat/>
      }
    </div>
  )
}