"use client"
import React from "react"
import HistoryPopUp from "@/lib/components/Molecules/HistoryPopUp"
import { useState } from "react"

function HistoryItem({ history }) {
  return (
    <div className="flex gap-3 justify-between py-3 max-md:flex-wrap max-md:max-w-full">
      <div>{history}</div>
      <input type="checkbox" className="accent-green-400" />
    </div>
  )
}

function ModifAntecedents() {
  const [showPopup, setShowPopup] = useState(false)
  const handleOpenPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <section className="flex flex-col items-center px-20 pt-10 pb-20 w-full bg-neutral-900 max-md:px-5 flex-grow">
        <h1 className="justify-center items-start self-center p-4 mt-5 max-w-full text-3xl font-bold tracking-tighter text-white w-[960px] max-md:pr-5 max-md:max-w-full">
          Gestion des antécédents médicaux
        </h1>
        <button
          onClick={handleOpenPopup}
          className="flex justify-center items-center px-4 py-2.5 mt-3 ml-44 max-w-full text-sm font-bold tracking-wide leading-5 text-white rounded-xl bg-zinc-800 w-[480px] max-md:px-5"
        >
          <div className="justify-center bg-zinc-800">
            Ajouter des antécédents
          </div>
        </button>
        {showPopup && <HistoryPopUp />}
        <section className="flex flex-col self-center px-4 mt-3 w-full text-base leading-6 text-white max-w-[960px] max-md:max-w-full"></section>
        <div className="flex flex-col mt-3 ml-44 max-w-full font-bold leading-[150%] w-[480px]">
          <button className="flex justify-center items-center px-4 py-2.5 text-sm tracking-wide text-white rounded-xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
            <div className="justify-center bg-neutral-900">
              Supprimer la sélection
            </div>
          </button>
          <button className="flex justify-center items-center px-5 py-3 mt-6 text-base tracking-wide bg-green-400 rounded-xl text-neutral-900 max-md:max-w-full">
            <div className="justify-center bg-green-400">
              Enregistrer les modifications
            </div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default ModifAntecedents
