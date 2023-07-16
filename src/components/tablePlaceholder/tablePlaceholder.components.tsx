import React, { FC, useState } from 'react';

import { RBTablePlaceholderOptions } from './tablePlaceholder.types';
import { Placeholder } from 'react-bootstrap';

export const RBTablePlaceholder: FC<RBTablePlaceholderOptions> = (props) => {
  const [paginationRows, setPaginationRows] = useState<number>(props.rowsPerPage ?? 5);
  return (
    <tbody>
      {[...Array(paginationRows)].map(() => (
        <RBTablePlaceholderRow {...props} />
      ))}
    </tbody>
  );
};

export const RBTablePlaceholderRow: FC<RBTablePlaceholderOptions> = ({ columns }) => {
  return (
    <tr>
      {columns?.map(() => (
        <td>
          <Placeholder as={'td'} xs={10} />
        </td>
      ))}
    </tr>
  );
};
