import { ArrowRight } from 'lucide-react';
import SubpageNav from '@/components/SubpageNav';

export default function TeamPage(){return <main className="team-page">
  <SubpageNav/>
  <section className="team-hero"><p>Meet the team</p><h1>Local leaders.<br/><em>Gospel conviction.</em></h1><span>Serving pastors, churches, and children in South Africa’s townships and rural areas.</span></section>
  <section className="team-intro"><div className="about-label">The people behind the mission</div><blockquote>“How do we support pastors already on the front lines?”</blockquote><p>Iziko identifies and equips faithful local leaders so they can preach, raise disciples, and care for vulnerable children—without building long-term dependence on foreign support.</p></section>
  <section className="team-grid">
    <article><div className="team-portrait sive"><img src="../team-sive.jpg" alt="Portrait of Sive Nogada, Founder and President of Iziko Missions"/></div><div><small>Founder & President</small><h2>Sive Nogada</h2><p>Sive was born and raised in Khayelitsha, South Africa, where he came to know Christ as a teenager. His ministry journey spans pastoral leadership, theological training, community development, and nonprofit fundraising.</p><p>He is a graduate of the 6:4 Pastoral Internship at Doxa Church, holds a BSc in Business Administration and an MBA, and is preparing to return to Cape Town with his family to plant Magnify Church and lead Iziko Missions full-time.</p><a href="https://www.youtube.com/watch?v=A5KUkcj6_tE" target="_blank" rel="noopener noreferrer">Watch Sive’s story <ArrowRight/></a></div></article>
    <article><div className="team-portrait khuthala"><img src="../team-khuthala.jpg" alt="Portrait of Khuthala, Director of Ministry Operations at Iziko Missions"/></div><div><small>Director of Ministry Operations</small><h2>Khuthala</h2><p>Khuthala serves as Director of Ministry Operations, helping translate Iziko’s gospel convictions into thoughtful, sustainable ministry practice.</p><p>She supports the people, partnerships, and practical systems that enable local pastors and churches to serve their communities with clarity and care.</p><p>She also oversees Iziko’s child care and family-strengthening work, which seeks to serve vulnerable children and families.</p></div></article>
  </section>
  <section className="board-section">
    <div className="about-label">Our Board of Directors</div>
    <div className="board-heading"><h2>Stewarding the mission with<br/><em>wisdom and accountability.</em></h2><p>Our board brings trusted leadership and strategic guidance to the work of Iziko Missions.</p></div>
    <div className="board-grid">
      <article><span>01</span><small>Board Director</small><h3>Jarrett Facino</h3><p>Leads in providing financial oversight.</p></article>
      <article><span>02</span><small>Board Director</small><h3>Tyler Masters</h3><p>Leads in managing strategic international partnerships.</p></article>
    </div>
  </section>
  <section className="team-cta"><h2>Let’s advance the<br/><em>gospel together.</em></h2><a href="../get-involved/">Partner with Iziko <ArrowRight/></a></section>
  <footer className="about-footer"><span>© 2026 Iziko Missions</span><a href="mailto:info@izikomission.org">info@izikomission.org</a><span>Federal Tax ID: 39-3246865</span></footer>
</main>}
