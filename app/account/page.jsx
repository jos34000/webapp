import * as React from "react"

import Link from "next/link"

function EditButton({ href }) {
  return (
    <div className="flex flex-col justify-center px-4 py-1.5 text-sm font-medium rounded-xl bg-green-400 max-md:px-5">
      <Link href={href} legacyBehavior>
        <button className="justify-center">Edit</button>
      </Link>
    </div>
  )
}

function AccountItem({ title, href }) {
  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full text-white bg-neutral-900 leading-[150%] max-w-[960px] max-md:max-w-full ml-8">
      <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-base">{title}</div>
        <EditButton href={href} />
      </div>
    </div>
  )
}

function Description({ decript }) {
  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full text-white bg-neutral-900 leading-[150%] max-w-[960px] max-md:max-w-full ml-8">
      <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-sm mb-6 text-gray-500">{decript}</div>
      </div>
    </div>
  )
}

function MyComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <div className="flex-1 flex flex-col items-center pb-20 mt-10">
        <h1 className="justify-center items-start p-4 mt-5 mb-8 max-w-full text-3xl font-bold tracking-tighter text-white whitespace-nowrap w-[960px] max-md:pr-5">
          Mon compte
        </h1>
        <AccountItem title="Mot de passe" href="/modifmdp" />
        <Description decript="Modifiez votre mot de passe. Votre ancien vous sera demandé afin de pouvoir procéder à la modification." />
        <AccountItem title="Antécédents" href="/modifantecedent" />
        <Description decript="Ajoutez, modifiez, supprimez vos antécédents de santé." />
        <AccountItem title="Informations personnelles" href="/modifinfoperso" />
        <Description decript="Modifiez vos informations personnelles." />
        <AccountItem title="Mes rendez-vous" href="/modifrdv" />
        <Description decript="Voir vos rendez-vous passés et à venir." />
      </div>
    </div>
  )
}

export default MyComponent
