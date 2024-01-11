import { lazy } from "react";

export const LazyShop = lazy(
  () => import(/* webpackChunkName: "ChunkShopComponent" */ "./Shop")
);
