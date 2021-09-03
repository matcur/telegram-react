import React, {FC, useEffect} from 'react'
import {Chat} from "models";
import {useAppDispatch, useAppSelector} from "app/hooks";
import { ChatItem } from './ChatItem';
import {addChatRange} from "app/slices/chatsSlice";

type Props = {
  selectedChat: Chat
  onChatSelected: (chat: Chat) => void
  chatsFiltration: (chat: Chat) => boolean
}

export const ChatList: FC<Props> = ({selectedChat, onChatSelected, chatsFiltration}: Props) => {
  // Todo move to chats block
  const chats = useAppSelector(state => state.authorization.currentUser.chats)
  const dispatch = useAppDispatch()

  const makeChat = (chat: Chat) => {
    return <ChatItem
      key={chat.id}
      chat={chat}
      className={chat === selectedChat? 'selected-chat': ''}
      onClick={onChatSelected}/>
  }

  useEffect(() => {
    dispatch(addChatRange([]))
  }, [])

  return (
    <div className="chats scrollbar">
      {chats.filter(chatsFiltration).map(chat => makeChat(chat))}
    </div>
  )
}