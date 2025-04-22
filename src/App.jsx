import React, { useEffect, useState } from 'react'
import ReminderForm from './components/ReminderForm'
import HamburgerMenu from './components/HamburgerMenu'
import './App.css'

function App() {
  const [reminders, setReminders] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('reminders')
    if (saved) {
      setReminders(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders))
  }, [reminders])

  const addReminder = (reminder) => {
    setReminders((prev) => [...prev, reminder])
  }

  return (
    <div className="app-container">
      <HamburgerMenu />

      <h1>ElderCare – Medication Reminder</h1>
      <p className="instructions">
        Please enter the time you need to take your medication and a short message 
        (like "Take blood pressure pill"). The app will store your reminders below.
      </p>

      <ReminderForm onAddReminder={addReminder} />

      <h2>Scheduled Reminders</h2>
      {reminders.length === 0 ? (
        <p className="empty-state">No reminders yet.</p>
      ) : (
        <ul>
          {reminders.map((r, index) => (
            <li key={index}>
              <strong>{r.time}</strong> – {r.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
