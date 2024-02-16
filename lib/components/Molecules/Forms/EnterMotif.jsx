import useMotif from "@/lib/Hooks/useMotif"

export default function EnterMotif({ onMotifChange, motif }) {
  const handleMotifChange = (e) => {
    if (onMotifChange) {
      const motifText = e.target.value
      onMotifChange(motifText)
    }
  }
  return (
    <div className="mb-6">
      <label
        htmlFor="time"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Time
      </label>
      <input
        value={motif}
        onChange={handleMotifChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  )
}
