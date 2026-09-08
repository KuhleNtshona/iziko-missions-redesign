import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../app/page';
import AboutPage from '../app/about/page';
import TeamPage from '../app/team/page';
import GetInvolved from '../app/get-involved/page';
import '../app/globals.css';

const path = window.location.pathname.replace(/\/+$/, '');
const Page = path.endsWith('/about') ? AboutPage : path.endsWith('/team') ? TeamPage : path.endsWith('/get-involved') ? GetInvolved : Home;

createRoot(document.getElementById('root')!).render(<React.StrictMode><Page /></React.StrictMode>);
