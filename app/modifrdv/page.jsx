"use client"
import React from "react"
import RdvItem from "@/lib/components/Atoms/Modif/RdvItem"
import useRdv from "@/lib/Hooks/useRdv"
import { useState, useEffect } from "react"

function ModifRdv() {
  const { rdv, handleDeleteSelected } = useRdv()

  const [checkedItems, setCheckedItems] = useState([])

  const handleCheck = (item, isChecked) => {
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        return [
          ...prevCheckedItems,
          { rdvId: item.rdvId, dispoId: item.dispo.dispoId },
        ]
      } else {
        return prevCheckedItems.filter((id) => id !== item.rdvId)
      }
    })
  }

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <section className="flex flex-col items-center px-20 pt-10 pb-20 w-full bg-neutral-900 max-md:px-5 flex-grow">
        <h1 className="justify-center items-start self-center p-4 mt-5 max-w-full text-3xl font-bold tracking-tighter text-white w-[960px] max-md:pr-5 max-md:max-w-full">
          Gestion de vos rendez-vous
        </h1>

        <section className="flex flex-col self-center px-4 mt-3 w-full text-base leading-6 text-white max-w-[960px] max-md:max-w-full">
          {rdv?.map((rdv, index) => (
            <RdvItem
              key={index}
              doctor={rdv.doctor.lastname}
              date={rdv.dispo.date}
              timeslot={rdv.dispo.timeslot}
              motif={rdv.motif}
              onCheck={(isChecked) => handleCheck(rdv, isChecked)}
            />
          ))}
        </section>
        <div className="flex flex-col mt-3 ml-44 max-w-full font-bold leading-[150%] w-[480px]">
          <button
            onClick={() => handleDeleteSelected(checkedItems, setCheckedItems)}
            className="flex justify-center items-center px-5 py-3 mt-6 text-base tracking-wide bg-green-400 rounded-xl text-neutral-900 max-md:max-w-full"
          >
            <div className="justify-center bg-green-400">
              Supprimer la sélection
            </div>
          </button>
        </div>
      </section>
    </div>
  )
}

export default ModifRdv
