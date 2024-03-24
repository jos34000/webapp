import useHistory from "@/lib/Hooks/useHistory"

const HistorySelect = ({ onHistoryChange, history, historyId }) => {
  const { histories } = useHistory(historyId)
  const handleHistoryChange = (e) => {
    const historyId = e.target.value
    onHistoryChange(historyId)
  }
  return (
    <div>
      <label htmlFor="antecedentMedical" className="max-md:max-w-full">
        Antécedent
      </label>
      <select
        value={history || ""}
        onChange={handleHistoryChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Antécédent</option>
        {histories.map((history, index) => (
          <option key={index} value={history.historyId}>
            {history.antecedent}
          </option>
        ))}
      </select>
    </div>
  )
}

export default HistorySelect
