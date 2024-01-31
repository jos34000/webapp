"use client"
import { useState, useEffect } from "react"

export default function RdvForm() {
  const [specialites, setSpecialites] = useState([])
  const [doctors, setDoctors] = useState([])
  const [selectedSpecialite, setSelectedSpecialite] = useState(null)
  const [doctor, setDoctor] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:3000/api/specialites")
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error("Erreur de réponse")
        }
        return response.json()
      })
      .then((data) => {
        setSpecialites(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (selectedSpecialite) {
      setLoading(true)
      fetch(
        `http://localhost:3000/api/findDoctor?specialite=${selectedSpecialite}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur de réponse")
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setDoctors(data)
          setLoading(false)
        })
        .catch((error) => {
          setError(error)
          setLoading(false)
        })
    } else {
      setDoctors([])
    }
  }, [selectedSpecialite])

  const handleSpecialiteChange = (e) => {
    setSelectedSpecialite(e.target.value)
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
        <div className="mb-6">
          <label
            htmlFor="specialty"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Spécialité
          </label>
          <select
            value={selectedSpecialite}
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
        </div>
        <div className="mb-6">
          <label
            htmlFor="doctor"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Docteur
          </label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Médecin</option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.doctorId}>
                Dr.{doctor.lastname}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Time
          </label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Heure</option>
            <option value="9:00">9:00</option>
            <option value="9:30">9:30</option>
            <option value="10:00">10:00</option>
            {/* add more time slots as needed */}
          </select>
        </div>
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
