const FormButton = ({ isLoginForm, label }) => (
  <button
    type="submit"
    className="flex justify-center items-center px-16 py-3 mt-6 max-w-full text-base font-bold tracking-wide leading-6 whitespace-nowrap bg-green-400 rounded-xl text-neutral-900 w-[480px] max-md:px-5"
    aria-label={label}
  >
    {isLoginForm ? "Se connecter" : "S'inscrire"}
  </button>
)
export default FormButton
