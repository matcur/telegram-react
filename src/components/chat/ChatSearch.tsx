import React, {FC, useContext} from 'react'
import {UpLayerContext} from "contexts/UpLayerContext";
import {LeftMenuContext} from "contexts/LeftMenuContext";

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const ChatSearch: FC<Props> = ({onChange}: Props) => {
  const upLayerContext = useContext(UpLayerContext)
  const leftMenuContext = useContext(LeftMenuContext)

  const onBurgerClick = () => {
    upLayerContext.setVisible(true)
    leftMenuContext.setVisible(true)
  }

  return (
    <div className="chats-search">
      <div
        className="burger index-burger"
        onClick={onBurgerClick}>
        <div className="burger-line"/>
        <div className="burger-line"/>
        <div className="burger-line"/>
      </div>
      <input
        type="text"
        className="clear-input chats-search-input"
        placeholder="Search"
        onInput={onChange}/>
    </div>
  )
}