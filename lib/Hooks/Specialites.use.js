import { useState, useEffect } from "react"

const useSpecialites = () => {
  const [specialites, setSpecialites] = useState([])
  const [specialitesValue, setSpecialitesValue] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/specialites")
      const data = await response.json()
      setSpecialites(data)
    }

    fetchData()
  }, [])

  return { specialites, specialitesValue, setSpecialitesValue }
}

export default useSpecialites
