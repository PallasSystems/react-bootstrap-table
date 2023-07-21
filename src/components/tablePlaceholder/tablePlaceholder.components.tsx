import React, { FC, useState } from 'react';

import { RBTablePlaceholderOptions } from './tablePlaceholder.types';
import { Placeholder } from 'react-bootstrap';
import { RBTColumnDefs } from '../common';

export const RBTablePlaceholder: FC<RBTablePlaceholderOptions> = (props) => {
  const [paginationRows] = useState<number>(props.rowsPerPage ?? 5);
  return (
    <tbody>
      {[...Array(paginationRows)].map((value) => (
        <tr key={value}>
          {props.columns?.map((column: RBTColumnDefs) => (
            <td key={value + '.' + column.id}>
              <Placeholder as={'td'} xs={10} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
