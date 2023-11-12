import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'

export default function ProjectsMenu() {
    return <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>Projects</Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Scry Portal
                        </a>
                        )}
                    </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Weaponsmith Simulator
                        </a>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Transition>
    </Menu>;
}