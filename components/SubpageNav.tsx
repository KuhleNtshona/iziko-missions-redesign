'use client';

import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { label: 'Home', href: '../' },
  { label: 'About', href: '../about/' },
  { label: 'Our Work', href: '../#our-work' },
  { label: 'Magnify Church', href: '../#magnify-church' },
  { label: 'Meet the Team', href: '../team/' },
  { label: 'Get Involved', href: '../get-involved/' },
  { label: 'Contact', href: '../#contact' },
];

export default function SubpageNav() {
  const [open, setOpen] = useState(false);

  return <header className="about-nav">
    <a className="brand" href="../" aria-label="Iziko Missions home"><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span><span>IZIKO <b>MISSIONS</b></span></a>
    <a className="back-home" href="../"><ArrowLeft size={16}/> Back home</a>
    <a className="give-button" href="https://www.zeffy.com/en-US/donation-form/support-the-nogadas" target="_blank" rel="noopener noreferrer">Give</a>
    <button className="menu-button" type="button" aria-label="Toggle navigation menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map((link) => <a href={link.href} key={link.label} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="mobile-give" href="https://www.zeffy.com/en-US/donation-form/support-the-nogadas" target="_blank" rel="noopener noreferrer">Give</a></nav>}
  </header>;
}
