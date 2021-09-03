import React, {FC} from 'react'
import {Burger} from "components/icons/Burger";
import {useSetLeftMenuVisible} from "hooks/useSetLeftMenuVisible";

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  className?: string
}

// Todo rename to search
export const ChatSearch: FC<Props> = ({className = '', onChange}: Props) => {
  const setLeftMenuVisible = useSetLeftMenuVisible()

  const onBurgerClick = () => {
    setLeftMenuVisible(true)
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