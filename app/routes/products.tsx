import { useLoaderData } from "react-router";
import type { Product } from "~/@types/Product";
import ProductCard from "~/components/ProductCard";

/**
 * ✅ TODO - TAREFA 2: Ajustar a rota client
 *
 * Complete esta rota client:
 * - Use o hook correto do React Router para obter dados do loader
 * - Renderize a lista de produtos usando o componente ProductCard
 * - Trate o caso de lista vazia
 *
 * ✅ TODO - TAREFA 4: Melhorar acessibilidade (sutil)
 * - Verifique se está usando elementos semânticos corretos
 * - Adicione ARIA labels onde apropriado
 * - Pense em navegação por teclado (Faz o teste demorar um pouco mais do que experado)
 */

export { loader } from "./api/products";

interface LoaderData {
  products: Product[];
  error?: string;
}

export default function Products() {
  const data = useLoaderData<LoaderData>();

  // TODO: Tratar caso de erro
  if (data?.error) {
    return (
      <div aria-describedby="error-container-message" className="error-message">
        <h2 aria-describedby="error-message-title" className="text-2xl text-red-600 font-semibold">Erro ao carregar produtos</h2>
        <p aria-describedby="error-message-content">{data.error}</p>
      </div>
    );
  }

  const hasProducts = data.products && data.products.length > 0;

  // TODO: Renderizar lista de produtos usando ProductCard
  // Dica: não esqueça de adicionar uma key apropriada
  return (
    <main aria-describedby="list-of-products" className="products-container">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100" aria-describedby="products-header-title">Nossos Produtos</h1>

      {/* TODO: Implementar renderização da lista aqui */}
      {hasProducts && (
        <article aria-describedby="grid-of-products" className="products-grid">
          {data.products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </article>
      )}
      {!hasProducts && <p aria-describedby="empty-products" className="text-xl text-red-400">Nenhum produto disponível</p>}
    </main>
  );
}
