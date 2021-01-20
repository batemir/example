import React, { useEffect } from 'react';
import classnames from 'classnames/bind';
import { Action } from '@wildberries/redux-core-modules';
import { TableWithCollapse } from '@/_components/table-with-collapse';
import { Bold } from '@/_components/bold';
import { TableItem } from '@/pages/home/_redux/my-requests-module';
import { ParsePaginationPayloadType } from '@/pages/home/_types/pagination-types';
import { Actions } from './_components/actions';
import { Status } from './_components/status';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Table';

type PropsType = {
  getMyRequests: Action<ParsePaginationPayloadType>;
  isDataLoading: boolean;
  myRequests: Array<TableItem>;
};

const collapsed = [
  {
    fieldName: 'purpose',
    title: 'Цель поездки',
  },
];

const columns = [
  {
    title: 'Страна, город',
    fieldName: 'country',
    render: (country, { city }) => <Bold text={`${country}, ${city}`} />,
  },
  {
    title: 'Период',
    fieldName: 'startDate',
    render: (text, record) => `${text} - ${record.endDate}`,
  },
  {
    title: 'Статус заявки',
    fieldName: 'status',
    render: (text, record) => (
      <Status status={text} tripManager={record.tripManager} />
    ),
  },
  {
    title: 'Дата заявки',
    fieldName: 'createdAt',
  },
  {
    title: 'Действия',
    className: cn(`${CLASS_NAME}__actions`),
    render: (text, { id, status }) => <Actions id={id} status={status} />,
  },
];

export const Table = ({
  getMyRequests,
  isDataLoading,
  myRequests,
}: PropsType) => {
  useEffect(() => {
    getMyRequests({ shouldParsePageParams: true });
  }, [getMyRequests]);

  return (
    <TableWithCollapse
      className={cn(CLASS_NAME)}
      collapsed={collapsed}
      columns={columns}
      data={myRequests}
      isLoading={isDataLoading}
    />
  );
};
