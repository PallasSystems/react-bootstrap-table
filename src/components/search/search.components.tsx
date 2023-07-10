import React, { FC, useCallback, useMemo, useState } from 'react';

import { RBTSearchOptions } from './search.types';
import { RBTColumnDefs } from '../common';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { RBTRow } from '../common/common.types';

export const RBTSearch: FC<RBTSearchOptions> = ({ columns, data, name, varient, handleDisplayedRows }) => {
  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  //
  const isSearchableTable = useMemo((): boolean => {
    let result = false;

    if (data && handleDisplayedRows) {
      columns?.forEach((value: RBTColumnDefs) => {
        if (value.searchable) {
          result = true;
        }
      });
    }
    return result;
  }, [columns]);

  const searchableColumns = useMemo((): string[] => {
    const keys: string[] = [];
    columns?.forEach((value: RBTColumnDefs) => {
      if (value.searchable && value.accessorKey) {
        keys.push(value.accessorKey);
      }
    });

    return keys;
  }, [columns]);

  //
  const handleSearchValue = useCallback(
    (toFind: string) => {
      if (handleDisplayedRows) {
        const results: RBTRow<Record<string, any>>[] = [];

        // Convert to Upper case to remove case specific issues
        const upperToFind = toFind.toUpperCase();
        let changed = false;
        //iterate over each
        data?.forEach((row: RBTRow<Record<string, any>>) => {
          const data = row.data;
          if (data) {
            let match = false;
            for (let keyIndex = 0; keyIndex < searchableColumns.length; keyIndex++) {
              // TODO This needs to be configured for multi level objects
              const key = searchableColumns[keyIndex];
              if (data[key]) {
                match = data[key].toUpperCase().indexOf(upperToFind) > -1;
              }

              if (match) {
                break;
              }
            }

            if (row.filtered !== match) {
              row.filtered = match;
              changed = true;
            }
            results.push(row);
          }
        });

        if (changed) {
          handleDisplayedRows(results);
        }
      }
    },
    [columns, data],
  );
  //
  const tableName = useMemo(() => {
    let result = 'SearchBar';
    if (name && name.length > 0) {
      result = name + ' SearchBar';
    }
    return result;
  }, [name]);

  return (
    <>
      {isSearchableTable ? (
        <>
          <Form.Control
            placeholder='Search'
            aria-label={tableName + ' Search Input'}
            tabIndex={0}
            onChange={(e) => handleSearchValue(e.target.value)}
          />
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
        </>
      ) : null}
    </>
  );
};
