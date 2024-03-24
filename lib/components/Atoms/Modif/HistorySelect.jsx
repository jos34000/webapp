import useHistory from "@/lib/Hooks/useHistory"

const HistorySelect = ({ onHistoryChange, history }) => {
  return (
    <div>
      <label htmlFor="antecedentMedical" className="max-md:max-w-full">
        Antécedent
      </label>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></select>
    </div>
  )
}

export default HistorySelect
