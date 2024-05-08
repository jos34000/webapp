"use client"
import * as React from "react"
import { useState } from "react"

// Define a reusable component for SpecialtyCard
const SpecialtyCard = ({ src, alt, specialty, description }) => (
  <article className="flex flex-col flex-1 pb-8">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="self-center w-44 aspect-square"
    />
    <h3 className="mt-3 text-base font-medium leading-6 text-white">
      {specialty}
    </h3>
    <p className="text-sm leading-5 text-stone-300">{description}</p>
  </article>
)

// Define a reusable component for ServiceCard
const ServiceCard = ({ src, alt, title, content }) => (
  <article className="flex flex-col grow px-4 py-4 w-full rounded-lg border border-solid bg-neutral-800 border-neutral-700 max-md:mt-3 mt-8">
    <img className="w-6 aspect-square" loading="lazy" src={src} alt={alt} />
    <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
    <p className="mt-1 text-sm leading-5 text-stone-300">{content}</p>
  </article>
)

// Main component
function HealthCare() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Searching for: ${searchTerm}`)
  }
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  

  
  return (
    <main className="flex flex-col items-center pb-9 w-full bg-neutral-900 max-md:max-w-full">
      <section className="flex overflow-hidden relative flex-col justify-end pt-4 pl-4 mt-9 max-w-full text-base text-white rounded-xl min-h-[480px] w-[928px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70faa2e1a08ab3f2ecf99cb57be5c03f6136bf7343ae5a782eed4652a736f90a?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
          className="object-cover absolute inset-0 size-full"
          alt="Health care image"
        />
        <div className="flex relative flex-col justify-end px-10 pt-12 pb-6 max-md:px-5 max-md:max-w-full">
          <h2 className="mt-44 text-5xl font-black tracking-tighter max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Trouvez le bon soin pour vous
          </h2>
          <p className="mt-2 leading-6 max-md:max-w-full">
            Recherchez des médecins, des dentistes, des spécialistes et plus
            encore. Lisez les avis vérifiés des patients et prenez rendez-vous
            avec un médecin vérifié.
          </p>
        </div>
      </section>
      <section className="flex flex-col px-4 py-10 mt-4 w-full max-w-[960px] max-md:max-w-full">
        <h3 className="text-4xl font-black tracking-tighter text-white max-md:max-w-full">
          Pourquoi Health Care?
        </h3>
        <p className="mt-4 text-base leading-6 text-white max-md:max-w-full">
          Nous vous aidons à trouver les meilleurs soins pour ce dont vous avez
          besoin, que ce soit un bilan de santé, une radiographie ou un
          spécialiste. Nos services sont gratuits pour les patients.
        </p>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <ServiceCard
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c21c17a87aeb89a87984a09b45b3355de1aa8f04eb97596e492236faf89ecb?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
            alt="Checkmark"
            title="Avis Vérifiés"
            content="Nos avis sont rédigés par de vrais patients. Vous pouvez les lire avant de choisir un médecin."
          />
          <ServiceCard
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1936ee5e07962c60483db09bbeedae1db498c8ad6976ec016ebdab34c2534e6?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
            alt="Location pin"
            title="Proximité"
            content="Nous vous montrons les médecins près de chez vous qui acceptent votre assurance. C'est gratuit."
          />
          <ServiceCard
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17e968187257c3b96abe0fae4181637826d5db25d6489b7058edc6c2423abf6d?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
            alt="Calendar"
            title="Réservation en Ligne"
            content="Réservez des rendez-vous en ligne. C'est facile, rapide et gratuit."
          />
          {/* <ServiceCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd2bb30219bb0f535180152b0fbbced275f5f77f4b802233c9ada6eea1ddc8f?apiKey=3f0228c97dfd4d3398207a5ad823f317&"
              alt="Money bag"
              title="Tarification Transparente"
              content="Vous pouvez voir le coût de votre visite et si votre assurance le couvre."
            /> */}
        </div>
      </section>
      <section className="flex gap-3 px-5 mt-4 w-full max-w-[928px] max-md:flex-wrap max-md:max-w-full">
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/23d4f989dc516a3f82be49708b74040df787c3d847db361400b7469ef26d36ae?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="General practitioner"
          specialty="Médecin Généraliste"
          description="Diagnostiquer et traiter les maladies courantes et les conditions chroniques"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a41b63ebccc4500476bac8296e52a2c437c45bc91532a24b4f13e16a9b5be5fd?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Dermatologist"
          specialty="Dermatologue"
          description="Diagnostiquer et traiter les problèmes de peau, comme l'acné et le psoriasis"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5957021c8aa296d2f60ee8f4cb8f0952b8c8f201e1e28724fd1611fe3be91e27?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Gynecologist-Obstetrician"
          specialty="Gynécologue-Obstétricien"
          description="Fournir des services de santé pour les femmes, comme les frottis et les soins prénatals"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd0c0f9c3e7f071a993770068b349e5069dafe7352977acb4ca4ced79be1f66?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Cardiologist"
          specialty="Cardiologue"
          description="Diagnostiquer et traiter les problèmes cardiaques et vasculaires"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ba0e2a00a994e8f5f9bf467b805536ce6de078a8c29299930e67418bb07442c?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Pediatrician"
          specialty="Pédiatre"
          description="Fournir des soins médicaux aux enfants"
        />
      </section>
      <section className="flex gap-3 px-5 mt-3 w-full max-w-[928px] max-md:flex-wrap max-md:max-w-full">
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1cc700b6f0c05efe029b304623dcd4f6193902c95cac6623cb4392459398065?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Psychologist"
          specialty="Psychologue"
          description="Diagnostiquer et traiter les troubles de santé mentale"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f80593295ad0fb54bb8e9e91462e6a712b5f6774cac09ff555c68f6056b7ae6?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Physiotherapist"
          specialty="Kinésithérapeute"
          description="Aider les patients à se remettre de blessures et de chirurgies"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92392bf61453840fc4dbc4a98a920aeead6023b68abf42a64547d18f93684c9?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="ENT"
          specialty="ORL"
          description="Diagnostiquer et traiter les problèmes d'oreille, de nez et de gorge"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/057616e45fe32d6c93c34d42e2041e81d402df1085bb4986bd310c0d8d889ec6?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Gastroenterologist"
          specialty="Gastro-entérologue"
          description="Diagnostiquer et traiter les problèmes du système digestif"
        />
        <SpecialtyCard
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8399fad8c91a8098966a37b8d09c400486db052cb3b4c4a88eaa71b87a8c5e5?apiKey=3f0228c97dfd4d3398207a5ad823f317"
          alt="Ophthalmologist"
          specialty="Ophtalmologue"
          description="Diagnostiquer et traiter les problèmes oculaires"
        />
      </section>
    </main>
  )
}

export default HealthCare
