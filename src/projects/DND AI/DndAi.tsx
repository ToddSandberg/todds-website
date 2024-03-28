import React from 'react'
import DndAiPic from './CurrentUI.png';
import TextToSpeechAudio from './tts.wav';
import Tabs, { TabType } from '../../common/Tabs';
import './DndAi.css';

export default function DndAi() {
    return <div className='DndAi'>
        <header className='DndAi-App-header'>
            <Tabs
                selectedTab={TabType.PROJECTS}
                appBarClass='DndAi-Appbar'
                appContentClass='DndAi-App-content'
                dropdownClass='DndAi-Dropdown'
                fontClass=" "
            >
                <h1>DND AI</h1>
                <div className='DndAi-Panel'>
                    <audio controls src={TextToSpeechAudio} autoPlay={false}>
                        Your browser does not support the audio element.
                    </audio>
                    <p>
                        Fun little application to have an AI be a DM for you and your friends. Create characters, send messages, then trigger your AI to respond.    
                    </p>
                    <p>
                        Uses react for the front end, express.js for the server, and web sockets to sync messages. Calls a customizable OpenAI endpoint.
                    </p>
                    <a href="https://github.com/ToddSandberg/DND-AI">Source Code and more info</a>
                </div>
                
                <img className={"Dnd-pic"} src={DndAiPic} alt="logo" />
            </Tabs>
        </header>
    </div>;
}