import { motion } from 'framer-motion'

const mapImage = '/map/IMG_0140.png'

function EventMap() {
  return (
    <section className="flex h-full flex-col py-2 text-center" id="map">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.55 }}
        className="mb-6 text-4xl font-bold text-white sm:text-5xl"
      >
        Event Map
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex w-full flex-1 rounded-3xl border border-white/20 bg-white/5 p-3 shadow-[0_0_45px_rgba(59,130,246,0.16)] backdrop-blur-sm"
      >
        <img
          src={mapImage}
          alt="School event map placeholder"
          className="h-full min-h-[300px] w-full rounded-2xl object-cover"
        />
      </motion.div>
      <p className="mt-4 text-xl text-slate-300 sm:text-2xl">Navigate the fair with this map</p>
    </section>
  )
}

export default EventMap
