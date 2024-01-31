import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header class="h-64 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
      <h1 class="text-4xl font-bold cursor-pointer hover:text-gray-200 transition duration-300">
        My Beautiful Header
      </h1>
    </header>
  )
}

export default Header
