import React, { FC, ReactNode, useMemo } from 'react';

import { RBTableCellProps } from './tableBody.types';
import { RBTColumnDefs, RBTRow } from '../common';
import { CompareRBTRow } from './tableBody.helper';

export const RBTableBody = <TData extends Record<string, unknown>>({ columns, data }: RBTableCellProps<TData>) => {
  const displayed: RBTRow<TData>[] = useMemo(() => {
    const results: RBTRow<TData>[] = data.filter((value) => value.displayed);
    return results.sort(CompareRBTRow);
  }, [data]);

  const GenerateCell = (column: RBTColumnDefs<TData>, row: RBTRow<TData>): ReactNode => {
    let result: ReactNode;

    if (column.Cell && column.id) {
      result = column.Cell({ column: column.id, originalRow: row.data });
    } else if (column.accessorKey) {
      const data = row.data[column.accessorKey];

      if (typeof data === 'string' || typeof data === 'number') {
        result = <td>{data}</td>;
      } else {
        console.log('GenerateCell - Unable to convert data into table cell: ' + JSON.stringify(data));
      }
    } else {
      result = <td></td>;
    }

    return result;
  };

  return (
    <tbody>
      {displayed.map((row: RBTRow<TData>): ReactNode => {
        return (
          <tr key={row.position}>
            {columns.map((column: RBTColumnDefs<TData>): ReactNode => {
              return GenerateCell(column, row);
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
