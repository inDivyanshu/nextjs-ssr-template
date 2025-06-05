// TextArea: Enterprise-grade, theme-compliant textarea component
'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './inputs.module.css';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, error, ...props }) => {
  const form = useFormContext?.();
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-1 font-medium" style={{ color: 'var(--form-label-color)' }}>{label}</label>
      <textarea
        id={name}
        className={`w-full ${styles.input} ${error ? 'border-red-500' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
        {...(form?.register ? form.register(name) : {})}
      />
      {error && <span id={`${name}-error`} className="text-xs text-red-500 mt-1 block">{error}</span>}
    </div>
  );
};

export default TextArea;
