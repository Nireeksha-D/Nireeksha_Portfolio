import { useEffect, useState, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  CodeXml,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageSquareText,
  Mic2,
  Phone,
  Rocket,
  Sparkles,
  TerminalSquare,
  Workflow,
  X,
} from 'lucide-react'
import {
  SiAngular,
  SiC,
  SiCplusplus,
  SiCss,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPhp,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
]

const iconMap: Record<string, ReactNode> = {
  Java: <FaJava />,
  Python: <SiPython />,
  C: <SiC />,
  'C++': <SiCplusplus />,
  Angular: <SiAngular />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  'React Native': <SiReact />,
  'Node.js': <SiNodedotjs />,
  PHP: <SiPhp />,
  TensorFlow: <SiTensorflow />,
  OpenCV: <SiOpencv />,
  'Scikit-learn': <SiScikitlearn />,
  NumPy: <SiNumpy />,
  Pandas: <SiPandas />,
  FastAPI: <SiFastapi />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Kotlin: <SiKotlin />,
  Flutter: <SiFlutter />,
  XML: <CodeXml />,
  NLP: <MessageSquareText />,
  LLMs: <Bot />,
  'Prompt Engineering': <Sparkles />,
  'AI APIs': <Workflow />,
  'Voice/Chat Automation': <Mic2 />,
}

