import React from "react"
import TextInput from "@/lib/components/Molecules/Login/TextInput"
import PasswordInput from "@/lib/components/Molecules/Login/PasswordInput"
import SectionTitle from "@/lib/components/Molecules/Login/SectionTitle"
import FormButton from "@/lib/components/Molecules/Login/FormButton"
import ToggleSwitch from "@/lib/components/Molecules/Login/ToggleSwitch"
import useLogin from "@/lib/Hooks/useLogin"

export default function Login() {
  const {
    email,
    setEmail,
    confirmEmail,
    setConfirmEmail,
    password,
    setPassword,
    isLogin,
    setIsLogin,
    handleSubmit,
  } = useLogin()

  return (
    <div className="flex flex-col justify-center items-center bg-neutral-900 min-h-screen">
      <SectionTitle isLoginForm={isLogin} />
      <form
        className="flex flex-col gap-4 mt-3 max-w-full text-center"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Adresse e-mail"
          type="email"
          name="email"
          placeholder="Entrez votre adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isLogin && (
          <TextInput
            label="Confirmez l'email"
            type="email"
            placeholder="Confirmez votre adresse e-mail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        )}
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        {!isLogin && (
          <>
            <TextInput label="Nom" placeholder="Entrez votre nom" />
            <TextInput label="Prénom" placeholder="Entrez votre prénom" />
          </>
        )}
        <FormButton isLoginForm={isLogin} />
      </form>
      <ToggleSwitch isOn={!isLogin} toggle={() => setIsLogin(!isLogin)} />
    </div>
  )
}