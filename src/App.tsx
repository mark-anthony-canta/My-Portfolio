import { useEffect, useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { aiProjects, Project, resumeLinks, shopifyProjects, wordpressProjects,otherWebsiteProjects } from './data'

const navItems = [
  ['About', '#about'],
  ['AI Agents', '#ai-agents'],
  ['WordPress', '#wordpress'],
  ['Shopify', '#shopify'],
  ['Resume', '#resume'],
  ['Contact', '#contact'],
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  )
}

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="section-heading reveal">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card reveal" style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}>
      <div className="project-visual" aria-hidden="true">
        <span className="project-code">{project.accent}</span>
        <div className="visual-window">
          <span /><span /><span />
        </div>
        <div className="visual-line wide" />
        <div className="visual-line" />
        <div className="visual-chip">{project.stack[0]}</div>
      </div>
      <div className="project-content">
        <span className="project-eyebrow">{project.eyebrow}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="tag-list" aria-label="Project technologies and tags">
          {project.stack.map((item) => <span key={item}>{item}</span>)}
        </div>

        {(project.country || project.status || project.url) && (
  <div className="project-footer">
    <div className="project-meta">
      {project.country && (
        <span className="project-location">
          {project.country}
        </span>
      )}

      {project.status && (
        <span className="project-status">
          {project.status}
        </span>
      )}
    </div>

    {project.url && (
      <a
        className="project-link"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.linkLabel ?? 'Visit website'} for ${project.title}`}
      >
        {project.linkLabel ?? 'Visit website'}
        <ArrowIcon />
      </a>
    )}
  </div>
)}

      </div>
    </article>
  )
}

function ProjectSection({ id, kicker, title, copy, projects }: { id: string; kicker: string; title: string; copy: string; projects: Project[] }) {
  return (
    <section className="section project-section pattern-section" id={id}>
      <div className="container">
        <SectionHeading kicker={kicker} title={title} copy={copy} />
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const [formState, handleFormSubmit, resetFormState] =
  useForm('xrpzgdrb')

  const contactFormRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
  if (!formState.succeeded) return

  contactFormRef.current?.reset()

  const notificationTimer = window.setTimeout(() => {
    resetFormState()
  }, 5000)

  return () => {
    window.clearTimeout(notificationTimer)
  }
}, [formState.succeeded, resetFormState])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])


  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Mark Anthony Canta home">
            <span className="brand-mark">MC</span>
            <span>Mark Anthony Canta</span>
          </a>
          <button className="menu-button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-glow one" /><div className="hero-glow two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal visible">
              <span className="availability"><i /> Open to Work </span>
              <p className="hero-kicker">AI Agent, WordPress, and Shopify Developer</p>
      <h1>I build websites and AI agents that <span>businesses need.</span></h1>
              <p className="hero-intro">I create responsive websites, ecommerce stores, internal systems, and specialized AI Agents for clients in the Philippines, USA, Canada, and Iceland.</p>
              <div className="hero-actions">
                <a className="button primary" href="#ai-agents">Explore my work <ArrowIcon /></a>
                <a className="button secondary" href="#resume">Download resume <DownloadIcon /></a>
              </div>
              <div className="hero-stats" aria-label="Professional summary">
                <div><strong>20+</strong><span>Projects Developed</span></div>
                <div><strong>Remote</strong><span>International Clients</span></div>
                <div><strong>3+ years</strong><span>Experience</span></div>
              </div>
            </div>

            <div className="hero-stage reveal visible" aria-label="Developer workflow illustration">
              <div className="orbit orbit-one"><span>AI</span></div>
              <div className="orbit orbit-two"><span>API</span></div>
              <div className="orbit orbit-three"><span>WP</span></div>
              <div className="code-panel">
                <div className="code-toolbar"><i /><i /><i /><span>developer.workflow</span></div>
                <div className="code-body">
                  <p><b>const</b> developer = {'{'}</p>
                  <p className="indent">name: <em>'Mark Anthony Canta'</em>,</p>
                  <p className="indent">focus: [<em>'AI Agent'</em>, <em>'Wordpress'</em>, <em>'Shopify'</em>],</p>
                  <p className="indent">status: <em>'Building Digital Products'</em></p>
                  <p>{'}'}</p>
                </div>
                <div className="workflow-row">
                  <span>Discover</span><i>→</i><span>Build</span><i>→</i><span>Improve</span>
                </div>
              </div>
              <div className="floating-card card-one"><span>01</span><b>Responsive UI</b><small>Desktop, tablet, mobile</small></div>
              <div className="floating-card card-two"><span>02</span><b>Smart automation</b><small>APIs, workflows, AI</small></div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-title reveal">
              <span className="kicker">About me</span>
              <h2>Building reliable solutions for <span>real business needs.</span></h2>
            </div>
            <div className="about-copy reveal">
              <p>I am Mark Anthony Canta, a Computer Science graduate and remote developer from the Philippines, specializing in AI agents, WordPress, Shopify, Laravel applications, and business automation development for the past 3 years.</p>
              <p>My approach is simple: understand the real workflow, choose the right tools, build a clean experience, and make sure the result is easy to maintain after launch.</p>
              <div className="skill-cloud">
                {['WordPress','Elementor','Bricks','Shopify Plus','AI Agents','Laravel','PHP','Python','JavaScript','FastAPI','ReactJS','RAG','OKF','REST APIs','Google APIs','MySQL','MongoDB','Git','Claude Code','Streamlit'].map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>
        </section>

        <ProjectSection
  id="ai-agents"
  kicker="Selected work 01"
  title="AI Agent Projects"
  copy="AI powered tools for business research, document analysis, and automated job outreach."
  projects={aiProjects}
/>
       <ProjectSection
  id="wordpress"
  kicker="Selected work 02"
  title="WordPress Projects"
  copy="Live client websites built for travel, security, and restaurant brands in Iceland, Canada, and the Philippines."
  projects={wordpressProjects}
/>

        <ProjectSection
  id="shopify"
  kicker="Selected work 03"
  title="Shopify Projects"
  copy="Live ecommerce storefronts built for Icelandic publishing, clothing, and home décor brands."
  projects={shopifyProjects}
/>

<ProjectSection
  id="other-websites"
  kicker="Selected work 04"
  title="Other Website Projects"
  copy="Professional business websites created for companies that need a credible online presence for compliance, legal requirements, email outreach, advertising, and customer trust. Built using Hostinger Website Builder"
  projects={otherWebsiteProjects}
/>

        <p className="project-note"><span className="project-note-label">Note:</span> The projects shown above represent only a selection of my work. Some projects cannot be publicly disclosed because they are protected by non-disclosure agreements, are still under development, or are internal systems accessible only through company servers.</p>

        <section className="section resume-section" id="resume">
          <div className="container">
            <SectionHeading kicker="Experience in detail" title="Choose the resume that fits the role." copy="Each version highlights my most relevant skills and responsibilities for WordPress, Shopify, or AI Agent development." />
            <div className="resume-grid">
              {resumeLinks.map((resume, index) => (
                <a className="resume-card reveal" style={{ '--delay': `${index * 90}ms` } as React.CSSProperties} href={resume.href} download key={resume.title}>
                  <div className="resume-number">0{index + 1}</div>
                  <div><h3>{resume.title}</h3><p>{resume.description}</p></div>
                  <span className="download-circle"><DownloadIcon /></span>
                </a>
              ))}
            </div>
          </div>
        </section>



        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <span className="kicker">Contact me</span>
              <h2>Have a website, store, system, or AI idea to build?</h2>
              <p>Share the goal, current challenge, and ideal timeline. I will reply with a practical next step.</p>
              <div className="contact-links">
                <a href="mailto:markcanta07@gmail.com"><span>Email</span><strong>markcanta07@gmail.com</strong></a>
                <a href="https://www.linkedin.com/in/mark-anthony-canta" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>mark-anthony-canta</strong></a>
                <a href="https://wa.me/639455470040" target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>+63 945 547 0040</strong></a>
              </div>
            </div>
            <div className="contact-form-wrapper reveal">
  {formState.succeeded && (
    <div
      className="form-notification success"
      role="status"
      aria-live="polite"
    >
      <strong>Message sent successfully!</strong>
      <span>Thank you for reaching out. I will get back to you soon.</span>
    </div>
  )}

  <form
    ref={contactFormRef}
    className="contact-form"
    onSubmit={handleFormSubmit}
  >
    <div className="field-row">
      <label>
        <span>Name</span>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </label>

      <label>
        <span>Email</span>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={formState.errors}
        />
      </label>
    </div>

    <label>
      <span>Project type</span>

      <select name="projectType" defaultValue="" required>
        <option value="" disabled>
          Select a project type
        </option>
        <option value="WordPress website">
          WordPress Website
        </option>
        <option value="Shopify store">
          Shopify Store
        </option>
        <option value="AI agent">
          AI Agent
        </option>
        <option value="Laravel system">
          Laravel System
        </option>
        <option value="Other">
          Other
        </option>
      </select>
    </label>

    <label>
      <span>Message</span>

      <textarea
        name="message"
        rows={6}
        placeholder="Send me a message about your project, idea, or question."
        required
      />

      <ValidationError
        prefix="Message"
        field="message"
        errors={formState.errors}
      />
    </label>

    <button
      className="button primary submit-button"
      type="submit"
      disabled={formState.submitting}
    >
      {formState.submitting
        ? 'Sending message...'
        : 'Send message'}
    </button>

    <ValidationError errors={formState.errors} />
  </form>
</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-wrap">
          <p>© {new Date().getFullYear()} Mark Anthony Canta</p>
          <p>Built with React, TypeScript, and modern CSS.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
