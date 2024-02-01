import { useState, useEffect } from "react"

export default function useDoctors(specialiteId) {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (specialiteId) {
      setLoading(true)
      fetch(`http://localhost:3000/api/findDoctor?specialite=${specialiteId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur de réponse")
          }
          return response.json()
        })
        .then((data) => {
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
  }, [specialiteId])

  return { doctors, loading, error }
}
