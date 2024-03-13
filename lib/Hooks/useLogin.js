import { useState } from "react"

export default function useLogin() {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = async (e) => {
    const email = e.target.email.value
    const password = e.target.password.value
    e.preventDefault()
    if (isLogin) {
      const data = { email, password }
      await fetch("http://localhost:3000/api/auth/signin")
    } else {
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
