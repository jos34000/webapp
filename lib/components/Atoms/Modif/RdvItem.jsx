import React, { useState } from "react"

function RdvItem({ rdv, doctor, motif, timeslot, onCheck }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)
    onCheck(newCheckedState)
  }

  const date = new Date(timeslot)

  return (
    <div className="flex gap-3 justify-between py-3 max-md:flex-wrap max-md:max-w-full">
      <div>
        <h1 className="text-xl font-bold mb-2">Dr. {doctor}</h1>
        <p className="text-gray-600 mb-2">{date.toLocaleDateString()}</p>
        <p className="text-gray-600 mb-2">
          {date.toLocaleTimeString([], { hour: "2-digit" }).replace(":", "H")}
        </p>
        <p className="text-gray-600 mb-2">{motif}</p>
      </div>
      <input
        type="checkbox"
        className="accent-green-400"
        checked={isChecked}
        onChange={handleCheck}
      />
    </div>
  )
}
export default RdvItem
