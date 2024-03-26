import React from "react"

export default function DatePicker({ date, onDateChange, label }) {
  const handleDateChange = (e) => {
    const date = e.target.value
    onDateChange(date)
  }

  return (
    <div className="mt-6">
      <label htmlFor="date" className="max-md:max-w-full">
        {label}
      </label>
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  )
}
