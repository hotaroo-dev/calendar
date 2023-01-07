import React from 'react'
import Calendar from './components/calendar'
import Schedule from './components/schedule'

const App: React.FC = () => {
  return (
    <div className="app">
      <Calendar />
      <Schedule />
    </div>
  )
}

export default App
