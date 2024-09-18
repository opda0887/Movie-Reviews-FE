// Outlet: used to render the child routes of the parent route.
import { Outlet } from "react-router-dom";

import React from "react";

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export { Layout };
