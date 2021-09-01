import React, {useState} from 'react'
import {UpLayer} from "components/UpLayer";
import {LeftMenu} from "components/menus/left-menu";
import {ChatsBlock} from "components/chat/ChatsBlock";
import {Chat} from "components/chat/Chat";
import {nullChat} from "nullables";
import {useRequireAuthentication} from "hooks/useRequireAuthentication";

type Props = {

}

export const Index = (props: Props) => {
  const [selectedChat, setSelectedChat] = useState(nullChat)
  useRequireAuthentication('/start')

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