import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default function useRdv() {
  const [rdv, setRdv] = useState([])
  const token = Cookies.get("token")

  useEffect(() => {
    if (token) {
      fetch(process.env.NEXT_PUBLIC_API_URL + "findRdv", {
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
          setRdv(data)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      console.log("pas de cookie")
    }
  }, [])

  const handleDeleteSelected = async (checkedItems, setCheckedItems) => {
    const rdvIds = checkedItems.map((item) => item.rdvId)
    const dispoIds = checkedItems.map((item) => item.dispoId)

    if (token) {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "deleteRdv",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ rdvIds: rdvIds, dispoIds: dispoIds }),
          }
        )
        if (!response.ok) {
          throw new Error("Erreur de réponse")
        }

        setCheckedItems([])
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("pas de cookie")
    }
  }

  return { rdv, handleDeleteSelected }
}
