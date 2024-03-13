import React, { useState } from "react"
const PasswordInput = ({ value, onChange, name, label }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col flex-1">
      <label className="font-medium text-white">Mot de passe</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Entrez votre mot de passe"
          className="justify-center py-3 px-4 mt-2 rounded-lg bg-zinc-800 text-stone-300 w-full"
          aria-label={label}
          value={value}
          onChange={onChange}
          name={name}
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
export default PasswordInput
