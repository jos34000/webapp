import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default async () => {
  const [histories, setHistories] = useState([])
  const token = Cookies.get("token")

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "findSpecialites",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }
    )
  } catch (error) {
    console.log(error)
  }

  if (response.ok) {
    console.log(response)
  } else {
    console.log(response.message)
  }

  return histories
}
