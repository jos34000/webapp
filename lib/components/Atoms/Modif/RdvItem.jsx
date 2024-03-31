import React, { useState } from "react"

function RdvItem({ rdv, doctor, motif, date, onCheck }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)
    onCheck(newCheckedState)
  }

  return (
    <div className="flex gap-3 justify-between py-3 max-md:flex-wrap max-md:max-w-full">
      <div>
        <h1 className="text-xl font-bold mb-2">{rdv}</h1>
        <p className="text-gray-600 mb-2">
          {new Date(date).toLocaleDateString()}
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
