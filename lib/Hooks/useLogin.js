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
      console.log(email)
      console.log(password)
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
