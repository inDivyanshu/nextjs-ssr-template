// TextInput: Enterprise-grade, theme-compliant input component
'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './inputs.module.css';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, label, error, ...props }) => {
  const form = useFormContext?.();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium" style={{ color: 'var(--form-label-color)' }}>{label}</label>
      <input
        id={name}
        name={name}
        className={`w-full ${styles.input} ${error ? 'border-red-500' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
        ref={form?.register ? form.register(name) : undefined}
      />
      {error && <span id={`${name}-error`} className="text-xs text-red-500 mt-1 block">{error}</span>}
    </div>
  );
};

export default TextInput;
