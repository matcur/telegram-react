import React, {FC} from 'react'

type Props = {

}

export const UpLayer: FC<Props> = ({children}) => {
  return (
    <div className="up-layer">
      {children}
    </div>
  )
}