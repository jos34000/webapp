function LogoutButton({ onClick }) {
  return (
    <div className="flex flex-col justify-center px-4 py-1.5 text-sm font-medium rounded-xl bg-red-400 max-md:px-5">
      <button className="justify-center" onClick={onClick}>
        Déconnexion
      </button>
    </div>
  )
}

export default LogoutButton
