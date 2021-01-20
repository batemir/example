import React from 'react';
import classnames from 'classnames/bind';
import { Collapse } from '@material-ui/core';
import { Bold } from '@/_components/bold';
import { CollapsedProps } from '../../types';
import { Cell } from '../cell';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const COMPONENT_STYLE_NAME = 'Collapsed';

export const Collapsed = ({
  collapsed,
  colSpan,
  data,
  isVisible,
}: CollapsedProps) => (
  <tr>
    <Cell
      className={cn(`${COMPONENT_STYLE_NAME}__cell--hidden`)}
      colSpan={colSpan}
    >
      <Collapse in={isVisible} timeout="auto" unmountOnExit>
        {collapsed.map(({ render: renderCollapsed, title, fieldName }) => {
          const isCollapsedRender = typeof renderCollapsed === 'function';
          return data[fieldName] || isCollapsedRender ? (
            <div
              key={title + fieldName}
              className={cn(`${COMPONENT_STYLE_NAME}__expansion-row`)}
            >
              <>
                <Bold text={title} weight="700" />
                {isCollapsedRender
                  ? renderCollapsed(data[fieldName], data)
                  : data[fieldName]}
              </>
            </div>
          ) : null;
        })}
      </Collapse>
    </Cell>
  </tr>
);
