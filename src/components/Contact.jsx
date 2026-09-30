import { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid justify-items-center gap-6 rounded-[28px_34px_26px_32px] bg-deep px-6 py-16 text-center md:px-14 md:py-24">
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
          <span className="stroke">Building Something? Let's Talk.</span>
        </h2>
        <p className="max-w-xl pt-4 text-peach">
          Whether You Need A Mobile App, A Web App, Or An Extra Developer On Your Team, Tell Me What You Are Working On.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href={`mailto:${profile.email}`} className="rounded-xl border-2 border-dashed border-white/30 px-5 py-3 text-lg text-white">
            {profile.email}
          </a>
          <a href={`tel:${profile.phoneLink}`} className="rounded-xl border-2 border-dashed border-white/30 px-5 py-3 text-lg text-white">
            {profile.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={copyEmail}
          className="tape mt-2 h-12 rounded-2xl bg-tangerine px-6 font-display font-semibold text-deep"
        >
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </div>
    </section>
  )
}
