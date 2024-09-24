export { Layout };

import React from 'react';
import './styles.css';
import Searchbar from '../components/Searchbar';
import Topbar from '../components/Topbar';

function Layout({ children }) {
  return (
    <React.StrictMode>
      <Topbar />
      <Content>{children}</Content>
    </React.StrictMode>
  )
}

function Content({ children }) {
  return <div>{children}</div>
}