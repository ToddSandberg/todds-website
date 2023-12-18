import { Tab } from "@headlessui/react";
import React from 'react'
import Appbar from "./Appbar";
import ProjectsMenu from "./ProjectsMenu";

type Props = {
  backgroundColor?: string,
  textColor?: string,
  children?: string | JSX.Element | JSX.Element[],
  selectedTab?: TabType,
  appBarClass?: string,
  appContentClass?: string,
  dropdownClass?: string,
  fontClass?: string
}

export enum TabType {
  HOME,
  ABOUTME,
  PROJECTS
}

function getTabIndex(selectedTab?: TabType) {
  switch(selectedTab) {
    case TabType.ABOUTME: return 1;
    case TabType.PROJECTS: return 2;
    default: return 0;
  }
}

export default function Tabs({ backgroundColor, textColor, children, selectedTab, appBarClass, appContentClass, dropdownClass, fontClass }: Props) {
    const linkStyle = textColor ? {color: textColor, textDecoration: 'none'} : {textDecoration: 'none'}

    return <Tab.Group defaultIndex={getTabIndex(selectedTab)}>
        <Tab.List>
          <div className={appBarClass ? appBarClass : 'Appbar'} style={{backgroundColor: backgroundColor }}>
            <Tab style={{backgroundColor}}><a style={linkStyle} href="/">Home</a></Tab>
            <Tab style={{backgroundColor}}><a style={linkStyle} href="/aboutme">About Me</a></Tab>
            <Tab><ProjectsMenu color={textColor} backgroundColor={backgroundColor} dropdownClass={dropdownClass} fontClass={fontClass}/></Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Appbar/>
          <div className={appContentClass ? appContentClass : 'App-content'} style={{color: textColor}}>
            {children}
          </div>
        </Tab.Panels>
      </Tab.Group>;
}