import { ReactNode } from 'react';
import { Table } from 'react-bootstrap-icons';
import type { IconProps } from 'react-bootstrap-icons';

export const getRBTIcon = (value?: IconProps): ReactNode => {
  return <Table {...value} />;
}