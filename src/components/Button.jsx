// A button that works as a link. variant="solid" adds the orange tape.
export default function Button({ href, children, variant = 'solid', className = '' }) {
  const base =
    'inline-flex h-12 items-center gap-2 rounded-2xl px-6 font-display text-base font-semibold transition hover:-translate-y-0.5 hover:-rotate-1'
  const styles =
    variant === 'solid'
      ? 'tape bg-deep text-peach'
      : 'border-2 border-deep text-ink hover:bg-white'
  const external = href?.startsWith('http')

  return (
    <a
      href={href || '#contact'}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  )
}
