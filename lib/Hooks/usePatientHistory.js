import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default function usePatientHistory() {
  const [histories, setHistories] = useState([])
  const token = Cookies.get("token")

  useEffect(() => {
    if (token) {
      fetch(process.env.NEXT_PUBLIC_API_URL + "findPatientHistory", {
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
          console.error(error)
        })
    } else {
      console.log("pas de cookie")
    }
  }, [])

  const handleDeleteSelected = async (checkedItems, setCheckedItems) => {
    if (token) {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "deletePatientHistory",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ids: checkedItems }),
          }
        )
        if (!response.ok) {
          throw new Error("Erreur de réponse")
        }

        setCheckedItems([])
        window.location.reload()
      } catch (error) {
        console.error(error)
      }
    } else {
      console.log("pas de cookie")
    }
  }

  return { histories, handleDeleteSelected }
}
