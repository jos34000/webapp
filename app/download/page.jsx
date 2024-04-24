import * as React from "react"

function DownloadCard({ platform, fileExtension, imageUrl }) {
  return (
    <div className="flex flex-col justify-center p-4 max-w-full text-sm text-white bg-neutral-900 w-[512px]">
      <div className="flex gap-4 justify-between max-md:flex-wrap">
        <div className="flex flex-col">
          <h3 className="text-base font-bold">{platform}</h3>
          <p className="mt-1 leading-[150%] text-stone-300">
            Télécharger le {fileExtension}
          </p>
          <div className="flex flex-col justify-center px-4 py-1.5 mt-4 font-medium whitespace-nowrap rounded-lg bg-zinc-800 leading-[150%] w-[99px]">
            <button className="justify-center bg-zinc-800">Télécharger</button>
          </div>
        </div>
        <img
          loading="lazy"
          src={imageUrl}
          alt={`${platform} logo`}
          className="shrink-0 max-w-full aspect-[1.67] w-[155px]"
        />
      </div>
    </div>
  )
}

function download() {
  const downloadOptions = [
    {
      platform: "Windows",
      fileExtension: ".exe",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6599ce4167be29b465f901d8f11e03798aaa718d1c298262ea95a3d49899c515?apiKey=3f0228c97dfd4d3398207a5ad823f317&",
    },
    {
      platform: "macOS",
      fileExtension: ".dmg",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9e317906528df93e35896bda091527e5258c7b84f5bb89878fe1737ae79de1f?apiKey=3f0228c97dfd4d3398207a5ad823f317&",
    },
    {
      platform: "Linux",
      fileExtension: ".dpkg",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a3ccb3f8edaebca60f5af249bbab624b3908feefd24ae2215f61d07eae48ed85?apiKey=3f0228c97dfd4d3398207a5ad823f317&",
    },
  ]

  return (
    <main className="flex flex-col justify-center bg-white">
      <section className="flex flex-col items-center px-20 py-16 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center max-w-full bg-neutral-900 w-[480px]">
          <img
            loading="lazy"
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg"
            alt="Main product image"
            className="w-full aspect-[2.22] max-md:max-w-full"
          />
        </div>
        <h2 className="mt-9 text-3xl font-bold tracking-tighter text-center text-white">
          Choisir votre OS
        </h2>
        {downloadOptions.map((option) => (
          <DownloadCard key={option.platform} {...option} />
        ))}
      </section>
    </main>
  )
}

export default download
