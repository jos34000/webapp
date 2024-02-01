import { useEffect, useState } from "react"
import { useSpecialites } from "@/lib/Hooks/useSpecialites"
import { useDoctors } from "@/lib/Hooks/useDoctor"
import Select from "@/lib/components/Atoms/Select"

export default function RdvForm() {
  const {
    specialites,
    loading: specialitesLoading,
    error: specialitesError,
  } = useSpecialites()

  const {
    doctors,
    loading: doctorsLoading,
    error: doctorsError,
  } = useDoctors(selectedSpecialite)

  const [selectedSpecialite, setSelectedSpecialite] = useState(null)
  const [doctor, setDoctor] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center mb-10">
        Réservez un créneau
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <Select
          label="Spécialité"
          value={selectedSpecialite}
          onChange={setSelectedSpecialite}
          options={specialites.map((specialite, index) => ({
            value: specialite.specialiteId,
            label: specialite.name,
          }))}
        />
        <Select
          label="Docteur"
          value={doctor}
          onChange={setDoctor}
          options={doctors.map((doctor, index) => ({
            value: doctor.doctorId,
            label: `Dr. ${doctor.lastname}`,
          }))}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        <Select
          label="Heure"
          value={time}
          onChange={setTime}
          options={[
            { value: "9:00", label: "9:00" },
            { value: "9:30", label: "9:30" },
            { value: "10:00", label: "10:00" },
            // add more time slots as needed
          ]}
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Réserver
        </button>
      </form>
    </div>
  )
}
