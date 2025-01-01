import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import {
  ApiHeadPage,
  ApiTablePageData,
  GettingStartedInstallPage,
  GettingStartedPage,
  GettingStartedUsagePage,
  HomePage,
} from './pages';
import { ExamplePageNavData, PageData } from './App.data';
import {
  ExamplesHeadPage,
  ExamplesSectionPage,
  ExamplesStorybookPage,
  NavbarLinkProperty,
} from '@pallassystems/website-core';

function App() {
  let storybooks: NavbarLinkProperty[] = [];
  ExamplePageNavData.forEach((value) => {
    if (value.items && value.items.length > 0) {
      storybooks = storybooks.concat(value.items);
    }
  });

  return (
    <HashRouter>
      <Routes>
        <Route path={''} element={<HomePage {...PageData} />} />
        <Route path={'/api'} element={<ApiHeadPage {...PageData} />} />
        {ApiTablePageData.map((value) => {
          return <Route key={"api.page." + value.link} path={value.link} element={value.page(PageData)} />;
        })}
        <Route path={'/examples'} element={<ExamplesHeadPage {...PageData} exampleProps={ExamplePageNavData} />} />
        {ExamplePageNavData.map((value: NavbarLinkProperty) => {
          return <Route key={"example.page." + value.id} path={value.path} element={<ExamplesSectionPage exampleProps={value} {...PageData} />} />;
        })}
        {storybooks.map((value: NavbarLinkProperty) => {
          return <Route key={"example.storybooks.page." + value.id} path={value.path} element={<ExamplesStorybookPage exampleProps={value} {...PageData} />} />;
        })}

        <Route path={'/gettingstarted'} element={<GettingStartedPage {...PageData} />} />
        <Route path={'/gettingstarted/install'} element={<GettingStartedInstallPage {...PageData} />} />
        <Route path={'/gettingstarted/usage'} element={<GettingStartedUsagePage {...PageData} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
