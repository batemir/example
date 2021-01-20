import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import identity from 'lodash-es/identity';
import { RowProps } from '../../types';
import { Cell } from '../cell';
import { Collapsed } from '../collapsed';
import { FirstColumnCell } from '../first-column-cell';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const COMPONENT_STYLE_NAME = 'Row';

export const Row = ({
  collapsed = [],
  columns,
  data,
  withBorder,
}: RowProps) => {
  const [firstColumn, ...restColumns] = columns;
  const {
    render: fcRender = identity,
    className: fcClassName,
    fieldName: fcName,
  } = firstColumn;
  const colSpan = columns.length;

  const [isVisible, setVisibility] = useState(false);
  const toggleVisibility = useCallback(() => {
    setVisibility(!isVisible);
  }, [isVisible]);

  const isExpanded = isVisible;

  return (
    <>
      <tr
        className={cn(COMPONENT_STYLE_NAME, {
          [`${COMPONENT_STYLE_NAME}--with-border`]: withBorder,
        })}
        onClick={toggleVisibility}
      >
        <Cell
          className={cn(fcClassName, {
            [`${COMPONENT_STYLE_NAME}__cell--expanded`]: isExpanded,
          })}
        >

          <FirstColumnCell isVisible={isVisible}>
            {fcRender(data[fcName], data)}
          </FirstColumnCell>
        </Cell>

        {restColumns.map(
          ({
            className,
            fieldName: name,
            render = identity,
            title: columnTitle,
          }) => {
            return (
              <Cell
                key={`${columnTitle}${name}`}
                className={cn(className, {
                  [`${COMPONENT_STYLE_NAME}__cell--expanded`]: isExpanded,
                })}
              >
                {render(data[name], data)}
              </Cell>
            );
          },
        )}
      </tr>

        <Collapsed
          collapsed={collapsed}
          colSpan={colSpan}
          data={data}
          isVisible={isVisible}
        />
    </>
  );
};
