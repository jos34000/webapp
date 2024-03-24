import React, { useState } from "react"

export default function useHistoryForm() {
  const [history, setHistory] = useState(null)
  const [comment, setComment] = useState("")
  const [date, setDate] = useState("")

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
    let data = {
      history,
    }
    console.log(data)

    setHistory(null)
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

async function sendFormDataToAPI(specialite, doctor, date, dispoId) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "createRdv", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ specialite, doctor, date, dispoId }),
  })
  if (!response.ok) {
    throw new Error("Error creating RDV")
  }
}
