import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Calendar from './calendar'
import Schedule from './schedule'

const calendarVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const App: React.FC = () => {
  const [date, setDate] = useState(new Date(2023, 0, 1))
  const [selected, setSelected] = useState<Date[]>([])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="app"
        key={date.getMonth()}
        variants={calendarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ type: 'spring', stiffness: 50, duration: 0.2 }}
      >
        <Calendar
          date={date}
          setDate={setDate}
          selected={selected}
          setSelected={setSelected}
        />
        <Schedule date={date} selected={selected} />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
