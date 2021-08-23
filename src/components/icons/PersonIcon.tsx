import React, {FC} from 'react'

type Props = {

}

export const PersonIcon: FC<Props> = ({}: Props) => {
  return (
    <svg className="option-icon" aria-hidden="true" focusable="false" data-prefix="fas"
         data-icon="person-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="currentColor"
            d="M144 96c26.5 0 48-21.5 48-48S170.4 0 144 0 96 21.5 96 48s21.5 48 48 48zm357.5-29.4L433.8 42l5.5-15c3-8.3-1.3-17.5-9.6-20.5l-15-5.5c-8.3-3-17.5 1.3-20.5 9.6l-5.5 15L321.1 1c-8.3-3-17.5 1.3-20.5 9.6l-43.8 120.3c-3 8.3 1.3 17.5 9.6 20.5L334 176l-13 36-47.8-16-49.3-49.3c-12.1-12.1-28.1-18.8-45.2-18.8h-62.9c-24.4 0-46.3 13.6-57.2 35.4L3.4 273.7c-7.9 15.8-1.5 35 14.3 42.9 4.6 2.3 9.5 3.4 14.3 3.4 11.7 0 23-6.5 28.6-17.7L80 263.6v54.8L64.1 476.8c-1.7 17.6 11.1 33.3 28.6 35 1.1.1 2.2.2 3.2.2 16.2 0 30.1-12.3 31.8-28.8L140.9 352h15.3l35.8 71.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-56.5c0-9.9-2.3-19.8-6.7-28.6l-41.2-82.5v-91.2l20 20c7 7 15.6 12.3 25 15.5l46.1 15.4-11.2 30.8c-3 8.3 1.3 17.5 9.6 20.5l15 5.5c8.3 3 17.5-1.3 20.5-9.6l46.2-126.9 67.6 24.6c8.3 3 17.5-1.3 20.5-9.6L511 87.1c3.1-8.3-1.2-17.4-9.5-20.5z"
            className=""/>
    </svg>
  )
}