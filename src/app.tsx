import React, { useState } from 'react'
import Calendar from './calendar'
import Schedule from './schedule'

const App: React.FC = () => {
  const [date, setDate] = useState(new Date(2023, 0, 1))
  return (
    <div className="app">
      <Calendar date={date} setDate={setDate} />
      <Schedule date={date} />
    </div>
  )
}

export default App
