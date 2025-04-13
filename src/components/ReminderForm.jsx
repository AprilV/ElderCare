import React, { useState } from 'react'

function ReminderForm({ onAddReminder }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Friendly validation
    if (!date || !time || !message.trim()) {
      alert('Please enter a date, time, and reminder message.')
      return
    }

    onAddReminder({ date, time, message })
    setDate('')
    setTime('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <input
          type="text"
          placeholder="e.g. Take heart medication"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Set Reminder</button>
    </form>
  )
}

export default ReminderForm
