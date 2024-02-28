const ToggleSwitch = ({ isOn, toggle }) => (
  <div className="flex justify-center mt-4">
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={toggle}
        />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            isOn ? "transform translate-x-6" : ""
          }`}
        ></div>
      </div>
      <span className={`pl-3 ${isOn ? "text-green-500" : "text-gray-300"}`}>
        {isOn ? "Mode Inscription" : "Mode Connexion"}
      </span>
    </label>
  </div>
)
export default ToggleSwitch
