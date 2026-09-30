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
