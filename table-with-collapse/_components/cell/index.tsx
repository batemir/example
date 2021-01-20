import React, { FC, FunctionComponent, memo } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

type PropsType = {
  children: React.ReactNode | string | FC | FunctionComponent;
  className?: string;
  colSpan?: number;
};

export const Cell = memo(({ children, className, colSpan }: PropsType) => (
  <td className={cn(styles.Cell, className)} colSpan={colSpan}>
    {children}
  </td>
));
