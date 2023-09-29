import { NavbarLinkProperty } from '@pallassystems/website-core';
import { HomePageProperties } from './pages';

export const PageData: HomePageProperties = {
  navBarProps: {
    brandName: 'React Bootstrap Table',
    items: [
      { path: '/gettingStarted', text: 'Getting Started' },
      { path: '/api', text: 'API' },
      { path: '/examples', text: 'Examples' },
    ],
  },
};
