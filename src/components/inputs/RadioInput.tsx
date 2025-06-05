// RadioInput: Theme-compliant, accessible radio button
'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './inputs.module.css';

export interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  error?: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ name, label, value, error, ...props }) => {
  const form = useFormContext?.();
  return (
    <div className="mb-4 flex items-center">
      <input
        id={`${name}-${value}`}
        type="radio"
        value={value}
        className={`mr-2 ${styles.input}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
        {...(form?.register ? form.register(name) : {})}
      />
      <label htmlFor={`${name}-${value}`} className="font-medium" style={{ color: 'var(--form-label-color)' }}>{label}</label>
      {error && <span id={`${name}-error`} className="text-xs text-red-500 ml-2">{error}</span>}
    </div>
  );
};

export default RadioInput;