const skillGroups = [
  { title: 'Programming', icon: <Code2 />, items: ['Java', 'Python', 'C', 'C++'] },
  { title: 'Frontend / Web', icon: <Layers3 />, items: ['Angular', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP'] },
  { title: 'AI / Machine Learning', icon: <Bot />, items: ['TensorFlow', 'OpenCV', 'Scikit-learn', 'NumPy', 'Pandas', 'NLP', 'LLMs', 'Prompt Engineering', 'AI APIs', 'Voice/Chat Automation'] },
  { title: 'Backend / Frameworks', icon: <TerminalSquare />, items: ['FastAPI', 'Node.js'] },
  { title: 'Databases', icon: <Database />, items: ['MySQL', 'MongoDB', 'Firebase'] },
  { title: 'Mobile', icon: <Phone />, items: ['Kotlin', 'Flutter', 'XML'] },
]

const projects = [
  {
    name: 'Agrimate',
    type: 'AI Based Agriculture Mobile App',
    tech: ['Kotlin', 'XML', 'Firebase'],
    description: 'Developed a mobile application for crop yield prediction and farm management. Integrated real-time market price and climate APIs and implemented a crop calendar feature using climate APIs.',
    number: '01',
  },
  {
    name: 'Canara Dhvani',
    type: 'College Daily Updates Android App',
    tech: ['Java', 'XML', 'Firebase'],
    description: 'Developed a mobile application providing students with academic updates, campus events and announcements while enabling faculty to manage attendance records.',
    number: '02',
  },
  {
    name: 'Ayush',
    type: 'Ayurvedic Healthcare & E-commerce App',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    description: 'Built a mobile application for Ayurvedic product sales and health appointment booking, with an admin panel for managing products, therapies and user bookings.',
    number: '03',
  },
  {
    name: 'Question Paper Generation System',
    type: '',
    tech: ['React', 'MongoDB'],
    description: "Developed a dynamic question paper generation system enabling teachers to manage questions, define patterns and generate papers aligned with COs, POs and Bloom's Taxonomy.",
    number: '04',
  },
  {
    name: 'Online Cake Ordering Website',
    type: '',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description: 'Developed a mini web project allowing users to select menu options and place orders.',
    number: '05',
  },
  {
    name: 'Nest Nurture',
    type: '',
    tech: ['Kotlin', 'XML', 'Firebase'],
    description: 'Developed an Android application allowing users to explore interior designs and place orders.',
    number: '06',
  },
]

const education = [
  { degree: 'Master of Computer Applications', school: 'St Joseph Engineering College, Mangalore', score: '9.42 CGPA', date: 'Aug 2025' },
  { degree: 'Bachelor of Computer Applications', school: 'Canara College, MG Road, Mangalore', score: '9.45 CGPA', date: 'Aug 2023' },
  { degree: 'PUC', school: 'SM Kushe P U College, Attavara, Mangalore', score: '78.5%', date: 'Mar 2020' },
  { degree: 'SSLC', school: 'GHSS Mangalpady, Kasaragod, Kerala', score: '96%', date: 'Mar 2018' },
]

const certifications = [
  ['Foundation of User Experience (UX) Design', 'Google'],
  ['Introduction to Machine Learning', 'Infosys Springboard'],
  ['Fundamentals of Java Programming', 'Coursera'],
  ['Flutter and Backends: Integrating Flutter with Google Firebase', 'Infosys Springboard'],
  ['Flutter Development: Introducing Flutter & the Dart Programming Language', 'Infosys Springboard'],
]

const activities = [
  'Infovision 2023',
  'Terahertz 2022',
  'Cifra 2022',
  'One-week placement and training workshop conducted by iSkew',
  'Organized a Coding event at Canfest 2022',
  'Organized a Web Development event at Canfest 2023',
  'Committee Head of Event Management and Drafting, Joshiana 2024, SJEC',
]

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span>/</span> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="brand" href="#home" aria-label="Nireeksha D home">
        <span className="brand-mark">ND</span>
        <span className="brand-name">Nireeksha D</span>
      </a>
      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="mailto:nireekshad0612@gmail.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-content reveal is-visible">
        <div className="availability"><span /> Full Stack + AI/ML</div>
        <p className="hero-kicker">Hello, I&apos;m</p>
        <h1>NIREEKSHA <span>D</span></h1>
        <h2>Junior Software Developer <i>/</i> Full Stack Developer</h2>
        <p className="hero-copy">Enthusiastic and adaptable developer with hands-on experience in full-stack development using Angular and Java, with growing expertise in Python and AI-driven automation.</p>
        <div className="hero-badges">
          {['Angular', 'Java', 'Python', 'AI/ML', 'React', 'Node.js'].map((badge) => <span key={badge}>{badge}</span>)}
        </div>
        <div className="hero-actions">
          <a className="button button--primary" href="#projects">View My Work <ArrowDown size={17} /></a>
          <a className="button button--secondary" href="/Nireeksha-D-Resume.pdf" download>Download Resume <Download size={17} /></a>
        </div>
        <div className="social-row">
          <span>Connect</span>
          <i />
          <a href="https://github.com/Nireeksha-D" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/nireeksha-d-1467342b1" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        </div>
      </div>
      <div className="hero-visual reveal is-visible" aria-hidden="true">
        <div className="visual-shell">
          <div className="window-bar"><span /><span /><span /><small>nireeksha.dev</small></div>
          <div className="code-lines">
            <p><em>const</em> developer = {'{'}</p>
            <p className="indent">name: <strong>&apos;Nireeksha D&apos;</strong>,</p>
            <p className="indent">focus: [<strong>&apos;Full Stack&apos;</strong>, <strong>&apos;AI&apos;</strong>],</p>
            <p className="indent">stack: {'{'}</p>
            <p className="indent-2">frontend: <strong>&apos;Angular&apos;</strong>,</p>
            <p className="indent-2">backend: <strong>&apos;Java&apos;</strong>,</p>
            <p className="indent-2">automation: <strong>&apos;OpenAI APIs&apos;</strong></p>
            <p className="indent">{'}'}</p>
            <p>{'}'};</p>
          </div>
          <div className="terminal-line"><span>$</span> building intelligent experiences<span className="cursor">_</span></div>
        </div>
        <div className="floating-chip floating-chip--angular"><SiAngular /> Angular</div>
        <div className="floating-chip floating-chip--java"><FaJava /> Java</div>
        <div className="floating-chip floating-chip--ai"><Bot /> AI Automation</div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about"><span>Scroll</span><ArrowDown /></a>
    </section>
  )
}

