import React, { FC, useMemo, useState } from 'react';
import { RBTableHeadOptions } from './tableHead.types';

export const RBTableHead: FC<RBTableHeadOptions> = ({ columns, enableTableHead, name }) => {
  const [enable, setEnable] = useState<boolean>(enableTableHead ?? false);
  //
  const tableName = useMemo(() => {
    let result = 'Table Header';
    if (name && name.length > 0) {
      result = name + ' ' + result;
    }
    return result;
  }, [name]);

  return (
    <thead aria-label={tableName}>
      <tr>{enable ? columns?.map((column) => <th>{column.header}</th>) : null}</tr>
    </thead>
  );
};
