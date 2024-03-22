import React from "react"

import InputField from "@/lib/components/Atoms/Modif/InputField"

function ModifMdp() {
  const inputFields = [
    {
      label: "Current Password",
      placeholder: "Enter your current password",
    },
    {
      label: "New Password",
      placeholder: "Enter your new password",
    },
    {
      label: "Confirm New Password",
      placeholder: "Confirm your new password",
    },
  ]

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <section className="flex flex-col items-center px-20 pt-10 pb-20 w-full bg-neutral-900 max-md:px-5 flex-grow">
        <h1 className="justify-center items-start p-4 max-w-full text-3xl font-bold tracking-tighter w-[512px] max-md:pr-5">
          Change Password
        </h1>
        {inputFields.map((field, index) => (
          <InputField
            key={index}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}
        <button className="flex justify-center items-center px-5 py-3 mt-6 mb-40 max-w-full font-bold tracking-wide whitespace-nowrap bg-green-400 rounded-xl leading-[150%] text-neutral-900 w-[480px] max-md:mb-10">
          Save
        </button>
      </section>
    </div>
  )
}

export default ModifMdp
