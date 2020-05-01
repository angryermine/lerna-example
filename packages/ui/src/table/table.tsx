import React from 'react';
import cn from 'classnames';

import {bem} from '@monorepo/bem';

import './table.css';

type BaseProps = React.HTMLProps<HTMLTableElement>;
type OwnProps = {
  sticky?: boolean;
};

export type TableProps = BaseProps & OwnProps;

const b = bem('Table');

export function Table({className, sticky, ...props}: TableProps) {
  const tableClass = cn(b({sticky}), className);
  return <table {...props} className={tableClass} />;
}
