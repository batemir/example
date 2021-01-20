import React, { FC, FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { ChevronDownIcon, ChevronUpIcon } from '@/_components/icons';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const COMPONENT_STYLE_NAME = 'First-column-cell';

type PropsType = {
  isVisible: boolean;
  children: React.ReactNode | string | FC | FunctionComponent;
};

export const FirstColumnCell = ({ isVisible, children }: PropsType) => (
  <>
    <span className={cn(`${COMPONENT_STYLE_NAME}__icon`)}>
      {isVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </span>

    {children}
  </>
);
