import clsx from 'clsx';

export default function Input({ placeholder, type = 'text', className, ...props }) {
  return (
    <input
      className={clsx(
        'text-paragraph focus:border-paragraph h-10 w-full border-b border-[rgba(83,89,86,0.2)] transition-colors duration-300 outline-none',
        className
      )}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}
