import React, { FC, ReactNode, useMemo } from 'react';

import { RBTableCellProps } from './tableBody.types';
import { RBTColumnDefs, RBTRow } from '../common';
import { CompareRBTRow } from './tableBody.helper';

export const RBTableBody: FC<RBTableCellProps> = ({ columns, data }) => {
  const displayed: RBTRow[] = useMemo(() => {
    const results: RBTRow[] = data.filter((value) => value.displayed);
    return results.sort(CompareRBTRow);
  }, [data]);

  const GenerateCell = (column: RBTColumnDefs, row: RBTRow): ReactNode => {
    let result: ReactNode;

    if (column.Cell && column.id) {
      result = column.Cell({ column: column.id, originalRow: row.data });
    } else if (column.accessorKey) {
      result = <td>{row.data[column.accessorKey]}</td>;
    } else {
      result = <td></td>;
    }

    return result;
  };

  return (
    <tbody>
      {displayed.map((row: RBTRow): ReactNode => {
        return (
          <tr>
            {columns.map((column: RBTColumnDefs): ReactNode => {
              return GenerateCell(column, row);
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
