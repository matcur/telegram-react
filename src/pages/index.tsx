import React, {useState} from 'react'
import {UpLayer} from "../components/UpLayer";
import {LeftMenu} from "../components/menus/LeftMenu";
import {ChatsBlock} from "../components/chat/ChatsBlock";
import {Chat} from "../components/chat/Chat";
import {nullChat} from "../nullables";

type Props = {

}

export const Index = (props: Props) => {
  const [selectedChat, setSelectedChat] = useState(nullChat)

  return (
    <div className="index">
      <UpLayer>
        <LeftMenu/>
      </UpLayer>
      <ChatsBlock
        selectedChat={selectedChat}
        onChatSelected={setSelectedChat}/>
      {
        selectedChat === nullChat? <></>: <Chat chat={selectedChat}/>
      }
    </div>
  )
}