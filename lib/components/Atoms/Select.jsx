import { forwardRef } from "react"

const Select = forwardRef(({ label, value, onChange, options }, ref) => (
  <div className="mb-6">
    <label
      htmlFor={label.toLowerCase().replace(" ", "-")}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <select
      ref={ref}
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
))

Select.displayName = "Select"

export default Select
