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
