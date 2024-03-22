const SectionTitle = ({ isLoginForm }) => (
  <div className="flex gap-4">
    <h2 className="flex-auto text-white text-4xl font-extrabold pb-10">
      {isLoginForm ? "Connexion" : "S'inscrire"}
    </h2>
  </div>
)
export default SectionTitle
