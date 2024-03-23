import { useState } from "react"
import Cookies from "js-cookie"

export default function useMdp() {
  const [oldMdp, setOldMdp] = useState("")
  const [newMdp, setNewMdp] = useState("")
  const [confirmMdp, setConfirmMdp] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const oldMdp = e.target.oldMdp.value
    const newMdp = e.target.newMdp.value
    const confirmMdp = e.target.confirmMdp.value
    const cookie = Cookies.get("token")
    const data = { oldMdp, newMdp, cookie }

    if (!cookie) {
      alert("non")
      return
    }

    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "updatePassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    if (response.ok) {
      window.location.href = "/account"
    }
  }

  return {
    oldMdp,
    setOldMdp,
    newMdp,
    setNewMdp,
    confirmMdp,
    setConfirmMdp,
    handleSubmit,
  }
}
