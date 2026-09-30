import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { navLinks, profile } from "../data";

// Put your real links here
const footerSocials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/baudoin_10/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baudoin-bolingo-b19229221",
    icon: FaLinkedin,
  },
];

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
            {footerSocials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl bg-deep text-peach transition hover:-translate-y-0.5 hover:-rotate-3 hover:bg-teal"
                >
                  <Icon className="h-5 w-5" />
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
