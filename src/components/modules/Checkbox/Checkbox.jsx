import './Checkbox.css';

export default function Checkbox({ checked, onChange, ...props }) {
  return (
    <label id="checkboxContainer" className="relative cursor-pointer">
      <input
        id="checkboxInput"
        type="checkbox"
        className="absolute opacity-0"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        {...props}
      />
      <div
        id="toggleContainer"
        className="flex h-8 w-14 items-center rounded-full bg-black/30 px-1 transition-colors duration-500"
      >
        <div
          id="toggleHandle"
          className="size-6 rounded-full bg-white transition-transform duration-500"
        ></div>
      </div>
    </label>
  );
}
