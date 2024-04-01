import { useState } from "react"
import Cookies from "js-cookie"

export default function useLogin() {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [age, setAge] = useState(0)
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    const cookie = Cookies.get("token")

    if (cookie) {
      alert("Vous êtes déjà connecté")
      return
    }

    if (isLogin) {
      const data = { email, password }
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        const { token } = await response.json()
        Cookies.set("token", token, { expires: 1 / 24 })
        window.location.href = "/account"
      } else {
        alert("identifiants incorrects")
      }
    } else {
      const confirmEmail = e.target.confirmEmail.value
      const nom = e.target.nom.value
      const prenom = e.target.prenom.value
      const age = e.target.age.value

      const data = {
        email,
        password,
        prenom,
        nom,
        age,
      }

      if (!email || !password || !nom || !prenom || !age) {
        alert("Veuillez remplir tous les champs")
        return
      }

      if (email !== confirmEmail) {
        alert("Les emails ne correspondent pas")
        return
      }

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      if (response.ok) {
        window.location.href = "/login"
      }
    }
  }

  return {
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    password,
    setPassword,
    nom,
    setNom,
    prenom,
    setPrenom,
    age,
    setAge,
    isLogin,
    setIsLogin,
    handleSubmit,
  }
}
