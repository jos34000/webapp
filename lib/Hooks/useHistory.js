import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default function useHistory() {
  const [histories, setHistories] = useState([])
  const token = Cookies.get("token")

  useEffect(() => {
    console.log(token, JSON.stringify({ token }))

    fetch(process.env.NEXT_PUBLIC_API_URL + "findHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur de réponse")
        }
        return response.json()
      })
      .then((data) => {
        setHistories(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return histories
}
