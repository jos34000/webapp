import React from "react"
import AccountItem from "@/lib/components/Atoms/Modif/AccountItem"
import Description from "@/lib/components/Atoms/Modif/Description"
import Cookies from "js-cookie"

function Account() {
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

export default Account
