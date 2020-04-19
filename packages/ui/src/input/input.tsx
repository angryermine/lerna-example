import React from 'react';
import cn from 'classnames';

import {bem} from '@monorepo/bem';

import './input.css';

export type InputProps = React.HTMLProps<HTMLInputElement>;

export function Input({className, ...props}: InputProps) {
  const b = bem('input');
  const inputClass = cn(b(), className);

  return <input {...props} className={inputClass} />;
}
