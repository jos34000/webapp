import { useState, useEffect } from "react"

export default function useSpecialites() {
  const [specialites, setSpecialites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch("http://192.168.1.3:3000/api/findSpecialites")
      .then((response) => {
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

  return { specialites, loading, error }
}
