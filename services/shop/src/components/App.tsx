import { Link, Outlet } from "react-router-dom";

import { shopRoutes } from "@packages/shared/src/routes/shop";

export const App = () => {
  return (
    <div>
      <h1>SHOP MODULE APP LAYOUT</h1>
      <Link to={shopRoutes.main}>To main page</Link>
      <Outlet />
    </div>
  );
};
