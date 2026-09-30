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
