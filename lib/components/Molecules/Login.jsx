import React from "react"
import TextInput from "@/lib/components/Atoms/Login/TextInput"
import PasswordInput from "@/lib/components/Atoms/Login/PasswordInput"
import SectionTitle from "@/lib/components/Atoms/Login/SectionTitle"
import FormButton from "@/lib/components/Atoms/Login/FormButton"
import ToggleSwitch from "@/lib/components/Atoms/Login/ToggleSwitch"
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
          label="Email"
          type="email"
          name="email"
          placeholder="Entrez votre adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isLogin && (
          <TextInput
            label="ConfirmEmail"
            type="email"
            placeholder="Confirmez votre adresse e-mail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        )}
        <PasswordInput
          label="Password"
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
        <FormButton isLoginForm={isLogin} label="connexion" />
      </form>
      <ToggleSwitch
        isOn={!isLogin}
        toggle={() => setIsLogin(!isLogin)}
        label="Switch"
      />
    </div>
  )
}
