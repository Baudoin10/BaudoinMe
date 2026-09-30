import { profile } from "../data";
import Button from "./Button";

// Change this to any emoji you like
const HERO_EMOJI = "👨🏾‍💻";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[26rem_1fr]">
        {/* Polaroid */}
        <figure className="relative order-2 mx-auto w-full max-w-sm -rotate-2 rounded-lg bg-white px-[5.5%] pb-[14%] pt-[5%] shadow-[0_18px_40px_-20px_rgba(20,33,61,0.5)] lg:order-1">
          <span className="absolute -top-4 left-1/2 h-9 w-1/3 -translate-x-1/2 rotate-3 rounded-sm bg-tangerine/70" />
          <div className="grid aspect-[438/530] place-items-center overflow-hidden rounded-sm bg-card">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <span
                role="img"
                aria-label="Developer at a laptop"
                className="select-none text-[7rem] leading-none md:text-[9rem]"
              >
                {HERO_EMOJI}
              </span>
            )}
          </div>
          <figcaption className="absolute inset-x-0 bottom-[3%] text-center font-hand text-2xl text-ink">
            {profile.location}
          </figcaption>
        </figure>

        {/* Text */}
        <div className="order-1 space-y-8 lg:order-2">
          <p className="font-hand text-2xl font-bold text-teal">
            Hi, I'm {profile.name} 👋
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.15] text-ink md:text-6xl">
            {profile.headline}
          </h1>
          <p className="max-w-2xl text-base font-medium leading-relaxed text-muted md:text-lg">
            {profile.overview}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Button href="#projects">View My Work</Button>
            <Button href={profile.resume} variant="outline">
              Download Resume ↓
            </Button>
          </div>

          <p className="flex items-center gap-2 font-hand text-2xl text-teal">
            <svg width="38" height="30" viewBox="0 0 38 30" aria-hidden="true">
              <path
                d="M3 4 C 10 20, 22 24, 34 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M27 16 L34 22 L26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {profile.role} · open to new projects
          </p>
        </div>
      </div>
    </section>
  );
}
