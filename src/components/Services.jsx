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
