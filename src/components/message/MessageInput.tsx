import React, {createRef, FC} from 'react'
import {ReactComponent as PaperClip} from 'public/svgs/paperclip.svg'
import {ReactComponent as Command} from 'public/svgs/command.svg'
import {ReactComponent as Smile} from 'public/svgs/smile.svg'
import {ReactComponent as Microphone} from 'public/svgs/microphone.svg'
import {useForm} from "react-hook-form";
import {Content} from "models";

type Props = {
  onSubmitting: (data: FormData, content: Content[]) => void
}

type Form = {
  textContent: string
  files: FileList
}

export const MessageInput: FC<Props> = ({onSubmitting}: Props) => {
  const {register, handleSubmit} = useForm<Form>()
  const form = createRef<HTMLFormElement>()

  const onSubmit = (data: Form) => {
    const files = data.files
    const form = new FormData()
    const content: Content[] = []

    form.append('content[0].type', 'Text')
    form.append('content[0].value', data.textContent)
    content.push({type: 'Text', value: data.textContent, displayOrder: 1000})
    for (let i = 0; i < files.length; i++) {
      form.append(`content[${i+1}].type`, 'Image')
      form.append(`content[${i+1}].value`, files[i])
      // make input with auto load files
      content.push({type: 'Image', value: '', displayOrder: 10000})
    }

    onSubmitting(form, content)
  }

  return (
    <form
      className="message-form"
      onSubmit={handleSubmit(onSubmit)}
      ref={form}>
      <PaperClip/>
      <input
        type="file"
        hidden={true}
        {...register('files')}/>
      <input
        type="text"
        className="clear-input message-input"
        placeholder="Write a message..."
        {...register('textContent', {required: true, minLength: 1})}/>
      <Command/>
      <Smile/>
      <Microphone/>
    </form>
  )
}