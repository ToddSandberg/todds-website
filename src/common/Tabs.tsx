import { Tab } from "@headlessui/react";
import React from 'react'
import Home from "../home/Home";
import Appbar from "./Appbar";

export default function Tabs() {
    return <Tab.Group>
        <Tab.List>
          <div className="Appbar">
            <Tab>Home</Tab>
            <Tab>About Me</Tab>
            <Tab>Personal Projects</Tab>
          </div>
        </Tab.List>
        <Tab.Panels>
          <Appbar/>
          <div className="App-content">
            <Tab.Panel><Home/></Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </div>
        </Tab.Panels>
      </Tab.Group>;
}