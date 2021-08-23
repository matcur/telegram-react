import React, {FC, FormEvent} from 'react'

type Props = {
  setSearchText: (text: string) => void
}

export const ChatSearch: FC<Props> = ({setSearchText}: Props) => {
  const onInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value)
  }

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
        onInput={onInput}/>
    </div>
  )
}