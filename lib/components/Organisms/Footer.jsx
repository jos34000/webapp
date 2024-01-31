// components/Footer.js
import React from "react"
import Link from "next/link"
import { HiOutlineMail } from "react-icons/hi"
import "../../../app/globals.css"

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900">HealthCare</h2>
            <p className="mt-2 text-gray-500">
              Copyright © 2022 Jocelyn Sainson. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Liens utiles</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">Accueil</a>
                </Link>
              </li>
              <li>
                <Link href="/specialites" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">
                    Spécialités
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/doctors" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">Médecins</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-gray-500 hover:text-gray-900">À propos</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Contact</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="mailto:jocelyn.sainson@icloud.com"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <HiOutlineMail className="inline-block w-4 h-4 mr-1" />
                  jocelyn.sainson@icloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
