import React, {FC} from 'react'

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const ChatSearch: FC<Props> = ({onChange}: Props) => {
  return (
    <div className="chats-search">
      <div className="burger index-burger">
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