type Collapsed = {
  fieldName?: string;
  title?: string;
  render?: Function;
};

export type CollapsedProps = {
  collapsed: Collapsed[];
  colSpan: number;
  data: { [key: string]: any };
  isVisible: boolean;
};

export type Column = {
  title?: string;
  fieldName?: string;
  className?: string;
  render?: Function;
};

export type TableProps = {
  columns: Array<Column>;
  data: Array<any>;
  collapsed?: Collapsed[];
  className?: boolean;
  isLoading?: boolean;
  withBorder?: boolean;
};

export type RowProps = {
  columns: Array<Column>;
  data: { [key: string]: any };
  collapsed?: Collapsed[];
  withBorder?: boolean;
};
