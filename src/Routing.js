import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FourOhFour from './404';
import App from './App';
import ScryPortal from './projects/ScryPortal';
import Weaponsmith from './projects/Weaponsmith';
import Blog from './blog/Blog';
import AboutMe from './aboutme/AboutMe';

export default function Routing() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <FourOhFour />
        },
        {
            path: '/aboutme',
            element: <AboutMe />,
            errorElement: <FourOhFour />
        },
        {
            path: '/scryportal',
            element: <ScryPortal />,
            errorElement: <FourOhFour />
        },
        {
            path: '/weaponsmithSimulator',
            element: <Weaponsmith />,
            errorElement: <FourOhFour />
        },
        {
            path: '/blog',
            element: <Blog />,
            errorElement: <FourOhFour />
        },
        {
            path: '/404',
            element: <FourOhFour />
        }
    ]);

    return <RouterProvider router={router} />;
}