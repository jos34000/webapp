import React from "react"
import { useState } from "react"

export default function DatePicker({ date, onDateChange }) {
  const [day, setDay] = useState("")
  const handleDateChange = (e) => {
    const date = e.target.value
    onDateChange(date)
  }

  return (
    <div className="mb-6">
      <label
        htmlFor="date"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Date
      </label>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  )
}