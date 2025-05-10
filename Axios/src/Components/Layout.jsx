import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Layout