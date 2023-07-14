import React, { FC, useCallback, useMemo, useState } from 'react';

import { RBTSearchOptions } from './search.types';
import { RBTColumnDefs } from '../common';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { RBTRow } from '../common/common.types';
import { isNamedTupleMember } from 'typescript';

/**
 * This is used to provide a search bar which will look through the supplied data objects and mark them as
 * filtered/not filtered dependning on search criteria provided.
 *
 * @component
 * @param {RBTSearchOptions} param0 this is used
 * @returns
 */
export const RBTSearch: FC<RBTSearchOptions> = ({ columns, data, name, varient, handleDisplayedRows }) => {
  const styleVarient = useMemo(() => varient ?? 'dark', [varient]);
  const tableName = useMemo(() => {
    name && name.length > 0 ? name + ' SearchBar' : 'SearchBar';
  }, [name]);

  /**
   * Columns must be marked as searchable, for the search bar to include them in analysis.
   */
  const searchableColumns = useMemo((): string[] => {
    const keys: string[] = [];
    columns?.forEach((value: RBTColumnDefs) => {
      if (value.searchable && value.accessorKey) {
        keys.push(value.accessorKey);
      }
    });

    return keys;
  }, [columns]);

  /**
   * If there are any columns which are searchable, this will be set to true.
   * This value is used to decide if the search bar should be shown.
   */
  const isSearchableTable = useMemo((): boolean => {
    return searchableColumns && searchableColumns.length > 0 && typeof handleDisplayedRows !== 'undefined';
  }, [searchableColumns, handleDisplayedRows]);

  /**
   * This function will iterate over the data with the current search value looking for matches.
   * It will then set the displayed rows callback with the matching results.
   * @param {string} toFind the value to search the stored data for.
   */
  const handleSearchValue = useCallback(
    (toFind: string) => {
      if (handleDisplayedRows) {
        const results: RBTRow<Record<string, any>>[] = [];
        // Convert to Upper case to remove case specific issues
        const upperToFind = toFind.toUpperCase();
        let changed = false;
        //iterate over each table record to find ones which match our search term
        data?.forEach((row: RBTRow<Record<string, any>>) => {
          const data = row.data;
          if (data) {
            let match = false;
            for (let keyIndex = 0; keyIndex < searchableColumns.length; keyIndex++) {
              // TODO This needs to be configured for multi level objects
              const key = searchableColumns[keyIndex];
              if (data[key]) {
                match = data[key].toUpperCase().indexOf(upperToFind) > -1;
                if (match) {
                  break;
                }
              }
            }
            // If the filtering status of the row has changed we need to capture this and feed
            // it back to the other components.
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
