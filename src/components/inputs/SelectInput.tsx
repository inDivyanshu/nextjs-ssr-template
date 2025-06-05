// SelectInput: Enterprise-grade, theme-compliant select component
'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './inputs.module.css';

export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({ name, label, error, options, ...props }) => {
  const form = useFormContext?.();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium" style={{ color: 'var(--form-label-color)' }}>{label}</label>
      <select
        id={name}
        className={`w-full ${styles.input} ${error ? 'border-red-500' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
        {...(form?.register ? form.register(name) : {})}
      >
        <option value="" disabled>Select...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span id={`${name}-error`} className="text-xs text-red-500 mt-1 block">{error}</span>}
    </div>
  );
};

export default SelectInput;
