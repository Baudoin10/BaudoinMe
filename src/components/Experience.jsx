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
