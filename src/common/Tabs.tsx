import { Tab } from "@headlessui/react";
import React from 'react'
import Appbar from "./Appbar";
import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";

type Props = {
  backgroundColor?: string,
  textColor?: string
}

export default function Tabs({backgroundColor, textColor}: Props) {
    return <Tab.Group>
        <Tab.List>
          <div className="Appbar" style={{backgroundColor: backgroundColor }}>
            <Tab style={{color: textColor}}>About Me</Tab>
            <Tab style={{color: textColor}}>Projects</Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Appbar/>
          <div className="App-content">
            <Tab.Panel><AboutMe backgroundColor={backgroundColor}/></Tab.Panel>
            <Tab.Panel><Projects/></Tab.Panel>
          </div>
        </Tab.Panels>
      </Tab.Group>;
}