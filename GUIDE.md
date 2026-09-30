# Build your portfolio step by step

React + Vite + Tailwind CSS v4. Follow the steps in order.

## Step 1 – Create the project

Open a terminal in the folder where you keep your projects:

```bash
npm create vite@latest baudoin-portfolio -- --template react
cd baudoin-portfolio
npm install
npm install tailwindcss @tailwindcss/vite
```

## Step 2 – Clean up and set up folders

Delete these files that Vite created:

- `src/App.css`
- everything inside `src/assets/`

Create these folders:

- `src/components/`
- `public/projects/`

Put your project screenshots in `public/projects/` with these names:
`murakoze.png`, `cowlytic.png`, `intern-connect.png`, `streamzone.png`.

Optional: put your photo in `public/me.jpg` and your CV in `public/Baudoin_Bolingo_CV.pdf`.

The final structure looks like this:

```
baudoin-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── me.jpg                (your photo)
│   ├── Baudoin_Bolingo_CV.pdf (your CV)
│   └── projects/
│       ├── murakoze.png
│       ├── cowlytic.png
│       ├── intern-connect.png
│       └── streamzone.png
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── data.js
    └── components/
        ├── Button.jsx
        ├── SectionTitle.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Services.jsx
        ├── Skills.jsx
        ├── Principles.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

Now create or replace each file below with the code shown.

## Step 3 – Connect Tailwind to Vite

File: `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## Step 4 – Page title and fonts

File: `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Baudoin Bolingo, full stack developer building mobile and web apps with React, React Native and Node.js." />
    <title>Baudoin Bolingo | Full Stack Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=DM+Sans:wght@400;500;700&family=Caveat:wght@500;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Step 5 – Colors, fonts and the hand-drawn effects

File: `src/index.css`

```css
@import "tailwindcss";

