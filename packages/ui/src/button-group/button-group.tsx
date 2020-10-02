import React from 'react';
import cn from 'classnames';

import {bem} from '@monorepo/bem';

import {Size} from '../types';

import './button-group.css';

type BaseProps = React.HTMLProps<HTMLDivElement>;
type OwnProps = {
  gutter?: Size;
};

export type ButtonGroupProps = BaseProps & OwnProps;

const b = bem('ButtonGroup');

const DEFAULT_PROPS: ButtonGroupProps = {
  gutter: 'md',
};

export function ButtonGroup({className, gutter, ...props}: ButtonGroupProps) {
  const elementClass = cn(b({gutter}), className);

  return <div {...props} className={elementClass} />;
}

ButtonGroup.defaultProps = DEFAULT_PROPS;
