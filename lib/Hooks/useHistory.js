import { useState, useEffect } from "react"

export default function useHistory(historyId) {
  const [histories, setHistories] = useState([])

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "findHistory")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur de réponse")
        }
        return response.json()
      })
      .then((data) => {
        setHistories(data)
        console.log(data)
      })
  }, [historyId])

  return { histories }
}
