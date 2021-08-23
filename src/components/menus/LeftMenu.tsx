import React from 'react'
import cat from "../../public/images/index/cat-3.jpg";

type Props = {

}

export const LeftMenu = (props: Props) => {
  return (
    <div className="left-menu">
      <div className="left-menu-user-info">
        <div className="df jcsb aic top-part">
          <img className="circle middle-avatar" src={cat} alt="image"/>
          <div className="circle saved-messages">
            <svg className="saved-messages-icon" aria-hidden="true" focusable="false" data-prefix="fas"
                 data-icon="angle-double-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path fill="currentColor"
                    d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
                    className=""/>
            </svg>
          </div>
        </div>
        <div className="df jcsb aic bottom-part">
          <div className="user-details">
            <div className="user-name">Resurect Resurectovic</div>
            <div className="phone-number">+7 944 123 22 22</div>
          </div>
        </div>
      </div>
      <div className="left-menu-options">
        <div className="left-menu-option">
          <svg className="option-icon" aria-hidden="true" focusable="false" data-prefix="far"
               data-icon="users-crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="currentColor"
                  d="M556 256h-24c-17.3 0-33.39 5.27-46.77 14.28 13.37 10.14 25.18 22.18 34.43 36.22 3.88-1.44 7.96-2.5 12.34-2.5h24c19.84 0 36 16.16 36 36 0 13.25 10.75 24 24 24s24-10.75 24-24c0-46.31-37.69-84-84-84zm-12-32c44.18 0 80-35.82 80-80s-35.82-80-80-80-80 35.82-80 80 35.82 80 80 80zm0-112c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.36-32 32-32zM154.77 270.28C141.39 261.27 125.3 256 108 256H84c-46.31 0-84 37.69-84 84 0 13.25 10.75 24 24 24s24-10.75 24-24c0-19.84 16.16-36 36-36h24c4.37 0 8.46 1.06 12.34 2.5 9.25-14.04 21.06-26.08 34.43-36.22zM96 224c44.18 0 80-35.82 80-80s-35.82-80-80-80-80 35.82-80 80 35.82 80 80 80zm0-112c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.36-32 32-32zm268.66 169.28c-14.16 4.3-29.1 6.72-44.66 6.72s-30.5-2.42-44.66-6.72c-47.08-14.3-100.29.84-127.77 41.66C135.21 341.3 128 363.41 128 387.2V432c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-44.8c0-23.79-7.21-45.9-19.57-64.25-27.48-40.82-80.69-55.97-127.77-41.67zM464 432H176v-44.8c0-36.44 29.16-66.2 65.38-67.18C266.88 330.63 293.32 336 320 336c26.67 0 53.11-5.37 78.62-15.98C434.84 321 464 350.76 464 387.2V432zM320 256c61.86 0 112-50.14 112-112V32l-56 28-56-28-56 28-56-28v112c0 61.86 50.14 112 112 112zm-64-128h128v16c0 35.29-28.71 64-64 64s-64-28.71-64-64v-16z"
                  className=""/>
          </svg>
          <div className="option-name">New Group</div>
        </div>
        <div className="left-menu-option">
          <svg className="option-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-up"
               role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor"
                  d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"
                  className=""/>
          </svg>
          <div className="option-name">New Channel</div>
        </div>
        <div className="left-menu-option">
          <svg className="option-icon" aria-hidden="true" focusable="false" data-prefix="fas"
               data-icon="person-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M144 96c26.5 0 48-21.5 48-48S170.4 0 144 0 96 21.5 96 48s21.5 48 48 48zm357.5-29.4L433.8 42l5.5-15c3-8.3-1.3-17.5-9.6-20.5l-15-5.5c-8.3-3-17.5 1.3-20.5 9.6l-5.5 15L321.1 1c-8.3-3-17.5 1.3-20.5 9.6l-43.8 120.3c-3 8.3 1.3 17.5 9.6 20.5L334 176l-13 36-47.8-16-49.3-49.3c-12.1-12.1-28.1-18.8-45.2-18.8h-62.9c-24.4 0-46.3 13.6-57.2 35.4L3.4 273.7c-7.9 15.8-1.5 35 14.3 42.9 4.6 2.3 9.5 3.4 14.3 3.4 11.7 0 23-6.5 28.6-17.7L80 263.6v54.8L64.1 476.8c-1.7 17.6 11.1 33.3 28.6 35 1.1.1 2.2.2 3.2.2 16.2 0 30.1-12.3 31.8-28.8L140.9 352h15.3l35.8 71.5V480c0 17.7 14.3 32 32 32s32-14.3 32-32v-56.5c0-9.9-2.3-19.8-6.7-28.6l-41.2-82.5v-91.2l20 20c7 7 15.6 12.3 25 15.5l46.1 15.4-11.2 30.8c-3 8.3 1.3 17.5 9.6 20.5l15 5.5c8.3 3 17.5-1.3 20.5-9.6l46.2-126.9 67.6 24.6c8.3 3 17.5-1.3 20.5-9.6L511 87.1c3.1-8.3-1.2-17.4-9.5-20.5z"
                  className=""/>
          </svg>
          <div className="option-name">Contacts</div>
        </div>
        <div className="left-menu-option">
          <svg className="option-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt"
               role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  className=""/>
          </svg>
          <div className="option-name">Calls</div>
        </div>
        <div className="left-menu-option">
          <svg className="option-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog"
               role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                  className=""/>
          </svg>
          <div className="option-name">Settings</div>
        </div>
        <div className="left-menu-option">
          <svg className="option-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon"
               role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
                  d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                  className=""/>
          </svg>
          <div className="option-name">Night Mode</div>
          <label className="toggler-container small-toggler">
            <input type="checkbox" className="toggler"/>
            <span className="checkmark"/>
          </label>
        </div>
      </div>
      <div className="left-menu-app-info">
        <strong>Telegram Desktop</strong>
        <div className="app-version">Version 2.9.2 x64 - About</div>
      </div>
    </div>
  )
}