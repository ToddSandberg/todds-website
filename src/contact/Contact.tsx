import React from 'react'
import Tabs, { TabType } from '../common/Tabs';
import Divider from '../common/Divider';
import './Contact.css';
import { ContactCreateForm } from '../ui-components';

export default function Contact() {

    return <div className="Contact">
        <Tabs
            selectedTab={TabType.CONTACT}
        >
            <h1>Contact</h1>
            <Divider/>
            <ContactCreateForm/>
        </Tabs>
    </div>;
}