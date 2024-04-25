import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FourOhFour() {
    const navigate = useNavigate();

    return <div className="App">
        <header className="App-header" style={{height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{height: '100%', alignItems: 'center', justifyContent: 'center', display: 'inline'}}>
                <h1 style={{fontSize: '100px'}}>404</h1><br/>
                <p>You tried to access a page that doesnt exist {':('}</p><br/>
                <button style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', padding: '10px'}} onClick={() => navigate('/')}>Back to home</button>
            </div>
        </header>
    </div>;
}