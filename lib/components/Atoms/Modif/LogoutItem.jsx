"use client"
import LogoutButton from "@/lib/components/Atoms/Modif/LogoutButton"
import useLogout from "@/lib/hooks/useLogout"

function LogoutItem({ title }) {
  const handleLogout = useLogout()
  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full text-white bg-neutral-900 leading-[150%] max-w-[960px] max-md:max-w-full ml-8">
      <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-base">{title}</div>
        <LogoutButton onClick={handleLogout} />
      </div>
    </div>
  )
}

export default LogoutItem
