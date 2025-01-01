import React, { ReactNode, useMemo } from 'react';
import { RBTableHeadOptions } from './tableHead.types';
import { RBTColumnDefs } from '../common';

/**
 * Generates a thead for the React Bootstrap Table, this might return an empty thead if
 * @param {RBTableHeadOptions} param0
 * @returns {ReactNode} the <thead> element for our React Bootstrap Table, populated based on the contents of the columns parameter.
 */

export const RBTableHead = <TData extends Record<string, unknown>>({
  columns,
  enableTableHead,
  name,
  varient,
}: RBTableHeadOptions<TData>) => {
  const styleVarient = useMemo<string>(() => varient ?? 'dark', [varient]);
  const columnPrefix = useMemo<string>(() => (name && name.length > 0 ? name + '.table.head' : 'table.head'), [name]);

  /**
   * Used to either reach out to a Header Function to define the contents of a Table Header Column, or return the header name.
   * @param {RBTColumnDefs} column the column we are generates a th element for.
   * @returns ReactNode a table head element container either the Header text or the contents of a function call.
   */
  const GenerateHeader = (column: RBTColumnDefs<TData>): ReactNode => {
    let id = columnPrefix;
    if (column.id && column.id.length > 0) {
      id = column.id;
    } else if (column.header && column.header.length > 0) {
      id = columnPrefix + column.header.replace(' ', '');
    }

    let headerText = id;
    if (column.header && column.header.length > 0) {
      headerText = column.header;
    }

    let result: ReactNode = undefined;
    if (column.id) {
      if (typeof column.Header === 'function') {
        result = (
          <th key={id} aria-label={id}>
            {column.Header({ id: id, header: headerText })}
          </th>
        );
      }
    }

    // If there was no Id or Cell then result should be undefined
    if (!result && column.header) {
      const data = column.header;

      if (typeof data === 'string' || typeof data === 'number') {
        result = (
          <th key={id} aria-label={id}>
            {data}
          </th>
        );
      } else {
        console.log('GenerateHeader - Unable to convert data into table header: ' + JSON.stringify(data));
        result = <th key={id} aria-label={id}></th>;
      }
    }

    return result;
  };

  return (
    <thead className={'table-' + styleVarient}>
      <tr aria-label={columnPrefix}>{enableTableHead ? columns?.map((column) => GenerateHeader(column)) : null}</tr>
    </thead>
  );
};
