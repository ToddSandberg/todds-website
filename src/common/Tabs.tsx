import { Tab } from "@headlessui/react";
import React from 'react'
import ProjectsMenu from "./ProjectsMenu";
import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";

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
  PROJECTS,
  CONTACT
}

function getTabIndex(selectedTab?: TabType) {
  switch(selectedTab) {
    case TabType.ABOUTME: return 1;
    case TabType.PROJECTS: return 2;
    case TabType.CONTACT: return 3;
    default: return 0;
  }
}

// Contact tab, removed for now while being worked on
// <Tab style={{backgroundColor}}><a style={linkStyle} href="/contact">Contact</a></Tab>

export default function Tabs({ backgroundColor, textColor, children, selectedTab, appBarClass, appContentClass, dropdownClass, fontClass }: Props) {
    const linkStyle = textColor ? {color: textColor, textDecoration: 'none'} : {textDecoration: 'none'}

    return <Tab.Group defaultIndex={getTabIndex(selectedTab)}>
        <Tab.List>
          <div className={appBarClass ? appBarClass : 'Appbar'} style={{ backgroundColor }}>
            <Tab style={{backgroundColor}}><a style={linkStyle} href="/">Home</a></Tab>
            <Tab style={{backgroundColor}}><a style={linkStyle} href="/aboutme">About Me</a></Tab>
            <Tab><ProjectsMenu color={textColor} backgroundColor={backgroundColor} dropdownClass={dropdownClass} fontClass={fontClass}/></Tab>
            
            <div style={{ float: 'right' }}>
              <LinkedInIcon/>
              <GithubIcon/>
            </div>
          </div>\
        </Tab.List>
        <Tab.Panels>
          <div className={appContentClass ? appContentClass : 'App-content'} style={{color: textColor}}>
            {children}
          </div>
        </Tab.Panels>
      </Tab.Group>;
}