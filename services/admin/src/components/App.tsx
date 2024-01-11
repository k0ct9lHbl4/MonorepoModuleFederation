import { Outlet } from "react-router-dom";

import { deepMerge } from "@packages/shared/src/utils/deepMerge";

export const App = () => {
  deepMerge();

  return (
    <div>
      <h1>ADMIN MODULE APP LAYOUT</h1>
      <Outlet />
    </div>
  );
};
