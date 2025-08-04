import React from 'react';



export const Select = ({
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  className = ''
}) => {
  const baseClasses = 'p-3 rounded-lg border border-slate-300 focus:ring-sky-500 focus:border-sky-500 shadow-sm text-slate-600 w-full transition-all';

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`${baseClasses} ${className}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};