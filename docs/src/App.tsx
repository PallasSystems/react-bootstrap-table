import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { HomePage, MissingPage } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@pallassystems/website-core/dist/website.css';
import { PageData } from './App.data';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={''} element={<HomePage {...PageData} />} />
        <Route path={'/404'} element={<MissingPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
