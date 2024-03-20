import * as React from "react"
import Header from "@/lib/components/Organisms/Header.jsx"

const personalInfoItems = [
  {
    title: "Informations personnelles",
    description:
      "Vous pouvez modifier votre nom, votre date de naissance et votre genre",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae295a6fe3831a474acad1b4aaed2805dee4d1dacca58aead23d8bebbdcc3981?apiKey=3f0228c97dfd4d3398207a5ad823f317&",
  },
  {
    title: "Coordonnées",
    description:
      "Vous pouvez modifier votre adresse e-mail et votre numéro de téléphone",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/71ba7c40be9718ad16b8e09adb9c6246554a656b8effa993f5bb863228954481?apiKey=3f0228c97dfd4d3398207a5ad823f317&",
  },
  {
    title: "Mot de passe",
    description: "Modifier votre mot de passe",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d0d5336716a6dd0f9d497b7d061cd815023d0fd3d3d129be4021f01458edf54?apiKey=3f0228c97dfd4d3398207a5ad823f317&",
  },
]

const appointments = [
  {
    title: "Consultation vidéo",
    description:
      "Vous avez un rendez-vous avec le Dr. A. Smith le 10 juillet à 10h00",
  },
  {
    title: "Consultation vidéo",
    description:
      "Vous avez un rendez-vous avec le Dr. A. Smith le 10 juillet à 10h00",
  },
  {
    title: "Consultation vidéo",
    description:
      "Vous avez un rendez-vous avec le Dr. A. Smith le 10 juillet à 10h00",
  },
  {
    title: "Consultation vidéo",
    description:
      "Vous avez un rendez-vous avec le Dr. A. Smith le 10 juillet à 10h00",
  },
]

const PersonalInfoItem = ({ title, description, icon }) => (
  <div className="flex gap-5 justify-between px-4 py-3.5 w-full bg-neutral-900 leading-[150%] max-w-[960px] max-md:flex-wrap max-md:max-w-full">
    <div className="flex flex-col justify-center max-md:max-w-full">
      <h3 className="text-base font-medium text-white max-md:max-w-full">
        {title}
      </h3>
      <p className="text-sm text-stone-300 max-md:max-w-full">{description}</p>
    </div>
    <img
      loading="lazy"
      src={icon}
      alt={`${title} Icon`}
      className="shrink-0 my-auto w-6 aspect-square"
    />
  </div>
)

const AppointmentItem = ({ title, description }) => (
  <div className="flex gap-5 justify-between px-4 py-3 w-full bg-neutral-900 leading-[150%] max-w-[960px] max-md:flex-wrap max-md:max-w-full">
    <div className="flex flex-col justify-center text-sm text-stone-300 max-md:max-w-full">
      <h3 className="text-base font-medium text-white max-md:max-w-full">
        {title}
      </h3>
      <button className="max-md:max-w-full">Annuler</button>
      <p className="max-md:max-w-full">{description}</p>
    </div>
    <button className="self-start text-base font-medium text-white">
      Voir
    </button>
  </div>
)

function AccountManagement() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pb-5 w-full max-md:max-w-full">
        <h2 className="justify-center items-start py-4 pr-16 pl-4 mt-5 max-w-full text-3xl font-bold tracking-tighter text-white whitespace-nowrap w-[960px] max-md:pr-5">
          Gestion de compte
        </h2>
        <h3 className="self-start mt-4 ml-44 text-lg font-bold tracking-tight text-white whitespace-nowrap max-md:ml-2.5">
          Informations personnelles
        </h3>
        {personalInfoItems.map((item, index) => (
          <PersonalInfoItem key={index} {...item} />
        ))}
        <h3 className="self-start mt-4 ml-44 text-lg font-bold tracking-tight text-white max-md:ml-2.5">
          Rendez-vous
        </h3>
        {appointments.map((appointment, index) => (
          <AppointmentItem key={index} {...appointment} />
        ))}
      </div>
    </>
  )
}

export default AccountManagement
