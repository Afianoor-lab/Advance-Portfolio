import { useEffect, useState } from "react";

const projects = [
  {
    title: "Language Translator",
    description: "A multilingual translation app designed to make communication feel effortless.",
    image: "project1.png",
    category: "AI & Web",
    tech: ["Python", "Streamlit", "AI"],
    code: "https://github.com/Afianoor-lab/Language-Translator-App",
    demo: "https://language-translator-app-mhuruc5ylxq2gzlhjkzcam.streamlit.app/",
  },
  {
    title: "AI Customer Support",
    description: "An AI-powered support experience that helps customers get answers in real time.",
    image: "project2.png",
    category: "AI & Web",
    tech: ["AI", "Web", "Streamlit"],
    code: "https://github.com/Afianoor-lab/AI-Customer-Support-app",
    demo: "https://ai-customer-support-app-jpj87c496gec5nd8movtsh.streamlit.app/",
  },
  {
    title: "Brain Tumor Detection",
    description: "A medical image analysis application for brain tumor detection and classification.",
    image: "project3.png",
    category: "AI & Web",
    tech: ["Python", "Computer Vision", "ML"],
    code: "https://github.com/Afianoor-lab/Brain-Tumor-Detection-and-Classification-Web-App",
  },
  {
    title: "Featured Event Finder",
    description: "A clean event discovery experience for finding something exciting to do.",
    image: "project4.png",
    category: "Web",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Afianoor-lab/EventFinder",
    demo: "https://afianoor-lab.github.io/EventFinder/",
  },
  {
    title: "Ghost Writer AI",
    description: "An AI writing assistant that helps complete unfinished scripts and comments.",
    image: "project5.png",
    category: "AI & Web",
    tech: ["AI", "Python", "Hugging Face"],
    code: "https://github.com/Afianoor-lab/Ghost-Writer-AI",
    demo: "https://huggingface.co/spaces/AfiaNoor/Ghost-Writer-AI",
  },
  {
    title: "VaultLegacy",
    description: "An Android app concept for securely protecting personal passwords.",
    image: "project6.jpeg",
    category: "Mobile",
    tech: ["Android", "Java", "Security"],
    code: "https://github.com/Afianoor-lab/Vault-Asset-app",
    demo: "https://drive.google.com/file/d/1pSEUTa9A75NWbkSJiEGZJiKhAiNmdHRH/view?usp=drivesdk",
  },
  {
    title: "CLOAK-AI",
    description: "A privacy-preserving AI agent project built for the AMD Developer Hackathon.",
    image: "project7.png",
    category: "AI & Web",
    tech: ["AI", "Privacy", "AMD"],
    code: "https://github.com/Afianoor-lab/CloakAI-AMD-Neural-Guard",
    demo: "https://huggingface.co/spaces/AfiaNoor/Cloak-AI",
  },
];

const certifications = [
  ["AMD Developer Hackathon", "AMD Developer Hackathon-certificate.pdf"],
  ["Google Data Analytics", "data analytics certficate.pdf"],
  ["Google AI Essentials", "Ai essentials certificate.pdf"],
  ["Google Project Management", "project mangmnt certificate.pdf"],
  ["Aspire Institute Leadership", "Aspire-Certificate.pdf"],
  ["Generative AI Application Developer", "Generative AI Application Developer Certificate .pdf"],
  ["Introduction to Cybersecurity", "Introduction To Cybersecurity Certificate .pdf"],
];

const skills = [
  { title: "Frontend", icon: "✳", items: ["React.js", "JavaScript", "HTML & CSS", "Responsive UI"] },
  { title: "Backend & data", icon: "⌘", items: ["Node.js", "Express", "REST APIs", "MySQL & MongoDB"] },
  { title: "AI & machine learning", icon: "◈", items: ["Python", "Scikit-learn", "Computer vision", "LLMs"] },
  { title: "Tools & workflow", icon: "↗", items: ["Git & GitHub", "Firebase", "Agile", "UI/UX"] },
];

