import { motion } from 'framer-motion'
import { FaFilm, FaMicrophoneAlt, FaPauseCircle, FaTshirt, FaMusic } from 'react-icons/fa'

const scheduleItems = [
  { time: '6:10-6:20', event: 'Film Festival trailer premiere (at stage)', icon: FaFilm },
  { time: '6:25-6:53', event: 'Open Mic P1', icon: FaMicrophoneAlt },
  { time: '6:53-6:58', event: 'Intermission', icon: FaPauseCircle },
  { time: '6:58-7:30', event: 'Open Mic P2', icon: FaMicrophoneAlt },
  { time: '7:40-8:15', event: 'Fashion Show', icon: FaTshirt },
  { time: '8:25-8:45', event: 'Dance Expo', icon: FaMusic },
]

function Schedule() {
  return (
    <section className="flex h-full flex-col py-2" id="schedule">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55 }}
        className="mb-6 text-center text-5xl font-bold text-white sm:text-6xl"
      >
        Schedule
      </motion.h2>

      <div className="grid flex-1 gap-4 md:grid-cols-2 md:grid-rows-3">
        {scheduleItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.article
              key={`${item.time}-${item.event}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group h-full rounded-2xl border border-white/15 bg-slate-900/60 p-4 shadow-[0_0_30px_rgba(59,130,246,0.1)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.22)]"
            >
              <div className="flex h-full items-center gap-4">
                <div className="rounded-xl border border-blue-300/30 bg-gradient-to-br from-red-500/30 to-blue-500/30 p-3 text-xl text-white sm:text-2xl">
                  <Icon />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-xl font-semibold tracking-wide text-blue-200 sm:text-2xl">{item.time}</p>
                  <p className="mt-2 text-2xl leading-snug text-white/95 sm:text-3xl">{item.event}</p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Schedule
