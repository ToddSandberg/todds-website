import scryportal from './scryportal.png';
import Tabs, { TabType } from '../../common/Tabs';
import './ScryPortal.css';
import { isSmallDevice } from '../../common/CommonFunctions';

export default function ScryPortal() {
    return <div className='Scryportal'>
        <header className='Scryportal-App-header'>
            <Tabs
                selectedTab={TabType.PROJECTS}
                appBarClass='Scryportal-Appbar Appbar-Common'
                appContentClass='Scryportal-App-content'
                dropdownClass='Scryportal-Dropdown Dropdown-Common'
                fontClass=" "
            >
                <h1>ScryPortal</h1>
                <div className='Scryportal-Panel' style={{maxWidth: '90em'}}>
                    <img src={scryportal} className='Me-Photo' alt="logo" />
                    <p>
                        {'I\'ve'} always had a passion for optimizing productivity and removing the time it takes to plan various aspects of life.
                        This react application is intended to ease that burden by tracking your goals and automatically scheduling your day.
                    </p>
                    <a href="https://www.scryportal.com/">Sign up and use</a>
                    <iframe
                        width={isSmallDevice() ? '373' : '560'}
                        height={isSmallDevice() ? '210' : '315'}
                        src="https://www.youtube.com/embed/zSJ_MOVPbbk?si=J3ltIgyNzM7slEet"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
            </Tabs>
        </header>
    </div>;
}