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

export default InputField
