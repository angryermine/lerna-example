import React from 'react';
import cn from 'classnames';

import {bem} from '@monorepo/bem';

import {Theme, Size} from '../types';

import './button.css';

type BaseProps = Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>;
type OwnProps = {
  type?: 'submit' | 'button' | 'reset';
  theme?: Theme;
  size?: Size;
};

export type ButtonProps = BaseProps & OwnProps;

const b = bem('Button');

const DEFAULT_PROPS: ButtonProps = {
  type: 'button',
  size: 'md',
};

export function Button({size, theme, className, ...props}: ButtonProps) {
  const buttonClass = cn(b({size, theme}), className);
  return <button {...props} className={buttonClass} />;
}

Button.defaultProps = DEFAULT_PROPS;
