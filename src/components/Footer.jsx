import { navLinks, profile } from "../data";

// Simple outline icons, colored with the text color
const icons = {
  instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V17" strokeLinecap="round" />
      <circle cx="8" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <path
        d="M12 17v-6.5M12 13.2c0-1.6 1-2.7 2.4-2.7 1.4 0 2.1 1 2.1 2.6V17"
        strokeLinecap="round"
      />
    </svg>
  ),
};

// "Instagram", "instagram" or " INSTAGRAM " all find the same icon
const getIcon = (label) => icons[label.trim().toLowerCase()];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="flex flex-wrap items-start justify-between gap-10">
        {/* Name */}
        <div>
          <h2 className="font-display text-2xl font-bold">{profile.name}</h2>
          <p className="text-muted">{profile.role}</p>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-6 font-bold text-deep">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-teal">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Keep in touch */}
        <div>
          <p className="font-hand text-xl font-bold text-teal">
            Let's Keep In Touch
          </p>
          <ul className="mt-3 flex gap-3">
            {profile.socials
              .filter((social) => getIcon(social.label))
              .map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-xl bg-deep text-peach transition hover:-translate-y-0.5 hover:-rotate-3 hover:bg-teal"
                  >
                    {getIcon(social.label)}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 border-t-2 border-dashed border-rule pt-6 text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
