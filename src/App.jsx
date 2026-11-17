import React, { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import finceptHeader from "./assets/branding/header_lightmode.png";
import finceptLogo from "./assets/branding/logo_lightmode.png"

import presidentheadshot from "./assets/headshots/Anubhuti_Mittal_Headshot.PNG"
import evpheadshot from "./assets/headshots/Colleen_Li_Headshot.png"
import treasurerheadshot from "./assets/headshots/VincentLiHeadShot.png"
import vpirheadshot from "./assets/headshots/Nysa_Kumar_Headshot.png"
// import vpcrheadshot from ...
import vpoheadshot from "./assets/headshots/AnaiysaaDeswalHeadshot.JPEG"
import vppdheadshot from "./assets/headshots/TatsuyaGreinerHeadshot.jpeg"

import wabtecLogo from "./assets/company_logos/wabtec.png"
import axisBankLogo from "./assets/company_logos/axisbank.png"
import oracleLogo from "./assets/company_logos/oracle.png"

const pillars = [
  {
    title: "Industry Exposure",
    text: "Connect with the people, careers, and ideas shaping modern finance.",
    details: [
      "Opportunities with Purdue's Fintech Center",
      "Guest speaker events featuring fintech professionals",
      "Exposure to real-world industry practices and career pathways",
      "Networking with finance and technology organizations",
      "Workshops on specialized careers and emerging trends"
    ],
  },
  {
    title: "Experiential learning",
    text: "Develop practical, technical, and communication skills through hands-on experiences.",
    details: [
      "Industry-partnered projects addressing real-world financial problems",
      "Industry-judged fintech case competitions",
      "Algorithmic trading, investment, and fintech simulations",
      "Collaborative workshops and technical challenges"
    ],
  },
  {
    title: "Community",
    text: "Build lasting connections in an interdisciplinary community that learns together.",
    details: [
      "Peer and professional mentorship programs",
      "Collaborations with other student organizations",
      "Social events and community-building activities",
      "Opportunities to develop leadership and teamwork skills",
    ],
  },
];

const teamMembers = [
  {
    name: "Anu Mittal",
    role: "President",
    image: presidentheadshot,
  },
  {
    name: "Colleen Li",
    role: "Executive Vice President",
    image: evpheadshot,
  },
  {
    name: "Vincent Li",
    role: "Treasurer",
    image: treasurerheadshot,
  },
  {
    name: "Nysa Kumar",
    role: "VP of Industry Relations",
    image: vpirheadshot,
  },
  {
    name: "Rishi Rao",
    role: "VP of Campus Relations",
    // image: vpcrheadshot,
  },
  {
    name: "Tatsuya Greiner",
    role: "VP of Professional Development",
    image: vppdheadshot,
  },
  {
    name: "Anaiysaa Deswal",
    role: "VP of Outreach",
    image: vpoheadshot,
  },
];

const companies = [
  { name: "Galaxy", domain: "galaxy.com" },
  { name: "Axis Bank", domain: "axisbank.com", logo: axisBankLogo},
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Oracle", domain: "oracle.com", logo: oracleLogo},
  { name: "Barclays", domain: "barclays.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Adapts.ai", domain: "adapts.ai" },
  { name: "Quadrant Technologies", domain: "quadranttechnologies.com" },
  { name: "Nextech", domain: "nextech.org" },
  { name: "Psycray", domain: "psycray.com" },
  { name: "Wabtec Corporation", domain: "wabtec.com", logo: wabtecLogo },
];

const decemberEvents = [
  { day: 2, type: "callout", number: 1, title: "Callout #1", time: "6–7 PM" },
  { day: 3, type: "callout", number: 2, title: "Callout #2", time: "6–7 PM" },
  { day: 5, type: "deadline", title: "Applications due" },
];

const applications = [
  {
    title: "General Member",
    description: "Apply to join Fincept as a general member.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeYi5ubzhix_jL9jlm9vJOZSBuJ7Jfb9FAc9QYDFMiAE-ExeQ/viewform",
  },
  {
    title: "Director",
    description: "Apply to join the team as a director.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdbyiVcQfjWExd-RxTmwbdoEtbFaDsxCNA77svGLpdZYgoteQ/viewform",
  },
];

const pageTitles = {
  "/": "Fincept | Purdue Finance & Fintech Community",
  "/about": "About — Fincept at Purdue",
  "/team": "Team — Fincept at Purdue",
  "/events": "Events — Fincept at Purdue",
  "/contact": "Contact — Fincept at Purdue",
  "/apply": "Apply — Fincept at Purdue",
};

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow-icon arrow-diagonal" : "arrow-icon"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Wordmark({ footer = false }) {
  return (
    <img
      src={finceptHeader}
      alt="Fincept"
      className={footer ? "wordmark footer-wordmark" : "wordmark"}
    />
  );
}

