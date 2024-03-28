"use client"

import Link from "next/link"
import { HiOutlineUserCircle, HiOutlineCog } from "react-icons/hi"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default function Header() {
  const [cookie, setCookie] = useState()

  useEffect(() => {
    setCookie(Cookies.get("token"))
  }, [])

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            <Link href="/" legacyBehavior>
              <a>HealthCare</a>
            </Link>
          </h1>
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900 mr-10">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/rdv" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900 mr-10">
                    Rendez-vous
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/download" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">
                    Téléchargements
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          {!cookie ? (
            <Link href="/login" legacyBehavior>
              <a>
                <HiOutlineUserCircle className="text-gray-500 hover:text-gray-900 w-8 h-8 cursor-pointer" />
              </a>
            </Link>
          ) : (
            <Link href="/account" legacyBehavior>
              <a>
                <HiOutlineCog className="text-gray-500 hover:text-gray-900 w-8 h-8 cursor-pointer" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
