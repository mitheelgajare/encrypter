import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Footer from "./Footer";

const Layout: NextPage = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
