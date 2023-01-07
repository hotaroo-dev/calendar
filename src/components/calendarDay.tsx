import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { dateState, selectedState } from '../atom'

const offset = 7

const CalenderDay: React.FC = () => {
  const date = useRecoilValue(dateState)
  const [selected, setSelected] = useRecoilState(selectedState)
  const cells = (() => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
    const weekDayOfFristDay = firstDayOfMonth.getDay()

    return [...Array(42)].map((_, i) => {
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
  })()

  const toggleActive = (e: React.MouseEvent, date: Date) => {
    const toggle = e.currentTarget.classList.contains('active')
    setSelected(selected =>
      !toggle
        ? [...selected, date]
        : selected.filter(current => current.getDate() !== date.getDate())
    )
  }

  return (
    <div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="row">
          {cells.slice(offset * i, offset * i + offset).map((cell, id) => (
            <span
              className={`cell${!cell.currentMonth ? ' not-current' : ''}${
                selected.find(
                  s =>
                    s.getDate() === cell.date.getDate() &&
                    s.getMonth() === cell.date.getMonth()
                )
                  ? ' active'
                  : ''
              }`}
              key={id}
              onClick={e => {
                toggleActive(e, cell.date)
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
