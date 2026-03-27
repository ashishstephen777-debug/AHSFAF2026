import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const magazineImages = [
  { src: '/magazine/slide1.png', alt: 'Magazine Cover - Issue 03' },
  { src: '/magazine/slide2.png', alt: 'Editorial Magazine - Group Photo' },
  { src: '/magazine/slide3.png', alt: 'Editorial Magazine - Hyde St' },
  { src: '/magazine/slide4.png', alt: 'Editorial Magazine - Collage' },
  { src: '/magazine/slide5.png', alt: 'Editorial Magazine - Beach' },
  { src: '/magazine/slide6.png', alt: 'Editorial Magazine - Nature' },
]

function Magazine() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c === 0 ? magazineImages.length - 1 : c - 1))
  }

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c === magazineImages.length - 1 ? 0 : c + 1))
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section className="flex h-full items-center py-2" id="magazine">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid w-full items-center gap-7 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/80 via-slate-900/65 to-slate-800/60 p-6 shadow-[0_0_45px_rgba(239,68,68,0.15)] backdrop-blur-md md:grid-cols-[1fr_1.25fr]"
      >
        {/* Slideshow */}
        <div className="relative mx-auto w-full max-w-[400px]">
          <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-white/25 shadow-[0_0_35px_rgba(255,255,255,0.2)]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={current}
                src={magazineImages[current].src}
                alt={magazineImages[current].alt}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-black/60 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-all duration-200 hover:bg-black/60 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="mt-3 flex justify-center gap-2">
            {magazineImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 bg-gradient-to-r from-red-400 to-blue-400 shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Fine Arts Magazine</h2>
          <p className="mt-4 text-xl text-slate-200 sm:text-2xl">Available for purchase: $20 NEAR the SAC</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Magazine
