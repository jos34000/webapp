const TextInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => (
  <div className="flex flex-col flex-1">
    <label className="font-medium text-white" name={label}>
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="justify-center py-3 px-4 mt-2 rounded-lg bg-zinc-800 text-stone-300"
      aria-label={label}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
)
export default TextInput
