import React, { ReactNode, useMemo } from 'react';

import { RBTableCellProps } from './tableBody.types';
import { RBTColumnDefs, RBTRow } from '../common';
import { CompareRBTRow } from '../common';

export const RBTableBody = <TData extends Record<string, unknown>>({
  columns,
  data,
  name,
}: RBTableCellProps<TData>) => {
  const columnPrefix = useMemo<string>(() => (name && name.length > 0 ? name + '.table.body' : 'table.body'), [name]);

  const displayed: RBTRow<TData>[] = useMemo(() => {
    const results: RBTRow<TData>[] = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].filters.length === 0) {
        results.push(data[index]);
      }
    }

    return results.sort(CompareRBTRow);
  }, [data]);

  /**
   * This will process the Cell atribute (if set)
   * @param column
   * @param row
   * @returns
   */
  const GenerateCell = (index: number, column: RBTColumnDefs<TData>, row: RBTRow<TData>): ReactNode => {
    let id = columnPrefix;
    if (column.id && column.id.length > 0) {
      id = column.id;
    }

    let result: ReactNode;

    if (typeof column.Cell === 'function') {
      result = column.Cell({ column: id, originalRow: row.data });
    } else {
      result = column.Cell;
    }

    // If there was no Id or Cell then result should be undefined
    if (!result && column.accessorKey) {
      const data = row.data[column.accessorKey];

      if (typeof data === 'string' || typeof data === 'number') {
        result = <td key={id + '.' + row.position + '.' + index}>{data}</td>;
      } else {
        console.log('GenerateCell - Unable to convert data into table cell: ' + JSON.stringify(data));
      }
    } else {
      console.log('No Id or Accessor key\ncolumn: ' + JSON.stringify(column) + '\nrow: ' + JSON.stringify(data));
      result = <td key={id + '.' + row.position + '.' + index}></td>;
    }

    return result;
  };

  return (
    <tbody>
      {displayed.map((row: RBTRow<TData>): ReactNode => {
        return (
          <tr key={row.position}>
            {columns.map((column: RBTColumnDefs<TData>, index: number): ReactNode => {
              return GenerateCell(index, column, row);
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
