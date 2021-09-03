import React, {FC, ReactElement} from 'react'

type Props = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  icon?: ReactElement
  className?: string
}

// Todo rename to search
export const ChatSearch: FC<Props> = ({icon = <div/>, className = '', onChange}: Props) => {
  return (
    <div className={`chats-search ${className}`}>
      {icon}
      <input
        type="text"
        className="clear-input chats-search-input"
        placeholder="Search"
        onInput={onChange}/>
    </div>
  )
}