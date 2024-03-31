import React from "react"

function InputField({ label, className }) {
  return (
    <div className={`flex flex-col flex-1 ${className}`}>
      <label className="font-medium leading-[150%]">{label}</label>
      <input
        type="text"
        className="shrink-0 mt-2 h-14 rounded-xl bg-zinc-800"
        aria-label={label}
      />
    </div>
  )
}

function ModifInfoPerso() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <section className="flex flex-col items-center px-20 pt-10 pb-20 text-base font-bold text-white bg-neutral-900 max-md:px-5 flex-grow">
        <h1 className="justify-center items-start p-4 max-w-full text-3xl tracking-tighter w-[512px] max-md:pr-5">
          Modifiez vos informations personnelles
        </h1>
        <div className="flex gap-4 justify-center mt-3 max-w-full font-medium leading-[150%] w-[480px] max-md:flex-wrap">
          <InputField label="First Name" />
          <InputField label="Last Name" />
        </div>
        <div className="mt-6 font-medium leading-[150%] max-md:max-w-full">
          Age
        </div>
        <div className="justify-center items-start p-4 mt-2 max-w-full whitespace-nowrap rounded-xl bg-zinc-800 leading-[150%] w-[480px] max-md:pr-5">
          30
        </div>
        <button className="flex justify-center items-center px-5 py-3 mt-6 max-w-full tracking-wide bg-green-400 rounded-xl leading-[150%] text-neutral-900 w-[480px]">
          Save Changes
        </button>
      </section>
    </div>
  )
}

export default ModifInfoPerso
