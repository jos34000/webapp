const InfoCard = ({ imageSrc, title, description }) => (
  <article className="flex flex-col grow px-4 py-4 rounded-lg border border-solid bg-neutral-800 border-neutral-700">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="w-6 aspect-square"
    />
    <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
    <p className="mt-1 text-sm leading-5 text-stone-300">{description}</p>
  </article>
)
export default InfoCard
