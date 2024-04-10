import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'

type Props = {
    backgroundColor?: string,
    color?: string,
    dropdownClass?: string,
    fontClass?: string
}

export default function ProjectsMenu({ backgroundColor, color, dropdownClass, fontClass }: Props) {
    const thisFontClass = fontClass ? fontClass : "mainfont";

    return <Menu as="div" style={{ position: "relative", display: "inline-block", textAlign: "left" }}>
        <Menu.Button
            className={`astext ${thisFontClass}`}
            style={{color, fontSize: "1em", textAlign: 'center', width: 150}}
        >
            Projects
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items
                style={{ backgroundColor, color, zIndex: 6 }}
                className={dropdownClass ? dropdownClass : "Dropdown Dropdown-Common"}
            >
                <div className="DropdownItem">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            style={{ position: 'relative', color: active ? backgroundColor : color, backgroundColor: active ? color : backgroundColor}}
                            href="/scryportal"
                        >
                            Scry Portal
                        </a>
                        )}
                    </Menu.Item>
                </div>
                <div className="DropdownItem">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            style={{ position: 'relative', color: active ? backgroundColor : color, backgroundColor: active ? color : backgroundColor}}
                            href="/weaponsmithSimulator"
                        >
                            Weaponsmith Simulator
                        </a>
                        )}
                    </Menu.Item>
                </div>
                <div className="DropdownItem">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            style={{ position: 'relative', color: active ? backgroundColor : color, backgroundColor: active ? color : backgroundColor}}
                            href="/dndai"
                        >
                            DND AI
                        </a>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>;
}