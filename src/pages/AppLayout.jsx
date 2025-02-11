import React from "react";
import Header from "../components/layout/Header";
import { Outlet } from "react-router";
import Footer from "../components/layout/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
