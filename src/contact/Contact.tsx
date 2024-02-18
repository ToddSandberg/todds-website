import React from 'react'
import Tabs, { TabType } from '../common/Tabs';
import Divider from '../common/Divider';
import './Contact.css';

export default function Contact() {

    return <div className="Contact">
        <Tabs
            selectedTab={TabType.CONTACT}
        >
            <h1>Contact</h1>
            <Divider/>
            <div>
                <p>Name</p>
                <input/>
                <p>Email</p>
                <input/>
                <p>Message</p>
                <textarea/><br/>
                <button>Send</button>
            </div>
        </Tabs>
    </div>;
}