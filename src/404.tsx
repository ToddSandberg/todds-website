import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

export default function FourOhFour() {
    const navigate = useNavigate();

    // you don't need to explicitly set error to `unknown`
    const error = useRouteError();
    let errorStatus = 'Error';
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
        errorMessage = error.statusText;
        errorStatus = `${error.status}`;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        console.error(error);
        errorMessage = 'Unknown error';
    }

    return <div className="App">
        <header className="App-header" style={{height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <div style={{height: '100%', alignItems: 'center', justifyContent: 'center', display: 'inline'}}>
                <h1 style={{fontSize: '100px', color: 'white'}}>{errorStatus}</h1><br/>
                <p style={{color: 'white'}}>{errorMessage}</p><br/>
                <button
                    style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', padding: '10px'}}
                    onClick={() => navigate('/')}
                >
                    Back to home
                </button>
            </div>
        </header>
    </div>;
}