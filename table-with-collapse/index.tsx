import React from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { Row } from './_components/row';
import { TableProps } from './types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const COMPONENT_STYLE_NAME = 'Table-with-collapse';

export const TableWithCollapse = ({
  className,
  collapsed,
  columns,
  data,
  isLoading,
  withBorder = true,
}: TableProps) => {
  const isEmpty = !data.length;

  return (
    <div className={cn(COMPONENT_STYLE_NAME, className)}>
      <table
        className={cn(`${COMPONENT_STYLE_NAME}__table`, {
          [`${COMPONENT_STYLE_NAME}__table--loading`]: isLoading,
        })}
      >
        <thead>
          <tr>
            {columns.map(({ title }) => (
              <th
                key={title}
                className={cn(`${COMPONENT_STYLE_NAME}__header-cell`)}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {isEmpty ? (
            <tr className={cn(`${COMPONENT_STYLE_NAME}__centered-row`)}>
              <td
                className={cn(`${COMPONENT_STYLE_NAME}__centered-cell`)}
                colSpan={columns.length}
              >
                {!isLoading ? (
                  <Text color="richGrey" size="h3" text="Нет данных" />
                ) : null}
              </td>
            </tr>
          ) : (
            data.map((rowData) => (
              <Row
                key={rowData.id}
                collapsed={collapsed}
                columns={columns}
                data={rowData}
                withBorder={withBorder}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