export function About() {
  const focuses = [
    ['01', 'Full Stack', 'Building web applications across Angular frontends and Java backends.'],
    ['02', 'AI Automation', 'Exploring intelligent workflows through chat, voice, and API integrations.'],
    ['03', 'Adaptable Mindset', 'Growing across Python, AI/ML, mobile development, and modern web tools.'],
  ]
  return (
    <section className="section about" id="about">
      <div className="section-number">01</div>
      <SectionHeading eyebrow="About" title="Developer by craft. Learner by nature." />
      <div className="about-layout">
        <div className="about-copy reveal">
          <p className="lead">I&apos;m a junior software developer with hands-on experience building full-stack applications using <strong>Angular</strong> and <strong>Java</strong>.</p>
          <p>My work spans frontend interfaces, backend services, RESTful APIs, and data-driven modules. I&apos;m especially interested in AI-driven automation and the ways intelligent systems can make customer interactions faster and more useful.</p>
          <p>Alongside full-stack development, I&apos;m growing my expertise in Python, AI/ML tools, mobile technologies, and practical automation.</p>
          <a className="text-link" href="#experience">Explore my experience <ArrowUpRight size={16} /></a>
        </div>
        <div className="focus-list">
          {focuses.map(([number, title, text]) => (
            <article className="focus-card reveal" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-number">02</div>
      <SectionHeading eyebrow="Technology" title="A versatile, evolving toolkit." text="Technologies explored through academic projects, practical development, and ongoing learning." />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className={`skill-group skill-group--${index + 1} reveal`} key={group.title}>
            <div className="skill-group-title"><span>{group.icon}</span><h3>{group.title}</h3></div>
            <div className="skill-items">
              {group.items.map((item) => <div className="skill-chip" key={item}><span>{iconMap[item]}</span>{item}</div>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Experience() {
  const responsibilities = [
    'Contributed to full-stack development using Angular for frontend and Java for backend for enterprise-level web applications.',
    'Collaborated with cross-functional teams to design and deploy RESTful APIs and data-driven modules.',
    'Currently working on a Saudi client project to develop a WhatsApp AI bot for automating yacht booking services.',
    'Integrated OpenAI APIs for chat and voice automation to improve customer interaction efficiency.',
  ]
  return (
    <section className="section" id="experience">
      <div className="section-number">03</div>
      <SectionHeading eyebrow="Experience" title="Turning ideas into working software." />
      <div className="experience-timeline reveal">
        <div className="timeline-rail"><span /></div>
        <article className="experience-card">
          <div className="experience-top">
            <div className="experience-icon"><BriefcaseBusiness /></div>
            <div><span className="role-label">Current role</span><h3>Junior Software Developer Intern</h3><p>Infomatics Corp — Mangalore</p></div>
            <div className="experience-date"><CalendarDays /> June – Present</div>
          </div>
          <div className="responsibility-grid">
            {responsibilities.map((item) => <div key={item}><span><Check /></span><p>{item}</p></div>)}
          </div>
          <div className="experience-stack"><span>Core stack</span><b><SiAngular /> Angular</b><b><FaJava /> Java</b><b><Bot /> OpenAI APIs</b></div>
        </article>
      </div>
    </section>
  )
}

export function AiHighlight() {
  const points = [
    ['WhatsApp AI bot', <MessageSquareText />],
    ['OpenAI APIs', <Bot />],
    ['Chat automation', <Workflow />],
    ['Voice automation', <Mic2 />],
    ['Yacht booking automation', <Sparkles />],
    ['AI-driven customer interaction', <Rocket />],
  ]
  return (
    <section className="ai-highlight reveal">
      <div className="ai-mesh" />
      <div className="ai-copy">
        <span className="eyebrow"><span>/</span> Current AI Work</span>
        <h2>Building Intelligent<br />Customer Experiences</h2>
        <p>Applying conversational AI to a real customer journey—connecting chat and voice automation with yacht booking workflows through OpenAI APIs.</p>
      </div>
      <div className="ai-network">
        <div className="network-center"><Bot /><span>AI</span></div>
        {points.map(([label, icon], index) => <div className={`network-node network-node--${index + 1}`} key={label as string}><span>{icon}</span>{label}</div>)}
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-number">04</div>
      <SectionHeading eyebrow="Selected Projects" title="Projects built to solve real problems." text="Academic and personal work across mobile, web, full-stack, and intelligent application development." />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.name}>
            <div className="project-number">{project.number}</div>
            <div className="project-icon"><Code2 /></div>
            {project.type && <span className="project-type">{project.type}</span>}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => <span key={tech}>{iconMap[tech]} {tech}</span>)}
            </div>
          </article>
        ))}
      </div>
      <p className="project-note reveal"><Github size={16} /> Project links are shown only when a verified public URL is available.</p>
    </section>
  )
}

export function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-number">05</div>
      <SectionHeading eyebrow="Education" title="A strong academic foundation." />
      <div className="education-list">
        {education.map((item, index) => (
          <article className="education-card reveal" key={item.degree}>
            <div className="education-index">0{index + 1}</div>
            <div className="education-icon"><GraduationCap /></div>
            <div className="education-main"><h3>{item.degree}</h3><p>{item.school}</p></div>
            <strong>{item.score}</strong>
            <time>{item.date}</time>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="section-number">06</div>
      <SectionHeading eyebrow="Certifications" title="Learning beyond the classroom." />
      <div className="cert-grid">
        {certifications.map(([name, issuer], index) => (
          <article className="cert-card reveal" key={name}>
            <div className="cert-top"><Award /><span>0{index + 1}</span></div>
            <h3>{name}</h3><p>{issuer}</p>
          </article>
        ))}
      </div>
      <div className="activities reveal">
        <div className="activities-heading"><Sparkles /><div><span className="eyebrow"><span>/</span> Beyond Code</span><h3>Achievements & Activities</h3></div></div>
        <div className="activity-tags">{activities.map((activity) => <span key={activity}>{activity}</span>)}</div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid" />
      <div className="contact-inner reveal">
        <span className="eyebrow"><span>/</span> Contact</span>
        <h2>Let&apos;s Build Something<br /><span>Great Together.</span></h2>
        <p>I&apos;m open to developer opportunities, meaningful collaborations, and conversations about full-stack development and AI automation.</p>
        <a className="button button--primary contact-button" href="mailto:nireekshad0612@gmail.com">Start a conversation <ArrowUpRight /></a>
        <div className="contact-links">
          <a href="mailto:nireekshad0612@gmail.com"><span><Mail /></span><small>Email</small><strong>nireekshad0612@gmail.com</strong></a>
          <a href="tel:+919544013556"><span><Phone /></span><small>Phone</small><strong>+91 9544013556</strong></a>
          <a href="https://www.linkedin.com/in/nireeksha-d-1467342b1" target="_blank" rel="noreferrer"><span><Linkedin /></span><small>LinkedIn</small><strong>Connect professionally</strong></a>
          <a href="https://github.com/Nireeksha-D" target="_blank" rel="noreferrer"><span><Github /></span><small>GitHub</small><strong>Explore my profile</strong></a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return <footer><a className="brand" href="#home"><span className="brand-mark">ND</span><span className="brand-name">Nireeksha D</span></a><p>Junior Software Developer · Full Stack Developer</p><a href="#home" className="back-to-top">Back to top <ArrowUpRight /></a></footer>
}

export function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal:not(.is-visible)')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <><Navbar /><main><Hero /><About /><Skills /><Experience /><AiHighlight /><Projects /><Education /><Certifications /><Contact /></main><Footer /></>
}
