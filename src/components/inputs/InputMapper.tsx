// InputMapper: Maps input type to the correct component
'use client';
import React from 'react';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SelectInput from './SelectInput';

export interface InputMapperProps {
  type: 'text' | 'textarea' | 'select';
  name: string;
  label: string;
  error?: string;
  options?: { value: string; label: string }[];
  [key: string]: any;
}

const InputMapper: React.FC<InputMapperProps> = (props) => {
  switch (props.type) {
    case 'text':
      return <TextInput {...props} />;
    case 'textarea':
      return <TextArea {...props} />;
    case 'select':
      return <SelectInput {...props} options={props.options || []} />;
    default:
      return null;
  }
};

export default InputMapper;
