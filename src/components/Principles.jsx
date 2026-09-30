import { principles } from '../data'
import SectionTitle from './SectionTitle'

export default function Principles() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
      <SectionTitle
        title="How I Work"
        subtitle="What I Learned Building Real Products In Rwanda And Beyond"
      />

      <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {principles.map((item, index) => (
          <li
            key={item.title}
            className={`grid content-start gap-3 rounded-2xl bg-white p-7 shadow-[0_14px_30px_-22px_rgba(20,33,61,0.5)] lg:col-span-2 ${
              index === 3 ? "lg:col-start-2" : ""
            }`}
          >
            <span className="font-display text-lg font-bold text-teal">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-bold">{item.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
