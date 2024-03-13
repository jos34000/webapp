import { useState } from "react"

export default function useLogin() {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    if (isLogin) {
      const data = { email, password }
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      })
    } else {
      const nom = e.target.nom.value
      const prenom = e.target.prenom.value
      const data = {
        email,
        password,
        prenom,
        nom,
      }
      await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    }
  }

  return {
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    password,
    setPassword,
    isLogin,
    setIsLogin,
    handleSubmit,
  }
}
