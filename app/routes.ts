import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  layout("product",[
    index("routes/Products.tsx"),
    route(":productsId", "routes/SingleProduct.tsx"),
  ]),
] satisfies RouteConfig;




