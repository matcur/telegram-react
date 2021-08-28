import React, {FC, useEffect} from 'react'
import {BaseCodeVerification} from "pages/BaseCodeVerification";
import {useParams} from "react-router";
import {VerificationApi} from "api/VerificationApi";
import {useQueryParams} from "hooks/useQueryParams";
import {RegistrationApi} from "api/RegistrationApi";
import {useDispatch} from "react-redux";

type Props = {

}

export const NewUserCodeVerification: FC<Props> = ({}: Props) => {
  const query = useQueryParams()

  const number = query.get('number') ?? ''
  const title = <span>
    A code was sent <strong>via Phone</strong> to your other<br/>
    devices, if you have any connected.
  </span>

  useEffect(() => {
    async function load() {
      await (new RegistrationApi().register({number}))

      new VerificationApi().byPhone(number)
    }

    load()
  }, [])

  return (
    <BaseCodeVerification
      title={title}
      phoneNumber={number}/>
  )
}