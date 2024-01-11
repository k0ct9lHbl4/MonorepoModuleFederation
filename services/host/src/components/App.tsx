import { Link, Outlet } from "react-router-dom";

import { shopRoutes } from "@packages/shared/src/routes/shop";
import { adminRoutes } from "@packages/shared/src/routes/admin";

export const App = () => {
  return (
    <div>
      <h1>PAGE</h1>
      <Link to="/">HOME</Link>
      <br />
      <Link to={shopRoutes.base}>SHOP</Link>
      <br />
      <Link to={adminRoutes.about}>ADMIN</Link>
      <Outlet />
    </div>
  );
};
