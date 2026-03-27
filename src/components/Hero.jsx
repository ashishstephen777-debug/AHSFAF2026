import { motion } from 'framer-motion'
import heroImage from '../assets/eagles-logo.png'

function Hero() {
  return (
    <section className="relative flex min-h-full items-center py-4 text-center" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="mx-auto w-full rounded-3xl border border-white/20 bg-white/5 px-5 py-10 shadow-[0_0_70px_rgba(255,255,255,0.08)] backdrop-blur-md sm:px-8 sm:py-12"
      >
        <div className="relative mx-auto mb-8 w-fit">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/40 via-white/60 to-blue-500/40 blur-2xl" />
          <img
            src={heroImage}
            alt="American High School Eagles logo"
            className="relative mx-auto h-32 w-56 rounded-2xl border-2 border-white/60 object-cover shadow-[0_0_40px_rgba(255,255,255,0.35)] sm:h-40 sm:w-72"
          />
        </div>

        <p className="mb-4 text-sm uppercase tracking-[0.32em] text-blue-200/80 sm:text-base">Fremont, California</p>
        <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
          American High School
          <span className="mt-2 block bg-gradient-to-r from-red-300 via-white to-blue-300 bg-clip-text text-transparent">
            Fine Arts Fair
          </span>
        </h1>
        <p className="mt-6 text-xl text-slate-200 sm:text-2xl">March 27, 2026 • 6:00 PM - 9:00 PM</p>
      </motion.div>
    </section>
  )
}

export default Hero
