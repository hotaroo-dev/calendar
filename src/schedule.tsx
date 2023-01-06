import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { months } from './date'
import { calendarVariants } from './calendar'

interface Props {
  date: Date
}

const Schedule: React.FC<Props> = ({ date }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="schedule"
        key={date.getMonth()}
        variants={calendarVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ type: 'spring', stiffness: 50, duration: 0.2 }}
      >
        <p className="schedule-date">
          Schedule for {months[date.getMonth()]} {date.getDate()},{' '}
          {date.getFullYear()}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Schedule
