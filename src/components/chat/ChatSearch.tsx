import React, {FC, useContext} from 'react'
import {UpLayerContext} from "contexts/UpLayerContext";
import {LeftMenuContext} from "contexts/LeftMenuContext";
import {Burger} from "components/icons/Burger";

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  className?: string
}

// Todo rename to search
export const ChatSearch: FC<Props> = ({className = '', onChange}: Props) => {
  const upLayerContext = useContext(UpLayerContext)
  const leftMenuContext = useContext(LeftMenuContext)

  const onBurgerClick = () => {
    upLayerContext.setVisible(true)
    leftMenuContext.setVisible(true)
  }

  return (
    <div className={`chats-search ${className}`}>
      <Burger onClick={onBurgerClick}/>
      <input
        type="text"
        className="clear-input chats-search-input"
        placeholder="Search"
        onInput={onChange}/>
    </div>
  )
}