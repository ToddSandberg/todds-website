import { Tab } from "@headlessui/react";
import React from 'react'
import Appbar from "./Appbar";
import ProjectsMenu from "./ProjectsMenu";

type Props = {
  backgroundColor?: string,
  textColor?: string,
  children?: string | JSX.Element | JSX.Element[]
}

export default function Tabs({ backgroundColor, textColor, children }: Props) {
    return <Tab.Group>
        <Tab.List>
          <div className="Appbar" style={{backgroundColor: backgroundColor }}>
            <Tab style={{backgroundColor}}><a style={{color: textColor, textDecoration: 'none'}} href="/">About Me</a></Tab>
            <ProjectsMenu color={textColor} backgroundColor={backgroundColor}/>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Appbar/>
          <div className="App-content">
            {children}
          </div>
        </Tab.Panels>
      </Tab.Group>;
}