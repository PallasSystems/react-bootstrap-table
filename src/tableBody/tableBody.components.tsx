import React, { ReactNode, useMemo } from 'react';

import { RBTableCellProps } from './tableBody.types';
import type { RBTColumnDefs, RBTRow } from '../common';
import { CompareRBTRow } from '../common';

export const RBTableBody = <TData extends Record<string, unknown>>({
  columns,
  data,
  name,
}: RBTableCellProps<TData>) => {
  const columnPrefix = useMemo<string>(() => (name && name.length > 0 ? name + '.table.body' : 'table.body'), [name]);

  const displayed: RBTRow<TData>[] = useMemo(() => {
    const results: RBTRow<TData>[] = data.filter((record) => record.filters.length === 0);
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
      result = (
        <td key={id + '.' + row.position + '.' + index}>{column.Cell({ column: id, originalRow: row.data })}</td>
      );
    }

    // If there was no Id or Cell then result should be undefined
    if (!result && typeof column.accessorFn === 'function') {
      const keyOrValue = column.accessorFn(row.data);

      if (keyOrValue in row.data) {
        const data = row.data[keyOrValue];
        if (typeof data === 'string' || typeof data === 'number') {
          result = <td key={id + '.' + row.position + '.' + index}>{data}</td>;
        }
      } else if (typeof keyOrValue === 'string' || typeof keyOrValue === 'number') {
        result = <td key={id + '.' + row.position + '.' + index}>{keyOrValue}</td>;
      } else {
        console.log('GenerateAccessorFN - Unable to convert data into table AccessorFN: ' + JSON.stringify(keyOrValue));
      }
    }

    // If there was no Id or AccessorFN then result should be undefined
    if (!result && column.accessorKey) {
      const data = row.data[column.accessorKey];

      if (typeof data === 'string' || typeof data === 'number') {
        result = <td key={id + '.' + row.position + '.' + index}>{data}</td>;
      } else {
        console.log('GenerateAccessorFN - Unable to convert data into table AccessorFN: ' + JSON.stringify(data));
      }
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
