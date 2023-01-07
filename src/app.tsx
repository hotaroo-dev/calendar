import React from 'react'
import Calendar from './calendar'
import Schedule from './schedule'

const App: React.FC = () => {
  return (
    <div className="app">
      <Calendar />
      <Schedule />
    </div>
  )
}

export default App
