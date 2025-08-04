import React from 'react';

export const Input = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  prefix
}) => {
  const baseClasses = 'p-3 rounded-lg border border-slate-300 focus:ring-sky-500 focus:border-sky-500 shadow-sm transition-all w-full';

  if (prefix) {
    return (
      <div className="relative flex items-center">
        <span className="absolute left-3 text-slate-500 z-10">{prefix}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClasses} pl-12 ${className}`}
        />
      </div>
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${baseClasses} ${className}`}
    />
  );
};
