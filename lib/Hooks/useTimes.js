import { useState, useEffect } from "react"

export default function useTimes(doctorId) {
  const [times, setTimes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (doctorId) {
      setLoading(true)
      fetch(`http://localhost:3000/api/findDispo?doctor=${doctorId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur de réponse")
          }
          return response.json()
        })
        .then((data) => {
          setTimes(data)
          setLoading(false)
          console.log(data)
        })
        .catch((error) => {
          setError(error)
          setLoading(false)
        })
    } else {
      setTimes([])
    }
  }, [doctorId])

  return { times, loading, error }
}
