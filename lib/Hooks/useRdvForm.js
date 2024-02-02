import React, { useState } from "react"

export default function useRdvForm() {
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
  }

  const handleTimeChange = (time) => {
    setTime(time)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = {
      specialite,
      doctor,
      date,
      time,
    }
    console.log(data)

    try {
      // Extract the dispoId from the time object
      const dispoId = time.dispoId
      // Send the form data to the API
      await sendFormDataToAPI(specialite, doctor, date, dispoId)
    } catch (error) {
      console.error("Error creating RDV:", error)
    }

    // Réinitialiser les champs du formulaire après la soumission
    setSpecialite(null)
    setDoctor("")
    setDate("")
    setTime("")
    return {
      specialite,
      doctor,
      date,
      time,
      handleSpecialiteChange,
      handleDoctorChange,
      handleDateChange,
      handleTimeChange,
      handleSubmit,
    }
  }
  async function sendFormDataToAPI(specialite, doctor, date, dispoId) {
    const response = await fetch("http://localhost:3000/api/createRdv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ specialite, doctor, date, dispoId }),
    })
    if (!response.ok) {
      throw new Error("Error creating RDV")
    }
  }
}
