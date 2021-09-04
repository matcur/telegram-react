import React, {FC, useEffect} from 'react'
import {useParams} from "react-router";
import {BaseCodeVerification} from "pages/BaseCodeVerification";
import {VerificationApi} from "api/VerificationApi";
import {useQueryParams} from "hooks/useQueryParams";

type Props = {

}

export const RegisteredUserCodeVerification: FC<Props> = ({}: Props) => {
  const query = useQueryParams()

  const number = query.get('number') ?? ''
  const userId = query.get('userId') ?? ''
  const title = <span>
    A code was sent <strong>via Telegram</strong> to your other<br/>
    devices, if you have any connected.
  </span>

  useEffect(() => {
    new VerificationApi().fromTelegram({number})
  }, [])

  return (
    <BaseCodeVerification
      title={title}
      phoneNumber={number}
      userId={parseInt(userId)}/>
  )
}