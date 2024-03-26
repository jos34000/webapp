import React, { useState } from "react"
import Cookies from "js-cookie"

export default function useRdvForm() {
  const [specialite, setSpecialite] = useState(null)
  const [doctor, setDoctor] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [motif, setMotif] = useState("")
  const token = Cookies.get("token")

  const handleSpecialiteChange = (specialiteId) => {
    setSpecialite(specialiteId)
  }

  const handleDoctorChange = (doctorId) => {
    setDoctor(doctorId)
  }

  const handleDateChange = (date) => {
    setDate(date)
  }

  const handleTimeChange = (time) => {
    setTime(time)
  }

  const handleMotifChange = (motif) => {
    setMotif(motif)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const dispoId = time.dispoId
      await sendFormDataToAPI(specialite, doctor, date, dispoId, token)
    } catch (error) {
      console.error("Error creating RDV:", error)
    }

    setSpecialite(null)
    setDoctor("")
    setDate("")
    setTime("")
    setMotif("")
  }

  return {
    specialite,
    doctor,
    date,
    time,
    motif,
    handleSpecialiteChange,
    handleDoctorChange,
    handleDateChange,
    handleTimeChange,
    handleMotifChange,
    handleSubmit,
  }
}

async function sendFormDataToAPI(specialite, doctor, date, dispoId, token) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "createRdv", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ specialite, doctor, date, dispoId, token }),
  })

  if (!response.ok) {
    throw new Error("Error creating RDV")
  }
}
