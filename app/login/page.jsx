"use client"
import React, { useState } from "react"
import Header from "@/lib/components/Organisms/Header.jsx"
import Footer from "@/lib/components/Organisms/Footer.jsx"

const SectionTitle = ({ isLoginForm }) => (
  <div className="flex gap-4">
    <h2 className="flex-auto text-white text-4xl font-extrabold pb-10">
      {isLoginForm ? "Connexion" : "S'inscrire"}
    </h2>
  </div>
)

const TextInput = ({ label, type = "text", placeholder, value, onChange }) => (
  <div className="flex flex-col flex-1">
    <label className="font-medium text-white">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="justify-center py-3 px-4 mt-2 rounded-lg bg-zinc-800 text-stone-300"
      aria-label={label}
      value={value}
      onChange={onChange}
    />
  </div>
)

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col flex-1">
      <label className="font-medium text-white">Mot de passe</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Entrez votre mot de passe"
          className="justify-center py-3 px-4 mt-2 rounded-lg bg-zinc-800 text-stone-300 w-full"
          aria-label="Mot de passe"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 flex items-center text-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {showPassword ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-.338.028-.672.082-.998M15 9l.01.001M9 15l.01.001M7.757 4.243l.01.001M12 5l.01.001M3 3l18 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  )
}

const FormButton = ({ isLoginForm }) => (
  <button
    type="submit"
    className="flex justify-center items-center px-16 py-3 mt-6 max-w-full text-base font-bold tracking-wide leading-6 whitespace-nowrap bg-green-400 rounded-xl text-neutral-900 w-[480px] max-md:px-5"
  >
    {isLoginForm ? "Se connecter" : "S'inscrire"}
  </button>
)

const ToggleSwitch = ({ isOn, toggle }) => (
  <div className="flex justify-center mt-4">
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={toggle}
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            isOn ? "transform translate-x-6" : ""
          }`}
        ></div>
      </div>
      <span className={`pl-3 ${isOn ? "text-green-500" : "text-gray-300"}`}>
        {isOn ? "Mode Inscription" : "Mode Connexion"}
      </span>
    </label>
  </div>
)

const HealthcareApp = () => {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validation logic here
  }

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-neutral-900 min-h-screen">
        <SectionTitle isLoginForm={isLogin} />
        <form
          className="flex flex-col gap-4 mt-3 max-w-full text-center"
          onSubmit={handleSubmit}
        >
          <TextInput
            label="Adresse e-mail"
            type="email"
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
      <Footer />
    </>
  )
}

export default HealthcareApp
