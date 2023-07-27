# React Bootstrap Table Libary

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=PallasSystems_react-bootstrap-table&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=PallasSystems_react-bootstrap-table)[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=PallasSystems_react-bootstrap-table&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=PallasSystems_react-bootstrap-table)[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=PallasSystems_react-bootstrap-table&metric=coverage)](https://sonarcloud.io/summary/new_code?id=PallasSystems_react-bootstrap-table)![Apache License, Version 2.0, January 2004](https://img.shields.io/github/license/apache/maven.svg?label=License)[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A library to create a data grid using React, Bootstrap & Bootstrap Icons. This was written as other Bootstrap libraries were written against old versions of React/Bootstrap and everything else was based on the Material UI framework.

![Image of the Table](https://github.com/PallasSystems/react-bootstrap-table/blob/main/docs/react-bootstrap-table.png?raw=true)

## Getting Started

1. Ensure that you have React 18 or later installed
2. Install Peer Dependencies

```bash
npm install react-bootstrap react-bootstrap-icons
```

3. Install react-bootstrap-table

```bash
npm install @pallassystems/react-bootstrap-table
```

### Usage

```javascript
import React, { useMemo, useRef, useState, useEffect } from 'react';
import type { RBTColumnDefs } from '@pallassystems/react-bootstrap-table';
import { RBTable } from '@pallassystems/react-bootstrap-table';

const data = [
  {
    name: 'John',
    age: 30,
  },
  {
    name: 'Sara',
    age: 25,
  },
];

export default function App() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: () => <i>Age</i>, //optional custom header render
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={data} />;
}
```

## Develop and Contribute

We welcome questions, ideas, issues and code contributions to this project.

Use the [issues page](https://github.com/PallasSystems/typr/issues) to get in touch with the community.

If you would like to make a code contribution please fork the repository and create a
[GitHub pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests) to the `main` branch.
