import { connect } from 'react-redux';
import {
  getMyRequestsActionSaga,
  getPagination,
  getTableData,
  getTableDataLength,
  isDataLoading,
} from '../../../../_redux/my-requests-module';

import { Table as TableView } from './Table';

const mapStateToProps = state => ({
  dataLen: getTableDataLength(state),
  myRequests: getTableData(state),
  isDataLoading: isDataLoading(state),
  pagination: getPagination(state),
});

const mapDispatchToProps = {
  getMyRequests: getMyRequestsActionSaga,
};

export const Table = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableView);
