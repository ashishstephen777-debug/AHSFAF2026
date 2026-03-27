import { motion } from 'framer-motion'

const magazineImage =
  'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80'

function Magazine() {
  return (
    <section className="flex h-full items-center py-2" id="magazine">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid w-full items-center gap-7 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/80 via-slate-900/65 to-slate-800/60 p-6 shadow-[0_0_45px_rgba(239,68,68,0.15)] backdrop-blur-md md:grid-cols-[1fr_1.25fr]"
      >
        <img
          src={magazineImage}
          alt="Fine Arts Magazine placeholder cover"
          className="mx-auto h-[320px] w-full max-w-[250px] rounded-2xl border border-white/25 object-cover shadow-[0_0_35px_rgba(255,255,255,0.2)]"
        />
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Fine Arts Magazine</h2>
          <p className="mt-4 text-xl text-slate-200 sm:text-2xl">Available for purchase: $20</p>
          <button className="mt-6 inline-flex items-center rounded-full border border-blue-300/45 bg-gradient-to-r from-red-500/90 to-blue-500/90 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] sm:text-xl">
            Buy Now
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Magazine
