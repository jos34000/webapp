import React from "react"
import HistorySelect from "@/lib/components/Atoms/Modif/HistorySelect"
import DatePicker from "../Atoms/Rdv/DatePicker.jsx"
import useHistoryForm from "@/lib/Hooks/useHistoryForm.js"

function HistoryPopUp() {
  const { history, handleHistoryChange, comment, handleComment, handleSubmit } =
    useHistoryForm()
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <form className="flex flex-col px-4 py-5 max-w-full w-[512px]">
        <HistorySelect
          onHistoryChange={handleHistoryChange}
          history={history}
        />
        <label htmlFor="antecedentDate" className="mt-6 max-md:max-w-full">
          Date de l'antécédent médical
        </label>
        <DatePicker />

        <label htmlFor="commentaires" className="mt-6 max-md:max-w-full">
          Commentaires supplémentaires
        </label>
        <div className="justify-center p-4 mt-2 rounded-xl bg-zinc-800 text-stone-300 max-md:pr-5 max-md:max-w-full">
          Ajouter des commentaires ou des détails supplémentaires
        </div>
        <button
          type="submit"
          className="flex justify-center items-center px-5 py-3 mt-6 mb-32 font-bold tracking-wide whitespace-nowrap bg-green-400 rounded-xl text-neutral-900 max-md:mb-10 max-md:max-w-full"
        >
          <div className="justify-center bg-green-400">Enregistrer</div>
        </button>
      </form>
    </div>
  )
}

export default HistoryPopUp
