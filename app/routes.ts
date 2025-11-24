import { type RouteConfig, index, route } from "@react-router/dev/routes";

// TODO: Adicionar a rota /products aqui no arquivo pois não está sendo adicionado automaticamente (usando flatRoutes())
export default [index("routes/home.tsx"),
  route("products", "routes/products.tsx")
] satisfies RouteConfig;