/* Your colors and fonts. Change them here and the whole site updates. */
@theme {
  --color-paper: #F4F6FB;
  --color-rule: #E3E8F2;
  --color-ink: #14213D;
  --color-muted: #5B6478;
  --color-card: #E7EEF9;
  --color-teal: #0E7C7B;
  --color-deep: #0B3B4A;
  --color-tangerine: #FF8A3D;
  --color-peach: #FFE2CC;

  --font-display: "Sora", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-hand: "Caveat", "Comic Sans MS", cursive;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

/* Lined notebook paper background */
body {
  background-color: var(--color-paper);
  background-image: repeating-linear-gradient(to bottom, transparent 0 35px, var(--color-rule) 35px 36px);
  color: var(--color-ink);
  font-family: var(--font-sans);
}

/* Hand-drawn orange underline. Use: className="stroke" */
.stroke {
  position: relative;
  display: inline-block;
}
.stroke::after {
  content: "";
  position: absolute;
  left: -2px;
  right: -6px;
  bottom: -12px;
  height: 12px;
  background: no-repeat center / 100% 100%
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 14' preserveAspectRatio='none'%3E%3Cpath d='M3 8 C 50 2, 110 3, 177 7' fill='none' stroke='%23FF8A3D' stroke-width='4.5' stroke-linecap='round'/%3E%3Cpath d='M14 12 C 60 9, 120 9, 168 11' fill='none' stroke='%23FF8A3D' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
}

/* Two strips of tape on a button. Use: className="tape" */
.tape {
  position: relative;
}
.tape::before,
.tape::after {
  content: "";
  position: absolute;
  width: 34px;
  height: 14px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--color-tangerine) 70%, transparent);
  transform: rotate(-38deg);
  pointer-events: none;
}
.tape::before { top: -6px; left: -12px; }
.tape::after { bottom: -6px; right: -12px; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

## Step 6 – Entry file

File: `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Step 7 – All your content (the file you edit most)

File: `src/data.js`

```js
// All the text on your site lives here.
// Edit this file to update your portfolio. You don't need to touch the components.

export const profile = {
  name: 'Baudoin Bolingo',
  role: 'Full Stack Developer',
  location: 'Kigali, Rwanda',
  headline: 'I Build Mobile And Web Apps That Solve Real Problems.',
  overview:
    "I'm a full stack developer building mobile and web apps with React, React Native, Next.js, TypeScript, Angular, Redux, Node.js and Express, with hands-on experience in AI. I learn fast and work closely with clients to ship efficient, scalable and user-friendly products.",
  email: 'baudouinbolingo@gmail.com',
  phone: '+250 796 226 099',
  phoneLink: '+250796226099',
  photo: '', // put your photo in public/ (e.g. public/me.jpg) and write '/me.jpg' here
  resume: '', // put your CV in public/ (e.g. public/Baudoin_Bolingo_CV.pdf) and write its path here
  socials: [
    { label: 'GitHub', href: '' }, // add your links
    { label: 'LinkedIn', href: '' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const experience = [
  {
    role: 'Software Developer',
    company: 'Wiredin',
    current: true,
    points: [
      'Building the Murakoze App on mobile and web to improve user engagement and service experience.',
      'Develop and maintain core features, optimize performance and keep frontend and backend working together smoothly.',
      'Turn UI/UX designs into high-quality code and build scalable solutions with senior developers.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Cowlytics',
    points: [
      'Built full-stack features for an agri-tech platform that gives farmers real-time livestock monitoring and predictive analytics.',
      'Built RESTful APIs with Node.js and Express that power dashboards for biosecurity alerts and productivity insights.',
      'Modeled data with Supabase and built responsive interfaces that make complex farm data clear on any device.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'CB-link',
    points: [
      'Developed and maintained web and mobile apps with React.js and React Native.',
      'Worked with designers, product managers and developers to ship high-quality products.',
      'Built responsive, cross-browser interfaces and took part in code reviews.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Klab',
    points: [
      'Built team projects with React.js, React Native, HTML, CSS and Tailwind CSS.',
      'Created responsive interfaces that matched the designs and worked across devices and platforms.',
    ],
  },
]

export const projects = [
  {
    name: 'Murakoze',
    type: 'Web & Mobile Platform',
    description:
      'A Rwandan customer experience platform. Banks, hospitals, hotels and restaurants use it to track client satisfaction in real time, manage queues and schedule appointments.',
    role: 'Software Developer',
    image: 'projects/murakoze.png',
    tags: ['React js', 'TypeScript', 'React Native', 'Angular', 'PostgreSQL', 'Yii2', 'PHP'],
    github: '', // add your repo link
    live: '', // add your live demo link
  },
  {
    name: 'Cowlytic',
    type: 'Livestock Monitoring Platform',
    description:
      'A livestock monitoring platform that gives farmers real-time insights, biosecurity alerts and predictive analytics to improve animal health and farm productivity.',
    role: 'Full Stack Developer',
    image: 'projects/cowlytic.png',
    tags: ['Next js', 'TypeScript', 'React Native', 'Rest API', 'Express js', 'Supabase', 'Tailwind css'],
    github: '',
    live: '',
  },
  {
    name: 'Intern Connect',
    type: 'SaaS Web App',
    description:
      'Connects students, schools and companies. Students find and apply for internships, companies post openings, and schools track their students’ placements in one place.',
    role: 'Full Stack Developer',
    image: 'projects/intern-connect.png',
    tags: ['React js', 'Express js', 'Tailwind css', 'SaaS'],
    github: '',
    live: '',
  },
  {
    name: 'StreamZone',
    type: 'Mobile App',
    description:
      'A movie streaming app where users browse, search and watch movies right from their phone, with weekly, monthly and yearly subscription plans.',
    role: 'Mobile Developer',
    image: 'projects/streamzone.png',
    tags: ['React Native', 'Redux Toolkit', 'Tailwind css', 'Rest Api', 'Appwrite'],
    github: '',
    live: '',
  },
]

export const services = [
  {
    title: 'Mobile App',
    tag: 'Most requested',
    for: 'For startups and businesses that need an iOS and Android app built from idea to launch.',
    items: ['React Native app for iOS & Android', 'Design-to-code from Figma', 'APIs, auth & payments', 'App Store & Play Store launch'],
    cta: 'Build My App',
  },
  {
    title: 'Web App',
    for: 'For teams that need a dashboard, SaaS product or business website that is fast and easy to use.',
    items: ['React or Next.js frontend', 'Node.js & Express backend', 'Supabase or PostgreSQL database', 'Responsive on every device'],
    cta: 'Build My Web App',
  },
  {
    title: 'Team Developer',
    for: 'For companies that need an extra developer to ship features on a regular basis.',
    items: ['New features', 'Bug fixes & maintenance', 'Code reviews', 'AI-assisted development'],
    cta: 'Work With Me',
  },
]

export const skills = [
  { group: 'Mobile', items: ['React Native', 'Expo', 'Redux Toolkit', 'Appwrite'] },
  { group: 'Frontend', items: ['React js', 'Next js', 'Angular', 'TypeScript', 'Tailwind css', 'Redux'] },
  { group: 'Backend', items: ['Node.js', 'Express js', 'Supabase', 'PostgreSQL', 'REST APIs', 'PHP / Yii2'] },
  { group: 'AI', items: ['AI integrations', 'AI-assisted development'] },
]

export const principles = [
  { title: 'Users Come First.', text: 'A feature is only done when people understand it and enjoy using it.' },
  { title: 'Work Closely With Clients.', text: 'I share progress early and often, so what I build matches what you need.' },
  { title: 'Build To Scale.', text: 'I write clean, organized code that is easy to grow and easy to hand over.' },
  { title: 'Test Beyond The Happy Path.', text: 'I check errors, slow networks and edge cases before anything goes live.' },
  { title: 'Keep Learning.', text: 'I pick up new tools fast, from Angular to AI, and use what fits the project.' },
]
```

## Step 8a – Button

File: `src/components/Button.jsx`

```jsx
// A button that works as a link. variant="solid" adds the orange tape.
export default function Button({ href, children, variant = 'solid', className = '' }) {
  const base =
    'inline-flex h-12 items-center gap-2 rounded-2xl px-6 font-display text-base font-semibold transition hover:-translate-y-0.5 hover:-rotate-1'
  const styles =
    variant === 'solid'
      ? 'tape bg-deep text-peach'
      : 'border-2 border-deep text-ink hover:bg-white'
  const external = href?.startsWith('http')

  return (
    <a
      href={href || '#contact'}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  )
}
```

## Step 8b – Section title

File: `src/components/SectionTitle.jsx`

```jsx
// Reusable heading used at the top of every section.
export default function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className="mb-12 grid gap-7 md:mb-16">
      <h2
        className={`max-w-[14em] font-display text-3xl font-bold leading-tight md:text-5xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        <span className="stroke">{title}</span>
      </h2>
      {subtitle && (
        <p className={`max-w-md text-base font-medium md:text-lg ${light ? 'text-peach' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
```

## Step 8c – Navbar

File: `src/components/Navbar.jsx`

```jsx
import { useState } from 'react'
import { navLinks, profile } from '../data'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="-rotate-2 rounded-[48%_52%_45%_55%/60%_50%_55%_45%] bg-deep px-5 py-3 font-display text-sm font-semibold text-peach"
        >
          {profile.name}
        </a>

        {/* Desktop links */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 font-bold text-deep">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-teal">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="#contact">Hire Me</Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className="block h-[3px] w-8 rounded bg-deep" />
          <span className="block h-[3px] w-5 rounded bg-deep" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-deep md:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-5 top-5 text-4xl text-peach"
          >
            ×
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl font-bold text-peach"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
```

## Step 8d – Hero

File: `src/components/Hero.jsx`

```jsx
import { profile } from '../data'
import Button from './Button'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-[26rem_1fr]">
        {/* Polaroid photo */}
        <figure className="relative order-2 mx-auto w-full max-w-sm -rotate-2 rounded-lg bg-white px-[5.5%] pb-[14%] pt-[5%] shadow-[0_18px_40px_-20px_rgba(20,33,61,0.5)] lg:order-1">
          <span className="absolute -top-4 left-1/2 h-9 w-1/3 -translate-x-1/2 rotate-3 rounded-sm bg-tangerine/70" />
          <div className="grid aspect-[438/530] place-items-center overflow-hidden rounded-sm bg-card">
            {profile.photo ? (
              <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
            ) : (
              <span className="font-display text-7xl font-extrabold text-deep">BB</span>
            )}
          </div>
          <figcaption className="absolute inset-x-0 bottom-[3%] text-center font-hand text-2xl text-ink">
            {profile.location}
          </figcaption>
        </figure>

        {/* Text */}
        <div className="order-1 space-y-8 lg:order-2">
          <p className="font-hand text-2xl font-bold text-teal">Hi, I'm {profile.name} 👋</p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.15] text-ink md:text-6xl">
            {profile.headline}
          </h1>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-muted md:text-lg">{profile.overview}</p>

          <div className="flex flex-wrap items-center gap-6">
            <Button href="#projects">View My Work</Button>
            <Button href={profile.resume} variant="outline">
              Download Resume ↓
            </Button>
          </div>

          <p className="flex items-center gap-2 font-hand text-2xl text-teal">
            <svg width="38" height="30" viewBox="0 0 38 30" aria-hidden="true">
              <path d="M3 4 C 10 20, 22 24, 34 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M27 16 L34 22 L26 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {profile.role} · open to new projects
          </p>
        </div>
      </div>
    </section>
  )
}
```

## Step 8e – Work experience

File: `src/components/Experience.jsx`

```jsx
import { experience } from '../data'
import SectionTitle from './SectionTitle'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="rounded-[28px_34px_26px_32px] bg-deep px-6 py-16 md:px-14 md:py-20">
        <SectionTitle title="Work Experience." subtitle="Where I Have Built And Shipped Real Products" light />

        <ol className="grid gap-6 md:grid-cols-2">
          {experience.map((job) => (
            <li key={job.company} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-2xl font-bold text-white">{job.company}</h3>
                {job.current && (
                  <span className="rounded-full bg-tangerine px-3 py-1 text-xs font-bold uppercase tracking-wider text-deep">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 font-hand text-2xl text-peach">{job.role}</p>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-white/80">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-tangerine" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
```

## Step 8f – Projects

File: `src/components/Projects.jsx`

```jsx
import { projects } from '../data'
import Button from './Button'
import SectionTitle from './SectionTitle'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <SectionTitle
        title="Featured Projects"
        subtitle="Real Products I Have Built, With The Tech Behind Each One."
      />

      <ul className="grid gap-14 md:gap-20">
        {projects.map((project, index) => (
          <li
            key={project.name}
            className="grid items-center gap-10 rounded-3xl bg-card px-6 py-9 shadow-[0_22px_44px_-26px_rgba(20,33,61,0.5)] md:px-14 md:py-14 lg:grid-cols-2"
          >
            {/* Text */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <p className="relative isolate w-fit font-display text-xl font-bold text-teal">
                <span className="absolute -left-2 top-1/2 -z-10 h-4 w-11 -translate-y-1/2 -rotate-3 rounded-full bg-tangerine/70" />
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-5xl font-bold leading-none text-ink md:text-6xl">
                <span className="stroke">{project.name}</span>
              </h3>
              <p className="pt-2 font-display text-lg font-semibold text-ink md:text-xl">{project.type}</p>
              <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">{project.description}</p>

              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-teal">My Role</p>
                <p className="text-lg font-bold text-deep">{project.role}</p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-lg bg-white px-3 py-1 text-sm font-medium text-deep shadow-[0_2px_0_#C9D3E6]">
                    #{tag}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-5 pt-2">
                <Button href={project.live}>Live Demo</Button>
                <Button href={project.github} variant="outline">
                  View Code
                </Button>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <span className="absolute -top-4 left-8 z-10 h-7 w-20 -rotate-6 rounded-sm bg-tangerine/70" />
              <span className="absolute -top-4 right-8 z-10 h-7 w-20 rotate-6 rounded-sm bg-teal/40" />
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                loading="lazy"
                className={`w-full rounded-2xl border-8 border-white bg-white shadow-xl ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
```

## Step 8g – Services

File: `src/components/Services.jsx`

```jsx
import { services } from '../data'
import Button from './Button'
import SectionTitle from './SectionTitle'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
      <SectionTitle title="Choose How We Can Work" subtitle="Three Ways To Bring Me Into Your Product" />

      <ul className="grid items-start gap-8 lg:grid-cols-3">
        {services.map((service, index) => (
          <li
            key={service.title}
            className={`relative flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-[0_18px_40px_-26px_rgba(20,33,61,0.5)] ${
              index === 0 ? 'lg:-rotate-1' : index === 2 ? 'lg:rotate-1' : ''
            }`}
          >
            {service.tag && (
              <span className="absolute -top-4 right-5 rotate-3 rounded-lg border-2 border-dashed border-teal bg-peach px-3 font-hand text-xl text-deep">
                {service.tag}
              </span>
            )}
            <span className="font-hand text-2xl text-teal">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-3xl font-bold text-ink">{service.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{service.for}</p>
            <hr className="border-t-2 border-dashed border-rule" />
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-tangerine text-xs font-bold text-deep">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="#contact" className="mt-3 self-start">
              {service.cta}
            </Button>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid justify-items-center gap-4 text-center">
        <h3 className="font-display text-2xl font-bold md:text-3xl">Not Sure Which Fits Your Project?</h3>
        <p className="max-w-lg text-muted">Tell Me What You Are Building, And I Will Recommend The Best Way To Move Forward.</p>
        <Button href="#contact" className="mt-3">
          Let's Talk
        </Button>
      </div>
    </section>
  )
}
```

## Step 8h – Skills

File: `src/components/Skills.jsx`

```jsx
import { skills } from '../data'
import SectionTitle from './SectionTitle'

export default function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
      <SectionTitle title="What I Build With" subtitle="The Tools I Use Most To Turn Ideas Into Real Products" />

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <li key={skill.group} className="grid content-start gap-5 rounded-2xl border border-rule bg-card p-7">
            <span className="font-display text-lg font-bold text-teal">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-2xl font-bold">{skill.group}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="rounded-lg bg-white px-3 py-1 text-sm font-medium shadow-[0_2px_0_#C9D3E6]">
                  {item}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
```

## Step 8i – How I work

File: `src/components/Principles.jsx`

```jsx
import { principles } from '../data'
import SectionTitle from './SectionTitle'

export default function Principles() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
      <SectionTitle title="How I Work" subtitle="A Few Principles I Bring Into Every Project" />

      <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {principles.map((item, index) => (
          <li
            key={item.title}
            className={`grid content-start gap-3 rounded-2xl bg-white p-7 shadow-[0_14px_30px_-22px_rgba(20,33,61,0.5)] lg:col-span-2 ${
              index === 3 ? 'lg:col-start-2' : ''
            }`}
          >
            <span className="font-display text-lg font-bold text-teal">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-xl font-bold">{item.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
```

## Step 8j – Contact

File: `src/components/Contact.jsx`

```jsx
import { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid justify-items-center gap-6 rounded-[28px_34px_26px_32px] bg-deep px-6 py-16 text-center md:px-14 md:py-24">
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
          <span className="stroke">Building Something? Let's Talk.</span>
        </h2>
        <p className="max-w-xl pt-4 text-peach">
          Whether You Need A Mobile App, A Web App, Or An Extra Developer On Your Team, Tell Me What You Are Working On.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href={`mailto:${profile.email}`} className="rounded-xl border-2 border-dashed border-white/30 px-5 py-3 text-lg text-white">
            {profile.email}
          </a>
          <a href={`tel:${profile.phoneLink}`} className="rounded-xl border-2 border-dashed border-white/30 px-5 py-3 text-lg text-white">
            {profile.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={copyEmail}
          className="tape mt-2 h-12 rounded-2xl bg-tangerine px-6 font-display font-semibold text-deep"
        >
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>
    </section>
  )
}
```

## Step 8k – Footer

File: `src/components/Footer.jsx`

```jsx
import { navLinks, profile } from '../data'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl font-bold">{profile.name}</h2>
          <p className="text-muted">{profile.role}</p>
        </div>
        <ul className="flex flex-wrap gap-6 font-bold text-deep">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-teal">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-5 text-teal">
          {profile.socials
            .filter((s) => s.href)
            .map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          <li>
            <a href={`mailto:${profile.email}`} className="font-bold hover:underline">
              Email
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-8 border-t-2 border-dashed border-rule pt-6 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
      </p>
    </footer>
  )
}
```

## Step 9 – Put all sections together

File: `src/App.jsx`

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Principles from './components/Principles'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
```

## Step 10 – Run it

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Step 11 – Fill in your details

In `src/data.js`:

- `photo: '/me.jpg'` once your photo is in `public/`
- `resume: '/Baudoin_Bolingo_CV.pdf'` once your CV is in `public/`
- your GitHub and LinkedIn links in `socials`
- `github` and `live` links for each project

## Step 12 – Put it online

Push the project to GitHub, then import the repo on vercel.com. Vercel detects Vite automatically: build command `npm run build`, output folder `dist`.
