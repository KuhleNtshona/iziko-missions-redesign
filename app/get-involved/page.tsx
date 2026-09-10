import { ArrowRight, HandHeart, HeartHandshake, Mountain, Users } from 'lucide-react';
import SubpageNav from '@/components/SubpageNav';

const ways = [
  { icon: HeartHandshake, title: 'Pray', text: 'Pray for pastors already on the front lines, for healthy churches, and for children to know lasting hope in Christ.' },
  { icon: HandHeart, title: 'Give', text: 'Help place faithful pastors in communities and strengthen churches that disciple people and care for children.' },
  { icon: Mountain, title: 'Go', text: 'Join a purposeful short-term visit that supports locally led ministry in South Africa.' },
  { icon: Users, title: 'Serve', text: 'Use your skills to strengthen leaders, ministry operations, and practical care.' },
];

export default function GetInvolved() {
  return <main className="involved-page">
    <SubpageNav/>
    <section className="involved-hero"><p>Pray · Give · Go · Serve</p><h1>Stand with churches<br/><em>on the front lines.</em></h1><span>Join us in serving churches in South Africa’s townships and rural areas.</span></section>
    <section className="problem-statement"><div className="about-label">Why partnership matters</div><h2>Churches are everywhere, yet many are unequipped to disciple. Pastors are burned out and under-resourced.</h2><p>Iziko helps healthy churches disciple people, strengthen families, bridge race and class, raise leaders, and care for vulnerable children.</p></section>
    <section className="involved-ways">{ways.map(({icon:Icon,title,text},i)=><article key={title}><span>0{i+1}</span><Icon/><h2>{title}</h2><p>{text}</p>{title==='Give'?<a href="https://www.zeffy.com/en-US/donation-form/support-the-nogadas" target="_blank" rel="noopener noreferrer">Give securely <ArrowRight/></a>:<a href="mailto:info@izikomission.org">Contact us <ArrowRight/></a>}</article>)}</section>
    <section className="checks"><div><small>Give by mail</small><h2>Iziko Missions South Africa</h2><address>539 W. Commerce St. #5455<br/>Dallas, TX 75208</address></div><p><b>Make checks payable to Iziko Missions South Africa.</b><br/>Questions? Email <a href="mailto:info@izikomission.org">info@izikomission.org</a>.</p></section>
    <footer className="about-footer"><span>© 2026 Iziko Missions</span><span>Iziko Missions South Africa is a registered 501(c)(3) nonprofit organization. Federal Tax ID: 39-3246865.</span></footer>
  </main>;
}
