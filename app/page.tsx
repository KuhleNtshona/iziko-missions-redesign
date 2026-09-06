'use client';

import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Church, HandHeart, HeartHandshake, Mail, Menu, Mountain, Play, Quote, Users, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

const nav = ['Home', 'About', 'Our Work', 'Magnify Church', 'Stories', 'Get Involved', 'Contact'];
const pillars = [
  { icon: Church, number: '01', title: 'Church Planting', text: 'Healthy, gospel-centered churches rooted in local communities.' },
  { icon: BookOpen, number: '02', title: 'Leader Development', text: 'Equipping faithful leaders to shepherd and multiply.' },
  { icon: HandHeart, number: '03', title: 'Vulnerable Children', text: 'Practical care that restores dignity, hope, and belonging.' },
  { icon: Users, number: '04', title: 'Local Ownership', text: 'Ministry led by local people, sustained through true partnership.' },
];
const work = [
  { number: '01', title: 'Church Planting', label: 'Gospel communities', text: 'We help establish healthy, multiplying churches shaped by Scripture and deeply rooted in their neighbourhoods.', className: 'work-planting', image: './work-church-planting.png', alt: 'A local church community gathering around Scripture' },
  { number: '02', title: 'Leadership Development', label: 'Equipping leaders', text: 'We invest in pastors and emerging leaders through theological training, mentorship, and hands-on ministry formation.', className: 'work-leaders', image: './work-leadership.png', alt: 'Emerging church leaders learning together around a table' },
  { number: '03', title: 'Supporting Vulnerable Children', label: 'Compassion in action', text: 'Alongside local churches, we provide practical support and lasting relationships for children and families in need.', className: 'work-children', image: './work-children.png', alt: 'Children taking part in a creative learning activity with a community volunteer' },
];
const ways = [
  { icon: HeartHandshake, number: '01', title: 'Pray', text: 'Stand with our churches, leaders, and communities in faithful prayer.' },
  { icon: HandHeart, number: '02', title: 'Give', text: 'Fuel sustainable, locally led ministry through generous partnership.' },
  { icon: Mountain, number: '03', title: 'Go', text: 'Come alongside the work through a purposeful short-term visit.' },
  { icon: Users, number: '04', title: 'Serve', text: 'Use your skills and experience to strengthen the mission.' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubscribed(true); };

  return (
    <main>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="Iziko Missions home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>IZIKO <b>MISSIONS</b></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}</nav>
        <a className="give-button" href="#give">Give <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        {open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map((item) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>)}<a className="mobile-give" href="#give">Give</a></nav>}
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" /><div className="hero-wash" aria-hidden="true" /><div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content"><p className="eyebrow"><span /> Cape Town · South Africa</p><h1>Christ proclaimed.<br />Leaders equipped.<br /><em>Churches planted.</em></h1><p className="hero-copy">We equip local leaders, plant gospel-centered churches, and serve vulnerable communities across Southern Africa.</p><div className="hero-actions"><a className="button button-primary" href="#about">Our mission <ArrowDown size={17} /></a><a className="button button-ghost" href="#get-involved">Partner with us <ArrowUpRight size={17} /></a></div></div>
        <div className="hero-side-note" aria-hidden="true">Serving the local church · Since 2019</div><div className="scroll-cue"><span>Explore</span><i /></div>
      </section>

      <section className="intro section-light" id="about">
        <div className="section-index reveal">01 — Our mission</div>
        <div className="intro-grid reveal"><p className="kicker">The gospel moves<br />through people.</p><div><h2>Strengthening the local church from the <em>inside out.</em></h2><p className="body-large">Iziko means “hearth” in isiXhosa—a gathering place of warmth, story, and belonging. We partner with local leaders so communities can flourish around the hope of Jesus.</p><a className="text-link" href="#our-work">Discover our approach <ArrowRight size={17} /></a></div></div>
        <div className="pillars-grid">{pillars.map(({ icon: Icon, ...pillar }) => <article className="pillar reveal" key={pillar.number}><div className="pillar-top"><Icon size={25} strokeWidth={1.4} /><span>{pillar.number}</span></div><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div>
      </section>

      <section className="work-section" id="our-work">
        <div className="section-heading reveal"><div><div className="section-index inverted">02 — Our work</div><h2>One mission.<br /><em>Three expressions.</em></h2></div><p>We focus our energy where the gospel and practical compassion meet—forming leaders, gathering churches, and caring for those most vulnerable.</p></div>
        <div className="work-grid">{work.map((item) => <article className={`work-card ${item.className} reveal`} key={item.number}><div className="work-art"><img src={item.image} alt={item.alt} loading="lazy" /></div><div className="work-card-content"><div className="work-meta"><span>{item.number}</span><small>{item.label}</small></div><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Learn more about ${item.title}`}><ArrowUpRight /></a></div></article>)}</div>
      </section>

      <section className="magnify" id="magnify-church">
        <div className="magnify-visual reveal"><img src="./magnify-easter-2027.png" alt="A South African congregation worshipping together at Magnify Church" loading="lazy" /><div className="magnify-rings" aria-hidden="true"><i /><i /><i /></div><div className="magnify-logo-live"><span className="magnify-ember" aria-hidden="true" /><img className="magnify-official-logo" src="./magnify-church-logo.jpg" alt="Magnify Church" loading="lazy" /></div><div className="launch-chip"><small>Public launch</small><b>Easter 2027</b></div></div>
        <div className="magnify-copy reveal"><div className="section-index">03 — Featured church plant</div><p className="eyebrow-dark">Cape Town, South Africa</p><h2>Meet<br /><em>Magnify Church.</em></h2><p className="body-large">A new gospel-centered church being planted in Cape Town to magnify Jesus, make disciples, and multiply faithful communities.</p><div className="magnify-stats"><div><b>Jesus</b><span>Magnified</span></div><div><b>Disciples</b><span>Made</span></div><div><b>Churches</b><span>Multiplied</span></div></div><a className="button button-dark" href="#contact">Explore Magnify <ArrowUpRight size={17} /></a></div>
      </section>

      <section className="impact" id="stories">
        <div className="impact-glow" aria-hidden="true" /><div className="section-index inverted reveal">04 — Stories of impact</div><div className="quote-wrap reveal"><Quote size={36} strokeWidth={1} /><blockquote>“The goal is not simply to start programmes. It is to see local churches become places of <em>hope, truth, and lasting change.</em>”</blockquote><div className="quote-by"><span className="avatar">SN</span><p><b>Sive Nogada</b><small>Founder · Iziko Missions</small></p><button aria-label="Play Sive's story"><Play size={15} fill="currentColor" /> Watch the story</button></div></div>
        <div className="impact-stats reveal"><div><strong>Local</strong><span>leadership at the center</span></div><div><strong>Whole</strong><span>church formation</span></div><div><strong>Lasting</strong><span>community partnership</span></div></div>
      </section>

      <section className="involve section-light" id="get-involved">
        <div className="involve-heading reveal"><div className="section-index">05 — Get involved</div><h2>There is a place<br /><em>for you in this story.</em></h2><p>Mission is never a solo endeavour. Join a growing community committed to the local church in Southern Africa.</p></div>
        <div className="ways-grid">{ways.map(({ icon: Icon, ...way }) => <a className="way-card reveal" id={way.title === 'Give' ? 'give' : undefined} href={way.title === 'Give' ? 'https://www.zeffy.com/' : '#contact'} key={way.title}><span>{way.number}</span><Icon size={28} strokeWidth={1.35} /><div><h3>{way.title}</h3><p>{way.text}</p></div><ArrowUpRight className="way-arrow" /></a>)}</div>
      </section>

      <section className="newsletter" id="contact">
        <div className="newsletter-copy reveal"><p className="eyebrow"><span /> Stay connected</p><h2>Stories from<br /><em>the field.</em></h2><p>Receive thoughtful updates, prayer needs, and stories of what God is doing through local churches.</p></div>
        <form className="newsletter-form reveal" onSubmit={submitNewsletter}>{subscribed ? <div className="success-message"><Mail /><div><b>You’re on the list.</b><span>Thank you for staying connected.</span></div></div> : <><label htmlFor="email">Email address</label><div><input id="email" name="email" type="email" placeholder="you@example.com" required /><button type="submit" aria-label="Subscribe"><ArrowRight /></button></div><small>Occasional updates. No noise. Unsubscribe anytime.</small></>}</form>
      </section>

      <footer><div className="footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>IZIKO <b>MISSIONS</b></span></a><p>Christ proclaimed. Leaders equipped. Churches planted.</p><a href="mailto:info@izikomissions.org">info@izikomissions.org</a></div><div className="footer-bottom"><span>© 2026 Iziko Missions</span><span>Cape Town · South Africa</span><div><a href="#about">About</a><a href="#give">Give</a><a href="#contact">Contact</a></div></div></footer>
    </main>
  );
}
