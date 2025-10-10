export default function Input({ name, placeholder, value, onChange, type }) {
  return (
    <div className="relative">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 
      text-white border-1 rounded-sm border-white
      selection:border-transparent caret-white focus:placeholder:text-transparent peer focus:outline-none"
      />
      <div className="absolute top-0 translate-y-2 translate-x-4 pointer-events-none peer-focus:bg-black text-transparent peer-focus:scale-75 peer-focus:translate-y-[-13px] peer-focus:translate-x-[-4px] peer-focus:text-white peer-focus:px-4 peer-focus:rounded-b-lg peer-focus:pb-1 peer-autofill:bg-transparent transition-all duration-300">
        {placeholder}
      </div>
    </div>
  );
}
