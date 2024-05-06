import useTimes from "@/lib/Hooks/useTimes.js"

export default function TimeSelect({ doctorId, date, onTimeChange, time }) {
  const { times } = useTimes(doctorId, date)

  const handleTimeChange = (e) => {
    const timeId = e.target.value
    const dispoId = times.find((time) => time.timeslot === timeId).dispoId
    onTimeChange({ timeId, dispoId })
  }

  return (
    <div className="mb-6">
      <label
        htmlFor="time"
        className="block mb-2 text-sm font-medium text-gray-900"
      ></label>
      <select
        value={time.timeslot}
        onChange={handleTimeChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Heure</option>
        {times.length > 0 ? (
          times.map((time, index) => {
            const date = new Date(time.timeslot)
            const formattedDate = date.toLocaleString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              hour: "numeric",
              minute: "2-digit",
            })
            return (
              <option key={index} value={time.timeslot}>
                {formattedDate}
              </option>
            )
          })
        ) : (
          <option>Pas de créneau disponible cette semaine</option>
        )}
      </select>
    </div>
  )
}
