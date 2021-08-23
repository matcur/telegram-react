import React, {FC, useState} from 'react'
import {ChatSearch} from "./ChatSearch";
import {ChatList} from "./ChatList";
import {Chat} from "../../models";

type Props = {
  onChatSelected: (chat: Chat) => void
  selectedChat: Chat
}

export const ChatsBlock: FC<Props> = ({onChatSelected, selectedChat}: Props) => {
  const [searchText, setSearchText] = useState('')
  const chatsFiltration = (chat: Chat) => {
    return searchText === '' || chat.name.includes(searchText)
  }

  return (
    <div className="chats-block">
      <ChatSearch
        setSearchText={setSearchText}/>
      <ChatList
        chatsFiltration={chatsFiltration}
        selectedChat={selectedChat}
        onChatSelected={onChatSelected}/>
    </div>
  )
}