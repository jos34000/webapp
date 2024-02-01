import { useState, useEffect } from "react"

export function useDoctors(selectedSpecialite) {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  return { doctors, loading, error }
}
