import type { BaseTableEntity } from '../common';

export type BootstrapTableMenuBarProps = BaseTableEntity & {
  isCompact: boolean;
  setCompact: (e: boolean) => void;
  isSearchable: boolean;
  setSearchValue: (e: string) => void;
};
