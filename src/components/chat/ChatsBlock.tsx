import React, {FC, useState} from 'react'
import {ChatSearch} from "./ChatSearch";
import {ChatList} from "./ChatList";
import {Chat} from "models";
import {useFormInput} from "hooks/useFormInput";

type Props = {
  onChatSelected: (chat: Chat) => void
  selectedChat: Chat
}

export const ChatsBlock: FC<Props> = ({onChatSelected, selectedChat}: Props) => {
  const search = useFormInput('')
  const filtration = (chat: Chat) => {
    const value = search.value;

    return value === '' || chat.name.includes(value)
  }

  return (
    <div className="chats-block">
      <ChatSearch
        onChange={search.onChange}/>
      <ChatList
        chatsFiltration={filtration}
        selectedChat={selectedChat}
        onChatSelected={onChatSelected}/>
    </div>
  )
}