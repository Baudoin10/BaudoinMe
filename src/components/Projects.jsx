import { projects } from "../data";
import Button from "./Button";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28"
    >
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
            <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <p className="relative isolate w-fit font-display text-xl font-bold text-teal">
                <span className="absolute -left-2 top-1/2 -z-10 h-4 w-11 -translate-y-1/2 -rotate-3 rounded-full bg-tangerine/70" />
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-5xl font-bold leading-none text-ink md:text-6xl">
                <span className="stroke">{project.name}</span>
              </h3>
              <p className="pt-2 font-display text-lg font-semibold text-ink md:text-xl">
                {project.type}
              </p>
              <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
                {project.description}
              </p>

              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-teal">
                  My Role
                </p>
                <p className="text-lg font-bold text-deep">{project.role}</p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg bg-white px-3 py-1 text-sm font-medium text-deep shadow-[0_2px_0_#C9D3E6]"
                  >
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
            <div
              className={`relative ${project.mobileImage ? "pb-10 pr-6 md:pr-10" : ""}`}
            >
              <span className="absolute -top-4 left-8 z-10 h-7 w-20 -rotate-6 rounded-sm bg-tangerine/70" />
              <span className="absolute -top-4 right-8 z-10 h-7 w-20 rotate-6 rounded-sm bg-teal/40" />
              <img
                src={project.image}
                alt={`${project.name} web screenshot`}
                loading="lazy"
                className={`w-full rounded-2xl border-8 border-white bg-white shadow-xl ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              />

              {/* Phone screenshot, only shown if the project has mobileImage */}
              {project.mobileImage && (
                <div className="absolute bottom-0 right-0 z-20 w-[32%] min-w-[110px] max-w-[180px] rotate-3 rounded-[26px] bg-ink p-1.5 shadow-2xl">
                  <span className="absolute left-1/2 top-2.5 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-ink" />
                  <img
                    src={project.mobileImage}
                    alt={`${project.name} mobile app screenshot`}
                    loading="lazy"
                    className="aspect-[9/19] w-full rounded-[20px] bg-white object-cover object-top"
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
