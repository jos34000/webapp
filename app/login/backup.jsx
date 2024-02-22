"use client"
import React, { useState } from "react"
import Header from "@/lib/components/Organisms/Header.jsx"
import Footer from "@/lib/components/Organisms/Footer.jsx"

const SectionTitle = ({ children }) => (
  <div className="flex gap-4">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2841c9d8f32251e45f070f8b698da275bf21a560070d30886f7ab655b07bf812?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
      alt="Health Care Icon"
      className="my-auto w-4 aspect-square"
    />
    <h2 className="flex-auto text-white">{children}</h2>
  </div>
)

const TextInput = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col flex-1">
    <label className="font-medium text-white">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="justify-center py-3 px-4 mt-2 rounded-lg bg-zinc-800 text-stone-300"
      aria-label={label}
    />
  </div>
)

const FormButton = ({ isLoginForm }) => (
  <button
    type="submit"
    className="flex justify-center items-center px-16 py-3 mt-6 max-w-full text-base font-bold tracking-wide leading-6 whitespace-nowrap bg-green-400 rounded-xl text-neutral-900 w-[480px] max-md:px-5"
  >
    {isLoginForm ? "Se connecter" : "S'inscrire"}
  </button>
)

const ToggleSwitch = ({ isOn, toggle }) => (
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
)

const HealthcareApp = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => setIsLogin(!isLogin)

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center bg-neutral-900 min-h-screen">
        <header className="flex flex-col items-center px-5 pb-12 w-full max-w-screen-xl">
          <h1 className="py-4 pr-16 pl-4 mt-10 max-w-full text-3xl font-bold tracking-tighter text-white">
            Bienvenue sur HealthCare
          </h1>
          <form className="flex flex-col gap-4 mt-3 max-w-full text-center">
            <TextInput
              label="Adresse e-mail"
              type="email"
              placeholder="Entrez votre adresse e-mail"
            />
            <TextInput
              label="Mot de passe"
              type="password"
              placeholder="Entrez votre mot de passe"
            />
            {!isLogin && (
              <>
                <TextInput label="Nom" placeholder="Entrez votre nom" />
                <TextInput label="Prénom" placeholder="Entrez votre prénom" />
              </>
            )}
            <FormButton isLoginForm={isLogin} />
          </form>
          <div className="mt-4">
            <ToggleSwitch isOn={!isLogin} toggle={toggleForm} />
          </div>
        </header>
      </div>
      <Footer />
    </>
  )
}

export default HealthcareApp
