import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "@/components/App";
import { Shop } from "@/pages/shop";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Загрузка..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/main",
        element: (
          <Suspense fallback={"Загрузка..."}>
            <h1 style={{ color: "red" }}>SHOP MAIN</h1>
          </Suspense>
        ),
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

export default routes;
