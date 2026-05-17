import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Camera, Mic, Zap, Scissors, MapPin, Clock, Star, ArrowRight, Play, Crown } from "lucide-react";
import "./styles.css";

const Spray = ({ className = "" }) => <div className={`spray ${className}`} />;
const Scratch = ({ className = "" }) => <div className={`scratch ${className}`} />;

const Button = ({ children, variant = "lime" }) => (
  <a href="mailto:bookings@fitzroviapost.com?subject=TAPE//CAMDEN Booking Enquiry" className={`btn ${variant === "pink" ? "btnPink" : "btnLime"}`}>
    {children}<ArrowRight size={20} />
  </a>
);

const SectionLabel = ({ children }) => <div className="sectionLabel">{children}</div>;

const Card = ({ icon: Icon, title, copy }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="card">
    <div className="cardGlow" /><Icon className="cardIcon" size={34} />
    <h3>{title}</h3><p>{copy}</p>
  </motion.div>
);

function TapeCamdenSite() {
  const galleryItems = ["Self tape clips", "Actor close-ups", "Studio setup", "Behind the scenes", "Lighting tests", "Export station", "Camden energy", "Final takes"];
  const steps = [
    ["01", "Book your hour", "DM or email with your audition deadline and preferred time."],
    ["02", "Arrive in Camden", "Step into a professional self tape setup with the same hospitality standards as Fitzrovia."],
    ["03", "Record clean takes", "Pro camera, lighting, sound and space to perform properly."],
    ["04", "Receive files fast", "Raw files sent within 1 hour. Optional 20 minute edit available for +£40."],
  ];
  const faqs = [
    ["How much is it?", "£40 per hour for the studio booking."],
    ["Can you edit it?", "Yes. A 20 minute edit is available as an optional add-on for +£40."],
    ["How fast do I get files?", "Raw files are sent within 1 hour."],
    ["Where are you?", "Camden, London, inside Fitzrovia Studios."],
    ["Can I book bulk?", "Yes. Bulk booking is available. Message us with what you need."],
  ];

  return <main className="site">
    <div className="dotGrid" /><div className="backgroundWash" />
    <header><div className="logo">TAPE<span>//</span>CAMDEN</div><a href="#book" className="navBook">Book</a></header>

    <section className="hero">
      <Spray className="sprayLime" /><Spray className="sprayPink" />
      <div className="heroGrid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="rec"><span /> REC READY</div>
          <h1>Stop filming self tapes in your <em>kitchen.</em></h1>
          <div className="heroCopyWrap"><p>Premium self tape studio in Camden. Built for actors who want to move fast, look professional and send clean files without the drama.</p><Scratch /></div>
          <div className="buttonRow"><Button>DM to book</Button><a href="#pricing" className="outlineBtn">See price</a></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="heroPoster">
          <div className="posterInner"><div className="posterStage"><div className="posterTop"><span>Tape Test</span><span className="red">● REC</span></div><div><div className="blurOrb" /><h2>Your best take <span>starts here.</span></h2></div></div><div className="camdenTag">Camden</div></div>
        </motion.div>
      </div>
    </section>

    <section id="pricing" className="pricing"><div className="pricingGrid"><div><p>Studio booking</p><h2>£40/hour</h2></div><div className="editBox"><p>Optional add-on</p><h3>20 min edit +£40</h3><p className="limeText">Raw files within 1 hour</p></div></div></section>

    <section className="benefits"><div className="wrap"><SectionLabel>Why book Tape//Camden</SectionLabel><h2>Casting directors notice <span>quality.</span></h2><div className="cards"><Card icon={Camera} title="Pro camera" copy="Clean framing, proper lighting and a setup built for performance, not panic." /><Card icon={Mic} title="Clear sound" copy="Your voice lands properly. No kitchen echo. No phone audio gamble." /><Card icon={Clock} title="Fast files" copy="Raw files sent within 1 hour so you can meet the deadline without spiralling." /><Card icon={Scissors} title="Edit option" copy="Need it cleaner? Add a 20 minute edit for £40 and send with confidence." /></div></div></section>

    <section className="gallery"><div className="wrap"><div className="galleryHeader"><div><p>Gallery</p><h2>Tape. Export. Send.</h2></div><Crown className="crown" size={64} /></div><div className="galleryGrid">{galleryItems.map((item, i) => <div key={item} className={`galleryTile tile${i % 3}`}><div className="tileDots" /><div className="tileLabel"><Play size={20} /><strong>{item}</strong></div></div>)}</div><p className="galleryNote">Professional self tapes recorded in Camden..</p></div></section>

    <section className="steps"><div className="stepsGrid"><div><SectionLabel>How it works</SectionLabel><h2>Book. Tape. Export. Send.</h2></div><div>{steps.map(([num, title, copy]) => <div className="step" key={num}><div>{num}</div><article><h3>{title}</h3><p>{copy}</p></article></div>)}</div></div></section>

    <section className="rush"><Star size={42} /><h2>Your audition is tomorrow. We move fast.</h2><p>Professional self tapes in Camden. £40 per hour. Optional 20 min edit +£40. Raw files within 1 hour.</p><Button>Book now</Button></section>

    <section className="faq"><div className="faqWrap"><SectionLabel>FAQ</SectionLabel>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>

    <section id="book" className="book"><div className="bookBox"><div><p>TAPE//CAMDEN</p><h2>Book your slot.</h2><p>£40/hour. Optional 20 min edit +£40. Raw files within 1 hour. Camden, London.</p></div><Button variant="pink">DM to book</Button></div></section>

    <footer>TAPE<span>//</span>CAMDEN · Premium self tapes · Powered by Fitzrovia Studios</footer>
  </main>;
}

createRoot(document.getElementById("root")).render(<TapeCamdenSite />);
