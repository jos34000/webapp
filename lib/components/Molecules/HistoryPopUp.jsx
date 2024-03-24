import React from "react"
import HistorySelect from "@/lib/components/Atoms/Modif/HistorySelect"
import DatePicker from "@/lib/components/Atoms/Rdv/DatePicker"
import EnterComment from "@/lib/components/Atoms/Modif/EnterComment"
import useHistoryForm from "@/lib/Hooks/useHistoryForm.js"

function HistoryPopUp() {
  const {
    history,
    handleHistoryChange,
    comment,
    handleCommentChange,
    date,
    handleDateChange,
    handleSubmit,
  } = useHistoryForm()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <form className="flex flex-col px-4 py-5 max-w-full w-[512px]">
        <HistorySelect
          onHistoryChange={handleHistoryChange}
          history={history}
        />

        <DatePicker
          label="Date de l'antécédent médical"
          value={date}
          onChange={handleDateChange}
        />

        <EnterComment value={comment} onChange={handleCommentChange} />
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
