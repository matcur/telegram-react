import React from 'react'
import {LeftMenuUserInfo} from "./LeftMenuUserInfo";
import {Item, LeftMenuItem} from "./LeftMenuItem";
import {ReactComponent as PeopleIcon} from "public/svgs/people.svg";
import {ReactComponent as SpeakerIcon} from "public/svgs/speacker.svg";
import {ReactComponent as PhoneIcon} from "public/svgs/phone.svg";
import {ReactComponent as PersonIcon} from "public/svgs/person.svg";
import {ReactComponent as GearIcon} from "public/svgs/gear.svg";
import {ReactComponent as MoonIcon} from "public/svgs/moon.svg";

type Props = {

}

export const LeftMenu = (props: Props) => {
  const items: Item[] = [
    {name: 'New Group', icon: <PeopleIcon/>},
    {name: 'New Channel', icon: <SpeakerIcon/>},
    {name: 'Contacts', icon: <PersonIcon/>},
    {name: 'Calls', icon: <PhoneIcon/>},
    {name: 'Settings', icon: <GearIcon/>},
    {name: 'Night Mode', icon: <MoonIcon/>, additionalElement: <GearIcon/>},
  ]
  React.createElement('div')

  return (
    <div className="left-menu">
      <LeftMenuUserInfo/>
      <div className="left-menu-options">
        {items.map(i => <LeftMenuItem item={i}/>)}
      </div>
      <div className="left-menu-app-info">
        <strong>Telegram Desktop</strong>
        <div className="app-version">Version 2.9.2 x64 - About</div>
      </div>
    </div>
  )
}