const buildLayers = [
  { number: "01", name: "Interface", tools: "React · JavaScript · Responsive UI" },
  { number: "02", name: "Services", tools: "Node.js · Express · REST APIs" },
  { number: "03", name: "Data", tools: "MySQL · MongoDB · Firebase" },
  { number: "04", name: "Intelligence", tools: "Python · Machine learning · LLMs" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filter]);

  const visibleProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  async function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState({ status: "sending", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
      form.reset();
      setFormState({ status: "success", message: result.message });
    } catch (error) {
      setFormState({ status: "error", message: error.message || "Unable to reach the contact service. Please email me instead." });
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home" onClick={closeMenu}>AN<span>.</span></a>
          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
          <div className={`nav-links${menuOpen ? " open" : ""}`}>
            {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Certificates", "#certifications"]].map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <span>↗</span></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy reveal">
            <div className="availability"><span /> Open to opportunities</div>
            <p className="hero-intro">Hello, I&apos;m Afia Noor</p>
            <h1>I build full-stack<br />products with <span>purpose.</span></h1>
            <p className="hero-description">
              I bring thoughtful interfaces, backend services, data, and useful AI
              together to create practical digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
              <a className="button button-quiet" href="assets/resume.pdf" target="_blank" rel="noreferrer">View résumé <span>↗</span></a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/afia-noor-86090a35b" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/Afianoor-lab" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="mailto:afianoor508@gmail.com">Email ↗</a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />
            <div className="portrait-frame">
              <img src="assets/profile.png" alt="Afia Noor" />
            </div>
            <div className="floating-note note-top"><span>✦</span> Curious by nature</div>
            <div className="floating-note note-bottom"><span>⌘</span> Code with care</div>
            <span className="visual-spark spark-one">✳</span>
            <span className="visual-spark spark-two">✦</span>
          </div>
          <a href="#about" className="scroll-cue"><span /> Scroll to explore</a>
        </section>

        <section className="build-section" aria-labelledby="build-heading">
          <div className="container">
            <div className="build-heading reveal">
              <span className="eyebrow">One connected toolkit</span>
              <h2 id="build-heading">From interface to <span>intelligence.</span></h2>
            </div>
            <div className="build-flow">
              {buildLayers.map((layer) => (
                <article className="build-layer reveal" key={layer.number}>
                  <span className="build-number">{layer.number}</span>
                  <h3>{layer.name}</h3>
                  <p>{layer.tools}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <SectionHeading eyebrow="A little about me" title={<>Making ideas<br />feel <span>possible.</span></>} />
          <div className="about-copy reveal">
            <p>
              I&apos;m a Computer Science graduate who enjoys turning thoughtful ideas into
              practical products. My work spans web and Android apps, AI experiments,
              and the details that make a digital experience feel intuitive.
            </p>
            <p>
              I like working across the stack: shaping an interface, connecting it to
              backend services and data, and exploring where AI can make a product more
              useful. I&apos;m always learning and building on that foundation.
            </p>
            <a className="text-link" href="#contact">Have a project in mind? <span>↗</span></a>
          </div>
          <div className="stats-row reveal">
            <div><strong>07</strong><span>Projects showcased</span></div>
            <div><strong>07</strong><span>Certificates earned</span></div>
            <div><strong>∞</strong><span>Curiosity to learn</span></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="What I work with"
              title={<>The tools behind<br /><span>end-to-end products.</span></>}
              description="A practical mix of frontend, backend, data, and AI technologies for building connected digital experiences."
            />
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card reveal" key={skill.title} style={{ "--delay": `${index * 80}ms` }}>
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.title}</h3>
                  <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container projects-section" id="projects">
          <SectionHeading
            eyebrow="Selected work"
            title={<>A few things I&apos;ve<br /><span>put into the world.</span></>}
            description="A mix of AI experiments, web experiences, and mobile projects — each one a chance to learn something new."
          />
          <div className="project-filters reveal" role="group" aria-label="Filter projects">
            {["All", "AI & Web", "Web", "Mobile"].map((item) => (
              <button
                type="button"
                key={item}
                className={filter === item ? "selected" : ""}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card reveal" key={project.title} style={{ "--delay": `${(index % 3) * 70}ms` }}>
                <a className="project-image" href={project.demo || project.code} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <img src={`assets/${project.image}`} alt={`${project.title} project preview`} loading="lazy" />
                  <span className="project-category">{project.category}</span>
                  <span className="image-arrow">↗</span>
                </a>
                <div className="project-info">
                  <div className="project-title"><h3>{project.title}</h3><span>0{projects.indexOf(project) + 1}</span></div>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links">
                      <a href={project.code} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}>Code ↗</a>
                      {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>Live ↗</a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <div className="container">
            <SectionHeading
              eyebrow="Always learning"
              title={<>Learning doesn&apos;t<br /><span>stop at a certificate.</span></>}
              description="A few milestones from my ongoing journey across technology, leadership, and creative problem-solving."
            />
            <div className="cert-grid">
              {certifications.map(([title, file], index) => (
                <article className="cert-card reveal" key={file} style={{ "--delay": `${(index % 3) * 70}ms` }}>
                  <span className="cert-number">0{index + 1}</span>
                  <div><span className="cert-mark">✳</span><h3>{title}</h3></div>
                  <a href={`assets/${encodeURIComponent(file)}`} target="_blank" rel="noreferrer">View certificate <span>↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container contact-section" id="contact">
          <div className="contact-heading reveal">
            <span className="eyebrow">Have something in mind?</span>
            <h2>Let&apos;s make<br /><span>it happen.</span></h2>
            <p>I&apos;m always happy to talk about new ideas, interesting projects, or opportunities to collaborate.</p>
            <a className="contact-email" href="mailto:afianoor508@gmail.com">afianoor508@gmail.com <span>↗</span></a>
            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/afia-noor-86090a35b" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/Afianoor-lab" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleContactSubmit}>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" placeholder="Jane Smith" autoComplete="name" minLength="2" maxLength="100" required />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" placeholder="jane@example.com" autoComplete="email" maxLength="254" required />
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about what you have in mind..." minLength="10" maxLength="5000" required />
            <button className="button button-primary submit-button" type="submit" disabled={formState.status === "sending"}>
              {formState.status === "sending" ? "Sending…" : "Send message"} <span>↗</span>
            </button>
            <p className={`form-message ${formState.status}`} role="status" aria-live="polite">
              {formState.message}
              {formState.status === "error" && <> <a href="mailto:afianoor508@gmail.com">Email me directly.</a></>}
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="logo" href="#home">AN<span>.</span></a>
          <p>Designed & built with care by Afia Noor</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
