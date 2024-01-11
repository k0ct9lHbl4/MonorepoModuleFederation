import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/components/App";
import { About } from "@/pages/about";

const routes = [
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin/about",
        element: (
          <Suspense fallback={"Загрузка..."}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

export default routes;
