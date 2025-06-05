// PasswordInput: Theme-compliant, accessible password field with toggle
'use client';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './inputs.module.css';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, label, error, ...props }) => {
  const [show, setShow] = useState(false);
  const form = useFormContext?.();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium" style={{ color: 'var(--form-label-color)' }}>{label}</label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={show ? 'text' : 'password'}
          className={`w-full pr-10 ${styles.input} ${error ? 'border-red-500' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          {...props}
          ref={form?.register ? form.register(name) : undefined}
        />
        <button
          type="button"
          tabIndex={-1}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400"
          onClick={() => setShow(s => !s)}
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && <span id={`${name}-error`} className="text-xs text-red-500 mt-1 block">{error}</span>}
    </div>
  );
};

export default PasswordInput;
