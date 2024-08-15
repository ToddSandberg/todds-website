import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Fragment } from 'react';

type Props = {
    backgroundColor?: string,
    color?: string,
    dropdownClass?: string,
    fontClass?: string
}

export default function ProjectsMenu({ backgroundColor, color, dropdownClass, fontClass }: Props) {
    const thisFontClass = fontClass ? fontClass : 'mainfont';

    return <Menu as="div" style={{ position: 'relative', display: 'inline', textAlign: 'left' }}>
        <MenuButton
            className={`astext ${thisFontClass}`}
            style={{color, fontSize: '1em', textAlign: 'center', width: 150}}
        >
            Projects
        </MenuButton>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <MenuItems
                style={{ backgroundColor, color, zIndex: 6, minWidth: 200 }}
                className={dropdownClass ? dropdownClass : 'Dropdown Dropdown-Common'}
            >
                <div className="DropdownItem">
                    <MenuItem>
                        {({ focus  }) => (
                            <a
                                style={{ position: 'relative', color: focus ? backgroundColor : color, backgroundColor: focus ? color : backgroundColor}}
                                href="/scryportal"
                            >
                            Scry Portal
                            </a>
                        )}
                    </MenuItem>
                </div>
                <div className="DropdownItem">
                    <MenuItem>
                        {({ focus  }) => (
                            <a
                                style={{ position: 'relative', color: focus ? backgroundColor : color, backgroundColor: focus ? color : backgroundColor}}
                                href="/weaponsmithSimulator"
                            >
                            Weaponsmith Simulator
                            </a>
                        )}
                    </MenuItem>
                </div>
                <div className="DropdownItem">
                    <MenuItem>
                        {({ focus  }) => (
                            <a
                                style={{ position: 'relative', color: focus ? backgroundColor : color, backgroundColor: focus ? color : backgroundColor}}
                                href="/dndai"
                            >
                            DND AI
                            </a>
                        )}
                    </MenuItem>
                </div>
            </MenuItems>
        </Transition>
    </Menu>;
}