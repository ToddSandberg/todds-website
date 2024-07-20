import Divider from '../../common/Divider';
import Tabs, { TabType } from '../../common/Tabs';
import './Weaponsmith.css';

export default function Weaponsmith() {
    return <div className="App">
        <header className="Weaponsmith">
            <Tabs
                selectedTab={TabType.PROJECTS}
                appBarClass='Weaponsmith-Appbar Appbar-Common'
                appContentClass='Weaponsmith-App-content'
                dropdownClass='Weaponsmith-Dropdown Dropdown-Common'
                fontClass='bitfont'
            >
                <div className='Weaponsmith-Panel'>
                    <h3>Weaponsmith Simulator</h3>
                    <p>Weaponsmith simulator is a game revolving around playing as a blacksmith who crafts weapons for mighty heroes.
                        Originally created for the GMTK 2023 game jam.
                    </p>
                </div>
                <div className='Weaponsmith-Panel'>
                    <a href='https://toadtoadtoad.itch.io/weaponsmith-simulator'>Play now on itch.io</a>
                </div>
                <Divider/>
            </Tabs>
        </header>
    </div>;
}