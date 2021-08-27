import React, {FC, useEffect} from 'react'
import {useParams} from "react-router";
import {BaseCodeVerification} from "pages/BaseCodeVerification";
import {VerificationApi} from "api/VerificationApi";

type Props = {

}

export const RegisteredUserCodeVerification: FC<Props> = ({}: Props) => {
  const {number} = useParams<{number: string}>()
  const title = <span>
    A code was sent <strong>via Telegram</strong> to your other<br/>
    devices, if you have any connected.
  </span>

  useEffect(() => {
    new VerificationApi().fromTelegram({number, ownerId: 12})
  })

  return (
    <BaseCodeVerification
      title={title}
      number={number}/>
  )
}