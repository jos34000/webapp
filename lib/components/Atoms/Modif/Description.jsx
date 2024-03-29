function Description({ decript }) {
  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full text-white bg-neutral-900 leading-[150%] max-w-[960px] max-md:max-w-full ml-8">
      <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-sm mb-6 text-gray-500">{decript}</div>
      </div>
    </div>
  )
}

export default Description
