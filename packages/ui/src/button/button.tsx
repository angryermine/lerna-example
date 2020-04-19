import React from 'react';
import cn from 'classnames';

import {bem} from '@monorepo/bem';

import './button.css';

type BaseProps = Omit<React.HTMLProps<HTMLButtonElement>, 'type'>;
type OwnProps = {
  type?: 'submit' | 'button' | 'reset';
};

export type ButtonProps = BaseProps & OwnProps;

export function Button({className, ...props}: ButtonProps) {
  const b = bem('btn');
  const buttonClass = cn(b(), className);

  return <button {...props} className={buttonClass} />;
}
