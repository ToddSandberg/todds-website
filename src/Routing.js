import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FourOhFour from './404';
import App from './App';
import ScryPortal from './projects/ScryPortal/ScryPortal';
import Weaponsmith from './projects/Weaponsmith/Weaponsmith';
import Blog from './blog/Blog';
import AboutMe from './aboutme/AboutMe';
import Contact from './contact/Contact';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import Raytracer from './raytracer/Raytracer';
import DndAi from './projects/DND AI/DndAi';

Amplify.configure(config);

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
            path: '/dndai',
            element: <DndAi />,
            errorElement: <FourOhFour />
        },
        {
            path: '/contact',
            element: <Contact />,
            errorElement: <FourOhFour />
        },
        {
            path: '/blog',
            element: <Blog />,
            errorElement: <FourOhFour />
        },
        {
            path: '/raytracer',
            element: <Raytracer />,
            errorElement: <FourOhFour />
        },
        {
            path: '/404',
            element: <FourOhFour />
        }
    ]);

    return <RouterProvider router={router} />;
}