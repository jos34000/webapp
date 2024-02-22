const ServiceCard = ({ imageSrc, title, description }) => (
  <div className="flex flex-col flex-1 pb-8">
    <img
      loading="lazy"
      srcSet={imageSrc}
      alt={title}
      className="self-center w-44 aspect-square"
    />
    <h3 className="mt-3 text-base font-medium text-white">{title}</h3>
    <p className="text-sm leading-5 text-stone-300">{description}</p>
  </div>
)
export default ServiceCard
