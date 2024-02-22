const NavbarButton = ({ children, backgroundColor }) => (
  <div
    className={`flex flex-col flex-1 justify-center px-4 py-2.5 rounded-xl ${backgroundColor}`}
  >
    <span>{children}</span>
  </div>
)
export default NavbarButton
