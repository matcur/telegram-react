import React, {ReactElement, useContext} from 'react'
import {UpLayerContext} from "contexts/UpLayerContext";

type Props = {
  visible: boolean
  onClick: () => void
  leftElement: ReactElement
  centerElement?: ReactElement
}

export const UpLayer = ({leftElement, centerElement, onClick, visible}: Props) => {
  const context = useContext(UpLayerContext)

  return (
    <div
      className={'up-layer' + (visible? ' show-up-layer': '')}
      onClick={onClick}>
      <div
        className="left-element"
        onClick={e => e.stopPropagation()}>
        {leftElement}
      </div>
      <div
        className="center-element"
        onClick={e => e.stopPropagation()}>
        {centerElement}
      </div>
    </div>
  )
}