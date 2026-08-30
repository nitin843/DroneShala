import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Camera,
  ChevronRight,
  GraduationCap,
  Menu,
  MessageCircle,
  Plane,
  Play,
  Radar,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import { VariableFontHover } from "@/components/ui/variable-font-hover";
import "./styles.css";

const navItems = [
  { label: "Academy", href: "#academy" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const courses = [
  {
    title: "Online Courses",
    text: "Master drone theory, aviation regulations, and flight simulation through a comprehensive online platform.",
    image: "/media/online_course.png",
    icon: BookOpen,
  },
  {
    title: "Physical Classes",
    text: "Learn in person at the Kathmandu training center with instructor-led lessons and structured classroom-to-field progression.",
    image: "/media/physical_classes.png",
    icon: GraduationCap,
  },
  {
    title: "Onfield Training",
    text: "Fly real drones with certified instructors through practical operations and mapping missions.",
    image: "/media/on_field_training.png",
    icon: Plane,
  },
];

const services = [
  {
    title: "Drone Shop",
    text: "Buy drones, accessories, batteries, and mapping tools with practical guidance from drone operators.",
    image: "/media/drone_shop.png",
    icon: ShoppingBag,
    cta: "Shop now",
  },
  {
    title: "Drone Rental",
    text: "Rent certified drones with pilots for field operations, content production, and technical work.",
    image: "/media/drone_rental.png",
    icon: Camera,
    cta: "Rent now",
  },
  {
    title: "Repair & Maintenance",
    text: "Expert diagnostics, spare parts, preventive maintenance, and support plans for working drone teams.",
    image: "/media/repair_maintenance.png",
    icon: Wrench,
    cta: "Book service",
  },
];

const reasons = [
  {
    title: "DroneShala Certified Program",
    text: "Curriculum aligned with Nepal's aviation regulations for commercial and professional drone operations.",
    icon: BadgeCheck,
  },
  {
    title: "Real Flight Experience",
    text: "Move from simulator to field flights with hands-on missions led by certified instructors.",
    icon: Radar,
  },
  {
    title: "Small Batch Training",
    text: "Focused batches give every student direct instructor attention and practical confidence.",
    icon: Sparkles,
  },
  {
    title: "After-Training Support",
    text: "Equipment guidance, maintenance tips, career advice, and access to DJI, Autel, and specialty drones.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    quote:
      "DroneShala is one of the best platforms that walks through everything that should be done to have the best drone pilot experience.",
    name: "Rajesh Sharma",
    place: "Kathmandu",
  },
  {
    quote:
      "DroneShala keeps me informed of drone-related developments and provides convenient, comprehensive, and reasonably priced educational programs.",
    name: "Priya Maharjan",
    place: "Lalitpur",
  },
  {
    quote:
      "A great, responsive and customer-centric training organization. Their courses deliver real results.",
    name: "Amit Gurung",
    place: "Pokhara",
  },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8%" },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="DroneShala Nepal home">
        <img src="/media/logo.png" alt="DroneShala Nepal" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            <VariableFontHover
              className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
              fromFontVariationSettings="'wght' 500"
              label={item.label}
              staggerDuration={0.025}
              staggerFrom="center"
              toFontVariationSettings="'wght' 800"
            />
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        Enroll Now <ChevronRight aria-hidden="true" size={16} />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Enroll Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <img src="/media/hero_image.png" alt="" />
        <div className="flight-line flight-line-one" />
        <div className="flight-line flight-line-two" />
      </div>
      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Nepal's integrated drone ecosystem</p>
          <h1>Train, fly, map, and create with Nepal's drone specialists.</h1>
          <p>
            Academy, shop, rental, and maintenance under one roof. DroneShala Nepal helps pilots and teams build real aerial capability across Nepal.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#academy">
              Explore Academy <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-secondary" href="#services">
              View Services <Play aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
        <div className="mission-card" data-reveal>
          <span>Active Mission</span>
          <strong>Kathmandu Flight Lab</strong>
          <div className="mission-map">
            <i />
            <i />
            <i />
          </div>
          <div className="mission-meta">
            <span>27.7172 N</span>
            <span>85.3240 E</span>
          </div>
        </div>
      </div>
      <div className="hero-coordinates" aria-hidden="true">
        <span>Balwatar, Kathmandu</span>
        <span>UAV Training - Aerial Operations</span>
      </div>
    </section>
  );
}

function TrustBand() {
  const items = ["Certified-focused curriculum", "Kathmandu training center", "Online + field learning", "Shop - Rent - Repair"];
  return (
    <section className="trust-band" aria-label="DroneShala credibility indicators">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
}

function CourseSection() {
  return (
    <section className="section" id="academy">
      <div className="section-head" data-reveal>
        <span className="section-index">01 - Academy</span>
        <h2>Taught by experts, focused on outcomes.</h2>
        <p>Whether it is starting a drone business or learning to fly, DroneShala builds the bridge from theory to real field confidence.</p>
      </div>
      <div className="course-grid">
        {courses.map((course, index) => {
          const Icon = course.icon;
          return (
            <article className="course-card" key={course.title} data-reveal style={{ "--delay": `${index * 80}ms` }}>
              <img src={course.image} alt={`${course.title} at DroneShala Nepal`} />
              <div>
                <span className="card-kicker">
                  <Icon aria-hidden="true" size={17} /> Training
                </span>
                <h3>{course.title}</h3>
                <p>{course.text}</p>
                <a href="#contact">Preview this course</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section section-alt" id="services">
      <div className="section-head split" data-reveal>
        <div>
          <span className="section-index">02 - Services</span>
          <h2>Everything a drone team needs, under one roof.</h2>
        </div>
        <p>Shop, rent, repair, train, and deploy with one Nepal-based partner who understands real operating conditions.</p>
      </div>
      <div className="service-stack">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article className="service-row" key={service.title} data-reveal>
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <img src={service.image} alt={`${service.title} from DroneShala Nepal`} />
              <div>
                <Icon aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <a href="#contact">
                {service.cta} <ArrowRight aria-hidden="true" size={18} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="why" id="why">
      <div className="why-sticky" data-reveal>
        <span className="section-index">03 - Why DroneShala</span>
        <h2>Built for pilots who need skill, not just slides.</h2>
        <p>
          Training, equipment, and after-support sit together so learners can move from curiosity to professional drone operations with fewer gaps.
        </p>
      </div>
      <div className="reason-list">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <article className="reason-card" key={reason.title} data-reveal>
              <Icon aria-hidden="true" />
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="section community" id="community">
      <div className="community-copy" data-reveal>
        <span className="section-index">04 - Community</span>
        <h2>Connect, practice, and grow with Nepal's drone learners.</h2>
        <p>
          Stay connected with fellow pilots, get answers in course chats, and earn badges as flying confidence grows.
        </p>
      </div>
      <div className="community-grid">
        {[
          ["Student Community", "Share flight updates, tips, and achievements."],
          ["Course Conversations", "Chat with classmates and instructors."],
          ["Achievement System", "Unlock badges as you complete lessons."],
        ].map(([title, text]) => (
          <article className="community-card" key={title} data-reveal>
            <MessageCircle aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" aria-label="Student testimonials">
      <div className="section-head" data-reveal>
        <span className="section-index">05 - Results</span>
        <h2>What our students say.</h2>
        <p>Authentic feedback preserved from the existing DroneShala Nepal website.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <blockquote key={item.name} data-reveal>
            <p>"{item.quote}"</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.place}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div data-reveal>
        <span className="section-index">Ready for takeoff?</span>
        <h2>Become a better drone pilot with expert tips, hands-on training, and field-ready support.</h2>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:info@droneshalanepal.com">
            Email DroneShala <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a className="button button-secondary" href="tel:+9779851457455">
            Call +977 9851457455
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/media/logo.png" alt="DroneShala Nepal" />
        <p>Nepal's premier drone training academy and complete drone support ecosystem.</p>
      </div>
      <div>
        <h3>Courses</h3>
        <a href="#academy">All Drone Courses</a>
        <a href="#academy">Basic Pilot Certification</a>
        <a href="#academy">Aerial Photography</a>
        <a href="#academy">Surveying & Mapping</a>
      </div>
      <div>
        <h3>Company</h3>
        <a href="#why">About DroneShala</a>
        <a href="#services">Facilities</a>
        <a href="#community">Community</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div>
        <h3>Contact</h3>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer">Balwatar, Kathmandu, Nepal</a>
        <a href="tel:+9779851457455">+977 9851457455</a>
        <a href="mailto:info@droneshalanepal.com">info@droneshalanepal.com</a>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  const progress = useScrollProgress();
  const progressStyle = useMemo(() => ({ transform: `scaleX(${progress})` }), [progress]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span style={progressStyle} />
      </div>
      <Header />
      <main>
        <Hero />
        <TrustBand />
        <CourseSection />
        <ServicesSection />
        <WhySection />
        <CommunitySection />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
