import { useState } from "react"
import useDoctors from "@/lib/Hooks/useDoctor"

export default function DoctorSelect({ specialiteId, onDoctorChange, doctor }) {
  const { doctors, loading, error } = useDoctors(specialiteId)

  const handleDoctorChange = (e) => {
    const doctorId = e.target.value
    onDoctorChange(doctorId)
  }

  return (
    <div className="mb-6">
      <label
        htmlFor="doctor"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Docteur
      </label>
      <select
        value={doctor}
        onChange={handleDoctorChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Médecin</option>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.doctorId}>
            Dr. {doctor.lastname}
          </option>
        ))}
      </select>
      {error && <p>{error.message}</p>}
    </div>
  )
}
