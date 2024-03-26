import React, { useState } from "react"

function HistoryItem({ history, diagnosticDate, comment, onCheck }) {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex gap-3 justify-between py-3 max-md:flex-wrap max-md:max-w-full">
      <div>
        <h1 className="text-xl font-bold mb-2">{history}</h1>
        <p className="text-gray-600 mb-2">
          {new Date(diagnosticDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-2">{comment}</p>
      </div>
      <input
        type="checkbox"
        className="accent-green-400"
        checked={isChecked}
        onChange={handleCheck}
        onClick={onCheck}
      />
    </div>
  )
}
export default HistoryItem
