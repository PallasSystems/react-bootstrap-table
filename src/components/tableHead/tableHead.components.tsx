import React, { FC, ReactNode, useMemo, useState } from 'react';
import { RBTableHeadOptions } from './tableHead.types';
import { RBTColumnDefs } from '../common';

/**
 * Generates a thead for the React Bootstrap Table, this might return an empty thead if
 * @param {RBTableHeadOptions} param0
 * @returns {ReactNode} the <thead> element for our React Bootstrap Table, populated based on the contents of the columns parameter.
 */
export const RBTableHead: FC<RBTableHeadOptions> = ({ columns, enableTableHead, name }) => {
  //
  const tableName = useMemo(() => {
    let result = 'Table Header';
    if (name && name.length > 0) {
      result = name + ' ' + result;
    }
    return result;
  }, [name]);

  const columnPrefix = useMemo(() => {
    let result = 'table.head';
    if (name && name.length > 0) {
      result = name + ',' + result;
    }
    return result;
  }, [name]);

  /**
   * Used to either reach out to a Header Function to define the contents of a Table Header Column, or return the header name.
   * @param {RBTColumnDefs} column the column we are generates a th element for.
   * @returns ReactNode a table head element container either the Header text or the contents of a function call.
   */
  const GenerateHeader = (column: RBTColumnDefs): ReactNode => {
    let id = columnPrefix;
    if (column.id && column.id.length > 0) {
      id = column.id;
    } else if (column.header && column.header.length > 0) {
      id = columnPrefix + column.header.replace(' ', '');
    }

    if (column.Header && typeof column.Header !== 'undefined') {
      return <th aria-label={id}>{column.Header(column.header, column.id, column.minSize, column.maxSize)}</th>;
    } else {
      return <th aria-label={id}>{column.header}</th>;
    };
  };

  return (
    <thead aria-label={tableName} className={'table-dark'}>
      <tr aria-label={columnPrefix}>{enableTableHead ? columns?.map((column) => GenerateHeader(column)) : null}</tr>
    </thead>
  );
};
