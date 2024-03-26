import React, { useState } from "react"
import Cookies from "js-cookie"

export default function useHistoryForm() {
  const [history, setHistory] = useState(null)
  const [comment, setComment] = useState("")
  const [date, setDate] = useState("")
  const token = Cookies.get("token")

  const handleHistoryChange = (historyId) => {
    setHistory(historyId)
    console.log(history)
  }

  const handleCommentChange = (comment) => {
    setComment(comment)
  }

  const handleDateChange = (date) => {
    setDate(date)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const historyId = history.historyId
    console.log(historyId)

    try {
      await sendFormDataToAPI(token, historyId, date, comment)
    } catch (error) {
      console.error("Error creating history:", error)
    }

    setHistory(null)
    setComment("")
    setDate(null)
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

async function sendFormDataToAPI(token, historyId, date, comment) {
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
  if (!response.ok) {
    throw new Error("Error creating history")
  }
}
