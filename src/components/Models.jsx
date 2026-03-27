import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const models = [
  'Francis Garcia',
  'Fatima Mansoor',
  'Natalie Gonzalez',
  'Rafael Montes',
  'Ishanvi Putta',
  'Neev Tamboli',
  'Jonas Abualhaj',
  'Nikhil Kumar',
  'Boginya Kirilova',
  'Liona Li',
  'Abdul Muhaimin',
  'Lillie Elliott',
  'Kendall Chan',
  'Jiya Srinivas',
  'Mithra Sarada',
  'Sama Khoury',
  'Yara Matar',
  'Irene Aung',
  'Ananya Ramesh',
]

function Models() {
  return (
    <section className="flex h-full flex-col py-2" id="models">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.55 }}
        className="mb-3 text-center text-3xl font-bold text-white sm:text-4xl"
      >
        Runway Models
      </motion.h2>

      <div className="grid flex-1 gap-2 auto-rows-fr sm:grid-cols-2 xl:grid-cols-3">
        {models.map((model, index) => (
          <motion.div
            key={model}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.03, duration: 0.35 }}
            className="group flex h-full items-center rounded-xl border border-white/15 bg-gradient-to-r from-slate-900/70 to-slate-800/50 p-2 text-white transition-all duration-300 hover:border-blue-300/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.24)]"
          >
            <p className="flex items-center gap-2 text-lg leading-snug sm:text-xl">
              <FaStar className="text-sm text-yellow-300" />
              <span>{model}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Models
