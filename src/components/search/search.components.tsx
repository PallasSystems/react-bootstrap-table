import React, { useCallback, useMemo } from 'react';

import { RBTSearchOptions } from './search.types';
import { RBTColumnDefs } from '../common';
import { Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { RBTRow } from '../common/common.types';
import { updateFilterAndDisplayed } from './search.helpers';

/**
 * This is used to provide a search bar which will look through the supplied data objects and mark them as
 * filtered/not filtered dependning on search criteria provided.
 *
 * @component
 * @param {RBTSearchOptions} param0 this is used
 */

export const RBTSearch = <TData extends Record<string, unknown>>({
  columns,
  data,
  name,
  handleDisplayedRows,
}: RBTSearchOptions<TData>) => {
  const tableName = useMemo(() => {
    let result = 'Search Bar';
    if (name) {
      if (name.length > 0) {
        result = name + ' ' + result;
      }
    }
    return result;
  }, [name]);

  /**
   * Columns must be marked as searchable, for the search bar to include them in analysis.
   */
  const searchableColumns = useMemo((): string[] => {
    const keys: string[] = [];
    columns?.forEach((value: RBTColumnDefs<TData>) => {
      if (value.searchable && value.accessorKey) {
        keys.push(value.accessorKey.toString());
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
        // Convert to Upper case to remove case specific issues
        const upperToFind = toFind.toUpperCase();
        const results: RBTRow<TData>[] = updateFilterAndDisplayed(upperToFind, data, searchableColumns);

        handleDisplayedRows(results);
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
