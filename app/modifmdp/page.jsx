import React from "react"
import Header from "@/lib/components/Organisms/Header.jsx"
import Footer from "@/lib/components/Organisms/Footer.jsx"

function InputField({ label, placeholder }) {
  return (
    <>
      <div className="mt-6 leading-[150%] max-md:max-w-full">{label}</div>
      <div className="justify-center items-start p-4 mt-2 max-w-full rounded-xl bg-zinc-800 leading-[150%] text-stone-300 w-[480px] max-md:pr-5">
        {placeholder}
      </div>
    </>
  )
}

function MyComponent() {
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
      <Header />
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
      <Footer />
    </div>
  )
}

export default MyComponent
