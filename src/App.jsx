import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './components/Hero'
import Schedule from './components/Schedule'
import EventMap from './components/EventMap'
import Magazine from './components/Magazine'
import OpenMic from './components/OpenMic'
import Models from './components/Models'
import Footer from './components/Footer'

function App() {
  const tabs = useMemo(
    () => [
      { id: 'hero', label: 'Home', component: <Hero /> },
      { id: 'schedule', label: 'Schedule', component: <Schedule /> },
      { id: 'map', label: 'Event Map', component: <EventMap /> },
      { id: 'magazine', label: 'Magazine', component: <Magazine /> },
      { id: 'openmic', label: 'Open Mic', component: <OpenMic /> },
      { id: 'models', label: 'Runway Models', component: <Models /> },
    ],
    [],
  )
  const [activeTab, setActiveTab] = useState('hero')
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.component

  return (
    <div className="relative h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#050714] via-[#080c24] to-[#020208]" />
      <div className="pointer-events-none fixed inset-0 star-field" />
      <div className="pointer-events-none fixed inset-0 star-field-secondary" />
      <div className="pointer-events-none fixed inset-0 star-field-twinkle" />
      <div className="pointer-events-none planet planet-blue" />
      <div className="pointer-events-none planet planet-red" />
      <div className="pointer-events-none planet planet-moon" />
      <div className="pointer-events-none shooting-star shooting-star-one" />
      <div className="pointer-events-none shooting-star shooting-star-two" />

      <main className="relative z-10 mx-auto flex h-screen w-full max-w-none flex-col px-3 pb-3 pt-3 sm:px-5 lg:px-6">
        <nav className="sticky top-4 z-20 mb-8 rounded-2xl border border-white/15 bg-slate-900/65 p-2 backdrop-blur-md">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-300 sm:text-lg ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.32 }}
            className="flex-1 overflow-y-auto rounded-3xl border border-white/10 bg-slate-900/40 px-2 py-3 backdrop-blur-[1px] sm:px-4"
          >
            {activeContent}
          </motion.section>
        </AnimatePresence>

        <Footer />
      </main>
    </div>
  )
}

export default App