function Kicker({ children }) {
  return <div className="section-kicker">{children}</div>;
}

function PillarCards({ compact = false }) {
  return (
    <div className={compact ? "pillar-grid pillar-grid-compact" : "pillar-grid"}>
      {pillars.map((pillar) => (
        <article className="pillar-card" key={pillar.title}>
          <h3>{pillar.title}</h3>
          <p>{pillar.text}</p>
          {!compact && (
            <ul>
              {pillar.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <h1 className="hero-title">Fincept</h1>
          <p className="hero-affiliation">at Purdue University</p>
          <p className="hero-description">
            Fincept is a student organization at Purdue focused on financial technology and the systems shaping modern finance. We bring together students from diverse disciplines to explore emerging opportunities in fintech, take on projects and case competitions, and build strong professional connections.
          </p>
          <div className="hero-actions">
            <Link className="text-link" to="/about">Explore Fincept <span>↓</span></Link>
            <Link className="button button-dark" to="/apply">Apply to join <ArrowIcon /></Link>
          </div>
        </div>

        <div className="hero-art hero-art-purdue" aria-label="Fincept's three focus areas: finance, technology, and innovation">
          <div className="art-topline"><span>THE FUTURE OF FINANCE</span><span>FINCEPT · PURDUE</span></div>
          <svg className="hero-botanical" viewBox="0 0 440 380" aria-hidden="true">
            <path d="M438 264C383 230 370 184 350 139c-21-46-47-79-92-107M365 166c-35-3-60-20-72-49 32-1 57 16 72 49ZM338 122c-8-32 1-59 25-79 12 30 3 57-25 79ZM400 222c-34-12-52-34-57-66 32 8 51 30 57 66ZM300 92c-33 9-61 1-82-23 31-12 59-4 82 23Z" fill="none" stroke="#031B04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M260 31c-5-13 2-23 12-27 10 5 13 16 7 28 13-7 24-2 27 9-8 9-20 10-30 1 4 14-4 24-16 24-8-10-6-21 5-30-14 3-23-5-22-17 10-7 21-4 29 8Z" fill="#67A26A" stroke="#031B04" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="267" cy="36" r="5" fill="#AD7AA4" />
          </svg>
          <div className="focus-orbit orbit-finance"><strong>FINANCE</strong><small>Markets · Quant · Risk</small></div>
          <div className="focus-orbit orbit-technology"><strong>TECHNOLOGY</strong><small>Fintech · Data · AI</small></div>
          <div className="focus-orbit orbit-innovation"><strong>INNOVATION</strong><small>Ideas · Products · Future</small></div>
        </div>
      </section>

      <div className="club-summary" aria-label="Fincept's focus areas">
        <div className="club-summary-inner">
          <span className="summary-label">WHAT WE BRING TOGETHER</span>
          <span>Rethinking Fintech.</span>
          <span className="summary-location">PURDUE UNIVERSITY</span>
        </div>
      </div>

      <section className="intro-section section-wrap">
        <div className="intro-content">
          <h2>The future<br /><span>of finance.</span></h2>
          <div className="intro-body">
            <p>Fincept brings Purdue students together to understand how financial services are changing and where new opportunities are emerging.</p>
            <p>We explore paths from quantitative strategy and financial engineering to digital payments and fintech.</p>
            <Link className="inline-link" to="/about">Learn more about Fincept <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="programs-section">
        <div className="section-wrap">
          <div className="programs-heading">
            <div><Kicker>OUR THREE PILLARS</Kicker><h2>Explore. Learn. Connect.</h2></div>
          </div>
          <PillarCards compact />
        </div>
      </section>

    </>
  );
}

function PageIntro({ label, title, emphasis, description, plainEmphasis = false }) {
  return (
    <section className="page-intro section-wrap">
      {label && <Kicker>{label}</Kicker>}
      <h1>{title} {emphasis && <em className={plainEmphasis ? "plain-emphasis" : undefined}>{emphasis}</em>}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro title="Explore" emphasis="modern finance." description="Fincept brings Purdue students together to explore the people, ideas, and careers changing the financial industry." plainEmphasis />
      <section className="about-story section-wrap">
        <div className="about-story-mark">
          <img
            src={finceptLogo}
            alt="Fincept"
          />
        </div>
        <div>
          <Kicker>OUR MISSION</Kicker>
          <h2>A wider view<br />of the industry.</h2>
          <p>Fincept is a student-led professional and social community focused on the changing financial industry and the ideas shaping its future.</p>
          <p>There are many paths beyond investment banking and consulting, including quantitative strategy, financial engineering, algorithmic trading, risk analytics, and digital payments.</p>
        </div>
      </section>
      <section className="values-section">
        <div className="section-wrap">
          <Kicker>OUR THREE PILLARS</Kicker>
          <PillarCards />
        </div>
      </section>
      <section className="about-audience section-wrap">
        <div><h2>Who can join?</h2></div>
        <div>
          <p>We welcome students from any major. Our community is an accessible place to begin and grow.</p>
          <div className="discipline-list"><span>BUSINESS</span><span>DATA & COMPUTING</span><span>ENGINEERING</span><span>QUANTITATIVE FIELDS</span><span>AND MORE</span></div>
        </div>
      </section>
      <section className="founding-goals">
        <div className="section-wrap">
          <h2>Build skills.<br />Create connections.</h2>
          <div className="goal-grid">
            <p>Bring together an interdisciplinary community.</p>
            <p>Connect students with professionals and alumni.</p>
            <p>Build practical skills for a changing financial industry.</p>
            <p>Explore emerging trends across financial services.</p>
            <p>Create meaningful opportunities to learn and collaborate.</p>
          </div>
        </div>
      </section>
      <section className="where-we-work section-wrap" aria-labelledby="where-we-work-title">
        <div className="where-we-work-heading">
          <h2 id="where-we-work-title">Where we work</h2>
        </div>
        <div className="company-grid">
          {companies.map((company) => (
            <div className="company-card" key={company.name}>
              <img
                src={
                  company.logo ||
                  `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(`https://${company.domain}`)}&sz=128`
                }
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function TeamPage() {
  return (
    <>
      <PageIntro title="Meet the" emphasis="team." description="" plainEmphasis />
      <section className="team-section section-wrap">
        <div className="team-grid team-placeholder-grid">
          {teamMembers.map((member) => (
            <article className="team-card team-placeholder" key={member.role}>
              <div className="team-portrait">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-position">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function YearCalendar() {
  const [monthDate, setMonthDate] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const year = monthDate.getFullYear();
  const monthIndex = monthDate.getMonth();
  const month = monthDate.toLocaleString("en-US", { month: "long" });
  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const eventDates = new Map(
    decemberEvents.map((event) => [`2026-11-${event.day}`, event]),
  );
  const monthKey = `${year}-${monthIndex}-`;

  return (
    <section className="year-calendar" aria-labelledby="year-calendar-title">
      <div className="year-calendar-heading">
        <Kicker>EVENT CALENDAR</Kicker>
        <div className="calendar-navigation">
          <h2 id="year-calendar-title" aria-live="polite">{month} {year}</h2>
          <div className="calendar-navigation-buttons">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => {
                setSelectedEvent(null);
                setMonthDate(new Date(year, monthIndex - 1, 1));
              }}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => {
                setSelectedEvent(null);
                setMonthDate(new Date(year, monthIndex + 1, 1));
              }}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="calendar-month">
        <div className="calendar-days" aria-label={`${month} ${year}`}>
          {["S", "M", "T", "W", "T", "F", "S"].map((weekday, index) => (
            <span className="calendar-weekday" key={`${weekday}-${index}`}>{weekday}</span>
          ))}
          {Array.from({ length: firstWeekday }, (_, index) => (
            <span className="calendar-empty" key={`empty-${index}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            const event = eventDates.get(`${monthKey}${day}`);
            return (
              event ? (
                <button
                  type="button"
                  className={`calendar-date has-event${event.type === "deadline" ? " is-deadline" : ""}`}
                  aria-label={`${event.title}, ${month} ${day}, ${year}${event.time ? `, ${event.time}` : ""}`}
                  aria-pressed={selectedEvent?.day === event.day}
                  onClick={() => setSelectedEvent({ ...event, month, year })}
                  key={day}
                >
                  {day}
                </button>
              ) : (
                <span className="calendar-date" key={day}>{day}</span>
              )
            );
          })}
        </div>
      </div>
      {selectedEvent && (
        <p className="calendar-selected-callout" role="status">
          {selectedEvent.title} · {selectedEvent.month} {selectedEvent.day}, {selectedEvent.year}{selectedEvent.time ? ` · ${selectedEvent.time}` : ""}
        </p>
      )}
      <div className="calendar-legend">
        <p className="calendar-note"><span aria-hidden="true" /> Callout</p>
        <p className="calendar-note calendar-note-deadline"><span aria-hidden="true" /> Application deadline</p>
      </div>
    </section>
  );
}

function EventsPage() {
  return (
    <>
      <PageIntro title="Upcoming" emphasis="events." description="" plainEmphasis />
      <section className="events-section events-page section-wrap">
        <div className="events-callouts">
          <div className="upcoming-events" aria-label="Upcoming Fincept events and application deadline">
            {decemberEvents.map((event) => (
              <article className={`upcoming-event${event.type === "deadline" ? " upcoming-event-deadline" : ""}`} key={event.day}>
                <div className="upcoming-event-date">
                  <span className="upcoming-event-month">DEC</span>
                  <strong>{event.day}</strong>
                </div>
                <div className="upcoming-event-details">
                  <span className="upcoming-event-label">{event.title}</span>
                  {event.time && <span className="upcoming-event-time">{event.time}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
        <YearCalendar />
      </section>
    </>
  );
}

function ApplyPage() {
  return (
    <>
      <PageIntro
        title="Apply to"
        emphasis="Fincept."
        description="Applications are open for general members and directors."
        plainEmphasis
      />
      <section className="apply-section section-wrap">
        <div className="apply-grid">
          {applications.map((application) => (
            <article className="apply-card" key={application.title}>
              <Kicker>APPLICATION</Kicker>
              <h2>{application.title}</h2>
              <p>{application.description}</p>
              <a className="button button-dark" href={application.url} target="_blank" rel="noreferrer">
                Apply as {application.title === "Director" ? "a director" : "a general member"} <ArrowIcon diagonal />
              </a>
            </article>
          ))}
        </div>
        <div className="apply-dates">
          <p><span>APPLICATIONS DUE</span><strong>December 5</strong></p>
          <p><span>DECISIONS OUT</span><strong>December 9</strong></p>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageIntro title="Contact" emphasis="Fincept." description="Curious about joining, collaborating, or coming to an event? We’d love to hear from you." plainEmphasis />
      <section className="contact-section section-wrap">
        <div className="contact-details">
          <Kicker>CONTACT INFORMATION</Kicker>
          <h2>Contact details</h2>
          <p>For membership, event, or partnership questions, use the contact links below or send the club a message.</p>
          <div className="contact-socials">
            <a href="mailto:fincept@purdue.edu"><span>EMAIL</span><strong>fincept.purdue@gmail.com</strong></a>
            <a href="https://www.linkedin.com/company/fincept-purdue/" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>FINCEPT Purdue</strong></a>
            <a href="https://www.instagram.com/fincept.purdue/" target="_blank" rel="noreferrer"><span>INSTAGRAM</span><strong>@fincept.purdue</strong></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <Kicker>SEND A NOTE</Kicker>
          {sent ? (
            <div className="contact-success" role="status">
              <span className="contact-success-icon">✳</span>
              <h3>Thanks for reaching out.</h3>
              <p>This demo form does not send or store your message yet.</p>
              <button type="button" className="inline-link" onClick={() => setSent(false)}>Write another message <ArrowIcon /></button>
            </div>
          ) : (
            <>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="How should we address you?" required />
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              <label htmlFor="contact-topic">What’s on your mind?</label>
              <select id="contact-topic" name="topic" defaultValue="Joining the club">
                <option>Joining the club</option>
                <option>Upcoming events</option>
                <option>Partnership or collaboration</option>
                <option>Something else</option>
              </select>
              <label htmlFor="contact-message">Your message</label>
              <textarea id="contact-message" name="message" rows="4" placeholder="Tell us a little more..." required />
              <button className="button button-dark contact-submit" type="submit">Send your message <ArrowIcon /></button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="not-found section-wrap">
      <Kicker>WRONG TURN?</Kicker>
      <h1>That page isn’t<br /><em>on the map.</em></h1>
      <Link className="button button-dark" to="/">Back to home <ArrowIcon /></Link>
    </section>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    document.title = pageTitles[location.pathname] || "Page not found — Fincept at Purdue";
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {announcementVisible && (
        <aside className="application-banner" aria-label="Application announcement">
          <Link to="/apply">Applications are live! <span>Apply by December 5</span><ArrowIcon /></Link>
          <button type="button" aria-label="Dismiss application announcement" onClick={() => setAnnouncementVisible(false)}>×</button>
        </aside>
      )}
      <header className="site-header">
        <Link to="/" aria-label="Fincept home"><Wordmark /></Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link className="nav-cta" to="/apply">Apply <ArrowIcon diagonal /></Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="site-footer site-footer-purple">
        <span className="footer-note">Explore what’s next in finance.</span>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/events">Events</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/contact">Contact <ArrowIcon diagonal /></Link>
        </div>
        <span className="copyright">© 2026 FINCEPT PURDUE</span>
      </footer>
    </>
  );
}

function App() {
  return <SiteLayout />;
}

export default App;
