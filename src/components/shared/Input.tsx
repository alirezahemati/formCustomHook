export default function Input({
  id,
  name,
  value,
  type = "text",
  labelText,
  required = true,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col justify-center items-start gap-1 w-full mx-auto">
      <label htmlFor={id} className="text-slate-100">
        {labelText}:
      </label>
      <input
        value={value}
        type={type}
        id={id}
        name={name}
        required={required}
        onChange={onChange}
        className="bg-slate-500 p-2 rounded focus:outline-none w-full font-semibold"
      />
    </div>
  );
}
