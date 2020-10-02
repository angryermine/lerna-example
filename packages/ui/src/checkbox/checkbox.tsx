import React from 'react';
import cn from 'classnames';

import {bem} from '@monorepo/bem';

import './checkbox.css';

type BaseProps = React.HTMLProps<HTMLInputElement>;

export type CheckboxProps = Omit<BaseProps, 'type'>;

export function Checkbox({className, ...props}: CheckboxProps) {
  const b = bem('Checkbox');
  const checkboxClass = cn(b(), className);

  return <input {...props} type="checkbox" className={checkboxClass} />;
}
