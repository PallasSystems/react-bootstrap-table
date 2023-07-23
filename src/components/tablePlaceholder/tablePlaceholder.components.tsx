import React, { FC, useState } from 'react';

import { RBTablePlaceholderOptions } from './tablePlaceholder.types';
import { Placeholder } from 'react-bootstrap';
import { RBTColumnDefs } from '../common';

const GetCellId = <TData extends Record<string, unknown>>(columnPrefix: string, column: RBTColumnDefs<TData>) => {
  let id = columnPrefix;
  if (column.id && column.id.length > 0) {
    id = column.id;
  } else if (column.header && column.header.length > 0) {
    id = columnPrefix + column.header.replace(' ', '');
  }

  return id;
};

export const RBTablePlaceholder = <TData extends Record<string, unknown>>(props: RBTablePlaceholderOptions<TData>) => {
  const [paginationRows] = useState<number>(props.rowsPerPage ?? 5);
  return (
    <tbody>
      {[...Array(paginationRows)].map((value, index) => (
        <tr key={'row' + value + index}>
          {props.columns?.map((column: RBTColumnDefs<TData>) => (
            <td key={GetCellId<TData>('row.' + value + index + '.cell.', column)}>
              <Placeholder as={'p'} xs={10} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
