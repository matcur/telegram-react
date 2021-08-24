import React, {FC} from 'react'
import {ReactComponent as PaperClip} from 'public/svgs/paperclip.svg'
import {ReactComponent as Command} from 'public/svgs/command.svg'
import {ReactComponent as Smile} from 'public/svgs/smile.svg'
import {ReactComponent as Microphone} from 'public/svgs/microphone.svg'

type Props = {

}

export const MessageInput: FC<Props> = ({}: Props) => {
  return (
    <div className="message-form">
      <PaperClip/>
      <input type="text" className="clear-input message-input" placeholder="Write a message..."/>
      <Command/>
      <Smile/>
      <Microphone/>
    </div>
  )
}