import React from 'react'
import {LeftMenuUserInfo} from "./LeftMenuUserInfo";
import {Item, LeftMenuItem} from "./LeftMenuItem";
import {PeopleIcon} from "components/icons/PeopleIcon";
import {SpeakerIcon} from "components/icons/SpeakerIcon";
import {PhoneIcon} from "components/icons/PhoneIcon";
import {PersonIcon} from "components/icons/PersonIcon";
import {GearIcon} from "components/icons/GearIcon";
import {MoonIcon} from "components/icons/MoonIcon";

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