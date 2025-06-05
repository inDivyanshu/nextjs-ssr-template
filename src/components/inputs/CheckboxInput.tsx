// CheckboxInput: Theme-compliant, accessible checkbox
'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './inputs.module.css';

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, label, error, ...props }) => {
  const form = useFormContext?.();
  return (
    <div className="mb-4 flex items-center">
      <input
        id={name}
        type="checkbox"
        className={`mr-2 ${styles.input}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
        {...(form?.register ? form.register(name) : {})}
      />
      <label htmlFor={name} className="font-medium" style={{ color: 'var(--form-label-color)' }}>{label}</label>
      {error && <span id={`${name}-error`} className="text-xs text-red-500 ml-2">{error}</span>}
    </div>
  );
};

export default CheckboxInput;
