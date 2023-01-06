import React from 'react'

interface Props {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
}

const offset = 7

const CalenderDay: React.FC<Props> = ({ date, setDate }) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  const weekDayOfFristDay = firstDayOfMonth.getDay()

  const cells = [...Array(42)].map((_, i) => {
    firstDayOfMonth.setDate(
      i === 0
        ? firstDayOfMonth.getDate() -
            (weekDayOfFristDay ? weekDayOfFristDay : 7)
        : firstDayOfMonth.getDate() + 1
    )

    return {
      date: new Date(firstDayOfMonth),
      currentMonth: firstDayOfMonth.getMonth() === date.getMonth()
    }
  })

  const toggleActive = (e: React.MouseEvent) => {
    const toggle =
      e.currentTarget.getAttribute('data-active') === 'true' ? true : false
    e.currentTarget.setAttribute('data-active', String(!toggle))
  }

  return (
    <div className="calendar-cell">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="row">
          {cells.slice(offset * i, offset * i + offset).map((cell, id) => (
            <span
              className={`cell ${!cell.currentMonth ? 'not-current' : ''}`}
              key={id}
              onClick={e => {
                setDate(cell.date)
                toggleActive(e)
              }}
            >
              {cell.date.getDate()}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CalenderDay
