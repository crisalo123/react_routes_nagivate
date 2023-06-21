import { lazy, LazyExoticComponent } from "react";
import Nolazy from "../layout/Nolazy";

type JsxElement = () => JSX.Element;

interface typesRoutes {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | JsxElement;
  name: string;
}

const lazyLayout = lazy(
  () => import(/*webpackChunkName: "lazyLayour"  */ "../layout/LazyLayout")
);
// const lazy2 = lazy(() => import(/*webpackChunkName: "Lazypage2"  */  '../01-lazyload/pages/LazyPages2'))
// const lazy3 = lazy(() => import(/*webpackChunkName: "Lazypage3"  */  '../01-lazyload/pages/LazyPages3'))

export const routes: typesRoutes[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: lazyLayout,
    name: "Lazy Layout",
  },

  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: Nolazy,
    name: "No lazy",
  },
];
