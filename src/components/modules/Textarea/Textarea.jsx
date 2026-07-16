import clsx from 'clsx';

export default function Textarea({ placeholder, className, ...props }) {
  return (
    <textarea
      className={clsx(
        'text-paragraph focus:border-paragraph h-30 w-full border-b border-[rgba(83,89,86,0.2)] transition-colors duration-300 outline-none',
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  );
}
