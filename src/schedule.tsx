import React from 'react'
import { useRecoilValue } from 'recoil'
import { AnimatePresence, motion } from 'framer-motion'
import { dateState, selectedState } from './atom'
import { calendarVariants } from './calendar'
import { months } from './date'

const Schedule: React.FC = () => {
  const date = useRecoilValue(dateState)
  const selected = useRecoilValue(selectedState)
  const lastSelected = selected[selected.length - 1] || date

  return (
    <AnimatePresence mode="wait" initial={false}>
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
          Schedule for {months[lastSelected.getMonth()]}{' '}
          {lastSelected.getDate()}, {lastSelected?.getFullYear()}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Schedule
