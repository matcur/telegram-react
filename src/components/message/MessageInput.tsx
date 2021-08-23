import React, {FC} from 'react'

type Props = {

}

export const MessageInput: FC<Props> = ({}: Props) => {
  return (
    <div className="message-form">
      <svg className="message-input-icon chat-icon-hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M17.1459084,11.1469857 C17.3408728,10.9514263 17.6574549,10.9509439 17.8530143,11.1459084 C18.0485737,11.3408728 18.0490561,11.6574549 17.8540916,11.8530143 L11.9096172,17.8156301 C10.3312795,19.3987845 7.7683837,19.4026893 6.1849596,17.8240826 C4.60179277,16.2409218 4.60179277,13.6807396 6.18134874,12.1011843 L12.4395893,5.8770467 C13.6049179,4.71807195 15.4883496,4.72064626 16.6505056,5.88280226 C17.8123042,7.04460086 17.8125519,8.92817214 16.651059,10.0902763 L10.2949559,16.4497244 C9.54331608,17.2017597 8.32434648,17.2020804 7.57226458,16.4503941 C6.81988433,15.6980139 6.81780588,14.4793123 7.56730486,13.7246829 L12.1291989,9.13156162 C12.3237939,8.93563459 12.6403745,8.93455475 12.8363015,9.12914974 C13.0322286,9.32374472 13.0333084,9.64032537 12.8387134,9.83625241 L8.27681941,14.4293736 C7.91557205,14.7930938 7.91657383,15.3804899 8.27901321,15.7429292 C8.64064021,16.1043661 9.22644486,16.104212 9.58766315,15.7428036 L15.9437662,9.38335557 C16.7149102,8.61180574 16.7147457,7.36125599 15.9433988,6.58990904 C15.1710124,5.81752267 13.9192554,5.81581175 13.1447605,6.58608381 L6.89434715,12.8024168 C5.69942385,13.9973221 5.69942385,15.9243393 6.88770251,17.1126181 C8.0832935,18.3045772 10.013025,18.3016371 11.2014339,17.1096014 L17.1459084,11.1469857 Z"/>
      </svg>
      <input type="text" className="clear-input message-input" placeholder="Write a message..."/>
      <svg className="message-input-icon chat-icon-hover"
           version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 612 612">
        <g>
          <g>
            <g>
              <path
                d="M331.685,425.378c-7.478,7.479-7.478,19.584,0,27.043c7.479,7.478,19.584,7.478,27.043,0l131.943-131.962     c3.979-3.979,5.681-9.276,5.412-14.479c0.269-5.221-1.434-10.499-5.412-14.477L358.728,159.56     c-7.459-7.478-19.584-7.478-27.043,0c-7.478,7.478-7.478,19.584,0,27.042l100.272,100.272H19.125C8.568,286.875,0,295.443,0,306     c0,10.557,8.568,19.125,19.125,19.125h412.832L331.685,425.378z M535.5,38.25H153c-42.247,0-76.5,34.253-76.5,76.5v76.5h38.25     v-76.5c0-21.114,17.117-38.25,38.25-38.25h382.5c21.133,0,38.25,17.136,38.25,38.25v382.5c0,21.114-17.117,38.25-38.25,38.25H153     c-21.133,0-38.25-17.117-38.25-38.25v-76.5H76.5v76.5c0,42.247,34.253,76.5,76.5,76.5h382.5c42.247,0,76.5-34.253,76.5-76.5     v-382.5C612,72.503,577.747,38.25,535.5,38.25z"/>
            </g>
          </g>
        </g>
      </svg>
      <svg className="message-input-icon chat-icon-hover"
           version="1.1" id="Capa_1" x="0px" y="0px"
           viewBox="0 0 333.842 333.842">
        <g>
          <path
            d="M166.911,0.006C74.879,0.006,0,74.885,0,166.924s74.873,166.911,166.911,166.911c92.045,0,166.931-74.873,166.931-166.911   S258.956,0.006,166.911,0.006z M166.911,320.975c-84.95,0-154.058-69.114-154.058-154.058c0-84.95,69.108-154.064,154.058-154.064   c84.956,0,154.077,69.108,154.077,154.064C320.982,251.868,251.868,320.975,166.911,320.975z M276.09,183.904   c-10.585,51.717-56.64,89.262-109.513,89.262c-52.025,0-96.75-35.296-108.761-85.856c-1.234-5.174,1.967-10.367,7.147-11.6   c5.199-1.279,10.379,1.973,11.607,7.14c9.949,41.826,46.961,71.036,90.008,71.036c43.754,0,81.865-31.054,90.625-73.844   c1.073-5.225,6.189-8.573,11.382-7.519C273.796,173.589,277.157,178.685,276.09,183.904z M186.378,116.621   c0-10.662,8.638-19.293,19.293-19.293s19.293,8.631,19.293,19.293c0,10.649-8.638,19.293-19.293,19.293   S186.378,127.271,186.378,116.621z M106.043,116.621c0-10.662,8.638-19.293,19.293-19.293s19.293,8.631,19.293,19.293   c0,10.649-8.638,19.293-19.293,19.293S106.043,127.271,106.043,116.621z"/>
        </g>
      </svg>
      <svg className="message-input-icon chat-icon-hover"
           version="1.1" viewBox="0 0 350 350">
        <g id="icon"
           transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)">
          <path
            d="M 45 70.968 c -16.013 0 -29.042 -13.028 -29.042 -29.042 c 0 -1.712 1.388 -3.099 3.099 -3.099 c 1.712 0 3.099 1.388 3.099 3.099 C 22.157 54.522 32.404 64.77 45 64.77 c 12.595 0 22.843 -10.248 22.843 -22.843 c 0 -1.712 1.387 -3.099 3.099 -3.099 s 3.099 1.388 3.099 3.099 C 74.042 57.94 61.013 70.968 45 70.968 z"
            transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
          <path
            d="M 45 60.738 L 45 60.738 c -10.285 0 -18.7 -8.415 -18.7 -18.7 V 18.7 C 26.3 8.415 34.715 0 45 0 h 0 c 10.285 0 18.7 8.415 18.7 18.7 v 23.337 C 63.7 52.322 55.285 60.738 45 60.738 z"
            transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
          <path
            d="M 45 89.213 c -1.712 0 -3.099 -1.387 -3.099 -3.099 V 68.655 c 0 -1.712 1.388 -3.099 3.099 -3.099 c 1.712 0 3.099 1.387 3.099 3.099 v 17.459 C 48.099 87.826 46.712 89.213 45 89.213 z"
            transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
          <path
            d="M 55.451 90 H 34.549 c -1.712 0 -3.099 -1.387 -3.099 -3.099 s 1.388 -3.099 3.099 -3.099 h 20.901 c 1.712 0 3.099 1.387 3.099 3.099 S 57.163 90 55.451 90 z"
            transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/>
        </g>
      </svg>
    </div>
  )
}