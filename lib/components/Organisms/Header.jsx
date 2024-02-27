// components/Header.js
import Link from "next/link"
import { HiOutlineUserCircle } from "react-icons/hi"

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            <Link href="/" legacyBehavior>
              <a>HealthCare</a>
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/specialites" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">
                    Specialties
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/doctors" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">Doctors</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">About</a>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/login" legacyBehavior>
            <HiOutlineUserCircle className="text-gray-500 hover:text-gray-900 w-8 h-8 cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  )
}
