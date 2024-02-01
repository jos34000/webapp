import { useState } from "react"
import useSpecialites from "@/lib/Hooks/useSpecialites"

export default function SpecialiteSelect({
  onSpecialiteChange,
  selectedSpecialite,
}) {
  const { specialites, loading, error } = useSpecialites()

  const handleSpecialiteChange = (e) => {
    if (onSpecialiteChange) {
      const specialiteId = e.target.value
      onSpecialiteChange(specialiteId)
    }
  }

  return (
    <div className="mb-6">
      <label
        htmlFor="specialty"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Spécialité
      </label>
      <select
        value={selectedSpecialite || ""}
        onChange={handleSpecialiteChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Spécialité</option>
        {specialites.map((specialite, index) => (
          <option key={index} value={specialite.specialiteId}>
            {specialite.name}
          </option>
        ))}
      </select>
      {loading && <p>Chargement...</p>}
      {error && <p>{error.message}</p>}
    </div>
  )
}
