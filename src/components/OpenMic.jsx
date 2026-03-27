import { motion } from 'framer-motion'
import { FaMicrophone } from 'react-icons/fa'

const performers = [
  { name: 'Preksha Shyamsukha', performance: 'My Contradictions' },
  { name: 'Sophia Leiner', performance: 'Lover Girl (Laufey)' },
  { name: 'Hridhaya Prabhakaran', performance: 'Coffee (Chappell Roan)' },
  { name: 'Pyae Pyae Phyo Kywel', performance: 'Tah Kal Loh Myar (Htoo Eain Thin)' },
  { name: 'Vivian Luu', performance: 'Smooth Operator (Sade)' },
  { name: 'Arunav Sharma, Shriya Raman', performance: 'Fine (Ordinary Days)' },
  {
    name: 'Wilson Lo, Celina Minoji, Rishi Ramachandran, Neel Ramachandran, Orna Paul',
    performance: "You're Still the One / I Want It That Way / Hotel California",
  },
  {
    name: 'Ava Moirene Patio, Neeti Shah',
    performance: 'Favorite Girl / Only Exception / Linger',
  },
  { name: 'Sanvi Sinha', performance: 'Promise (Laufey)' },
  { name: 'Nandini Verma, Arjun Gupta', performance: 'Perfect (Ed Sheeran)' },
  { name: 'Bayani Deluna', performance: 'Mr. Kupido (Rachel Alejandro)' },
  { name: 'Benita Arun', performance: 'Riptide (Vance Joy)' },
]

function OpenMic() {
  return (
    <section className="flex h-full flex-col py-2" id="open-mic">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55 }}
        className="mb-6 text-center text-5xl font-bold text-white sm:text-6xl"
      >
        Open Mic Performers
      </motion.h2>

      <div className="grid flex-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-4">
        {performers.map((item, index) => (
          <motion.article
            key={`${item.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className="group h-full rounded-2xl border border-white/15 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-300/35 hover:bg-slate-900/70"
          >
            <div className="flex h-full items-center gap-3">
              <span className="rounded-lg border border-white/20 bg-blue-500/20 p-2 text-lg text-blue-100 sm:text-xl">
                <FaMicrophone />
              </span>
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">{item.name}</h3>
                <p className="mt-2 text-xl leading-snug text-slate-300 sm:text-2xl">{item.performance}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default OpenMic
