import { Tab } from "@headlessui/react";
import React from 'react'
import Home from "../home/Home";
import Appbar from "./Appbar";
import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";

type Props = {
  color?: string
}

export default function Tabs({color}: Props) {
    return <Tab.Group>
        <Tab.List>
          <div className="Appbar" style={{backgroundColor: color }}>
            <Tab style={{color: color}}>Home</Tab>
            <Tab style={{color: color}}>About Me</Tab>
            <Tab style={{color: color}}>Projects</Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Appbar/>
          <div className="App-content">
            <Tab.Panel><Home color={color}/></Tab.Panel>
            <Tab.Panel><AboutMe/></Tab.Panel>
            <Tab.Panel><Projects/></Tab.Panel>
          </div>
        </Tab.Panels>
      </Tab.Group>;
}