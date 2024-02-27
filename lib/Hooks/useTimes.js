import { useState, useEffect } from "react"

export default function useTimes(doctorId, date) {
  const [times, setTimes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (doctorId && date) {
      setLoading(true)
      fetch(`findDispo?doctor=${doctorId}&date=${date}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur de réponse")
          }
          return response.json()
        })
        .then((data) => {
          setTimes(data)
          setLoading(false)
        })
        .catch((error) => {
          setError(error)
          setLoading(false)
        })
    } else {
      setTimes([])
    }
  }, [doctorId, date])

  return { times, loading, error }
}
