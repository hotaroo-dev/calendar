import React from 'react'
import CalenderDay from './calendarDay'
import { months, weekdays } from './date'

interface Props {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
  selected: Date[]
  setSelected: React.Dispatch<React.SetStateAction<Date[]>>
}

const Calendar: React.FC<Props> = ({
  date,
  setDate,
  selected,
  setSelected
}) => {
  const nextMonth = () => {
    date.setMonth(date.getMonth() + 1)
    setDate(new Date(date))
  }

  const prevMonth = () => {
    date.setMonth(date.getMonth() - 1)
    setDate(new Date(date))
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <span className="title">
          {months[date.getMonth()]} {date.getFullYear()}
        </span>
        <div className="buttons">
          <button onClick={prevMonth}>
            <Before />
          </button>
          <button onClick={nextMonth}>
            <Next />
          </button>
        </div>
      </div>
      <div className="calendar-days">
        {weekdays.map((day, i) => (
          <span className="day" key={i}>
            {day}
          </span>
        ))}
      </div>
      <CalenderDay date={date} selected={selected} setSelected={setSelected} />
    </div>
  )
}

const Next = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="currentColor"
  >
    <path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z" />
  </svg>
)

const Before = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="currentColor"
  >
    <path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
  </svg>
)

export default Calendar
