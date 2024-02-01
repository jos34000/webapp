import useTimes from "@/lib/Hooks/useTimes.js"

export default function TimeSelect({ doctorId, onTimeChange, time }) {
  const { times, loading, error } = useTimes(doctorId)

  const handleTimeChange = (e) => {
    const timeId = e.target.value
    onTimeChange(timeId)
  }

  return (
    <div className="mb-6">
      <label
        htmlFor="time"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Time
      </label>
      <select
        value={time}
        onChange={handleTimeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Heure</option>
        {times.map((time, index) => (
          <option key={index} value={time.timeslot}>
            {time.timeslot}
          </option>
        ))}
      </select>
      {error && <p>{error.message}</p>}
    </div>
  )
}
