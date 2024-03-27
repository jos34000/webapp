import React, { useState } from "react"
import Cookies from "js-cookie"

export default function useHistoryForm() {
  const [history, setHistory] = useState(null)
  const [comment, setComment] = useState("")
  const [date, setDate] = useState("")
  const token = Cookies.get("token")

  const handleHistoryChange = (historyId) => {
    setHistory(historyId)
  }

  const handleCommentChange = (comment) => {
    setComment(comment)
  }

  const handleDateChange = (date) => {
    setDate(date)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const historyId = history

    try {
      const response = await createHistory(token, historyId, date, comment)

      window.location.reload()
      if (response && response.ok) {
        return Promise.resolve()
      }
    } catch (error) {
      console.error("Error creating history:", error)
    }
  }

  return {
    history,
    comment,
    date,
    handleDateChange,
    handleCommentChange,
    handleHistoryChange,
    handleSubmit,
  }
}

async function createHistory(token, historyId, date, comment) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "createPatientHistory",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, historyId, date, comment }),
    }
  )
  if (response && response.ok) {
  } else {
    throw new Error("Error creating history")
  }
  return response
}
