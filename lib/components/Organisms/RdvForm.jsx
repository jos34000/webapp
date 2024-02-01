import { useState } from "react"
import SpecialiteSelect from "@/lib/components/Molecules/Forms/SpecialiteSelect"
import DoctorSelect from "@/lib/components/Molecules/Forms/DoctorSelect"
import DatePicker from "@/lib/components/Molecules/Forms/DatePicker.jsx"
import TimeSelect from "../Molecules/Forms/TimeSelect.jsx"

export default function RdvForm() {
  const [selectedSpecialite, setSelectedSpecialite] = useState(null)
  const [doctor, setDoctor] = useState("")
  const [time, setTime] = useState("")

  const handleSpecialiteChange = (specialiteId) => {
    setSelectedSpecialite(specialiteId)
  }

  const handleDoctorChange = (doctorId) => {
    setDoctor(doctorId)
  }

  const handleTimeChange = (time) => {
    setTime(time)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // code to book appointment
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center mb-10">
        Réservez un créneau
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <SpecialiteSelect
          onSpecialiteChange={handleSpecialiteChange}
          selectedSpecialite={selectedSpecialite}
        />
        <DoctorSelect
          specialiteId={selectedSpecialite}
          onDoctorChange={handleDoctorChange}
          doctor={doctor}
        />
        <DatePicker />
        <TimeSelect
          doctorId={doctor}
          onTimeChange={handleTimeChange}
          time={time}
        />
      </form>
    </div>
  )
}
