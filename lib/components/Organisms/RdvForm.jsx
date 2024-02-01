import { useState } from "react"
import SpecialiteSelect from "@/lib/components/Molecules/Forms/SpecialiteSelect"
import DoctorSelect from "@/lib/components/Molecules/Forms/DoctorSelect"
import DatePicker from "@/lib/components/Molecules/Forms/DatePicker.jsx"
import TimeSelect from "../Molecules/Forms/TimeSelect.jsx"
import { parse } from "date-fns"

export default function RdvForm() {
  const [specialite, setSpecialite] = useState(null)
  const [doctor, setDoctor] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const handleSpecialiteChange = (specialiteId) => {
    setSpecialite(specialiteId)
  }

  const handleDoctorChange = (doctorId) => {
    setDoctor(doctorId)
  }

  const handleDateChange = (date) => {
    setDate(date)
    console.log(date)
  }

  const handleTimeChange = (time) => {
    setTime(time)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // code to book appointment
  }

  /* console.log(parse("01/02/2024", "dd/MM/yyyy", new Date())) */

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center mb-10">
        Réservez un créneau
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <SpecialiteSelect
          onSpecialiteChange={handleSpecialiteChange}
          selectedSpecialite={specialite}
        />
        <DoctorSelect
          specialiteId={specialite}
          onDoctorChange={handleDoctorChange}
          doctor={doctor}
        />
        <DatePicker onDateChange={handleDateChange} date={date} />
        <TimeSelect
          doctorId={doctor}
          date={date}
          onTimeChange={handleTimeChange}
          time={time}
        />
      </form>
    </div>
  )
}
