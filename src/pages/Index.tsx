import React, {useState} from 'react'
import {UpLayer} from "components/UpLayer";
import {LeftMenu} from "components/menus/left-menu";
import {ChatsBlock} from "components/chat/ChatsBlock";
import {Chat} from "components/chat/Chat";
import {nullChat} from "nullables";
import {useRequireAuthentication} from "hooks/useRequireAuthentication";
import {UpLayerContext} from "contexts/UpLayerContext";
import { LeftMenuContext } from 'contexts/LeftMenuContext';

type Props = {

}

export const Index = (props: Props) => {
  const [selectedChat, setSelectedChat] = useState(nullChat)
  const [upLayerVisible, setUpLayerVisible] = useState(false)
  const [leftMenuVisible, setLeftMenuVisible] = useState(false)
  useRequireAuthentication('/registered-user-code-verification?number=89545672654')

  return (
    <UpLayerContext.Provider value={{setVisible: setUpLayerVisible}}>
      <LeftMenuContext.Provider value={{setVisible: setLeftMenuVisible}}>
        <div className="index">
          <UpLayer
            visible={upLayerVisible}
            leftElement={<LeftMenu visible={leftMenuVisible}/>}
            onClick={() => {
              setLeftMenuVisible(false)
              setUpLayerVisible(false)
            }}/>
          <ChatsBlock
            selectedChat={selectedChat}
            onChatSelected={setSelectedChat}/>
          {
            selectedChat === nullChat? <></>: <Chat chat={selectedChat}/>
          }
        </div>
      </LeftMenuContext.Provider>
    </UpLayerContext.Provider>
  )
}