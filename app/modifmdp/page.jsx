"use client"
import React from "react"
import TextInput from "@/lib/components/Atoms/Login/TextInput"
import useMdp from "@/lib/Hooks/useMdp"

function ModifMdp() {
  const {
    oldMdp,
    setOldMdp,
    newMdp,
    setNewMdp,
    confirmMdp,
    setConfirmMdp,
    handleSubmit,
  } = useMdp()

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <section className="flex flex-col items-center px-20 pt-10 pb-20 w-full bg-neutral-900 max-md:px-5 flex-grow">
        <h1 className="justify-center items-start p-4 max-w-full text-3xl font-bold tracking-tighter w-[512px] max-md:pr-5">
          Changer mot de passe
        </h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Ancien mot de passe"
            type="password"
            placeholder="Mot de passe actuel"
            value={oldMdp}
            onChange={(e) => setOldMdp(e.target.value)}
            name="oldMdp"
          />
          <TextInput
            label="Nouveau mot de passe"
            type="password"
            placeholder="Nouveau mot de passe"
            value={newMdp}
            onChange={(e) => setNewMdp(e.target.value)}
            name="newMdp"
          />
          <TextInput
            label="Confirmation"
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmMdp}
            onChange={(e) => setConfirmMdp(e.target.value)}
            name="confirmMdp"
          />

          <button className="flex justify-center items-center px-5 py-3 mt-6 mb-40 max-w-full font-bold tracking-wide whitespace-nowrap bg-green-400 rounded-xl leading-[150%] text-neutral-900 w-[480px] max-md:mb-10">
            Save
          </button>
        </form>
      </section>
    </div>
  )
}

export default ModifMdp
