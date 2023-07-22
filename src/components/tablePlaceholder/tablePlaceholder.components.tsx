import React, { FC, useState } from 'react';

import { RBTablePlaceholderOptions } from './tablePlaceholder.types';
import { Placeholder } from 'react-bootstrap';
import { RBTColumnDefs } from '../common';

export const RBTablePlaceholder = <TData extends Record<string, unknown>>(props: RBTablePlaceholderOptions<TData>) => {
  const [paginationRows] = useState<number>(props.rowsPerPage ?? 5);
  return (
    <tbody>
      {[...Array(paginationRows)].map((value) => (
        <tr key={value}>
          {props.columns?.map((column: RBTColumnDefs<TData>) => (
            <td key={value + '.' + column.id}>
              <Placeholder as={'td'} xs={10} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
