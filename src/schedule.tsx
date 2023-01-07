import React from 'react'
import { months } from './date'

interface Props {
  date: Date
  selected: Date[]
}

const Schedule: React.FC<Props> = ({ date, selected }) => {
  const lastSelected = selected[selected.length - 1] || date
  return (
    <div className="schedule">
      <p className="schedule-date">
        Schedule for {months[lastSelected.getMonth()]} {lastSelected.getDate()},{' '}
        {lastSelected?.getFullYear()}
      </p>
    </div>
  )
}

export default Schedule
