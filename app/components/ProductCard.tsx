/**
 * ✅ TODO - TAREFA 8: Finalizar componente ProductCard
 *
 * Complete este componente:
 * - Defina a interface de props corretamente (use o tipo Product)
 * - Implemente a renderização de todas as informações do produto
 * - Adicione interatividade básica (ex: botão de adicionar ao carrinho)
 *
 * ✅ TODO - TAREFA 3: Implementar estilização
 * - As classes CSS já estão definidas, mas faltam os estilos
 * - Adicione estilos usando Tailwind ou CSS customizado
 *
 * ✅ TODO - TAREFA 4: Melhorar acessibilidade (sutil)
 * - Use elementos semânticos
 * - Adicione ARIA labels em botões e elementos interativos
 */

import type { Product } from "~/@types/Product";

// TODO: Definir interface de props
type ProductCardProps = Product 

export default function ProductCard(props: ProductCardProps) {
  // TODO: Desestruturar props
  const { category, description, id, inStock, name, price } = props;

  const handleAddToCart = () => {
    // Placeholder para adicionar ao carrinho
    alert(`Produto ID:${id} adicionado ao carrinho`);
  };

  return (
    <section className="product-card">
      {/* TODO: Implementar conteúdo do card */}
      {/* Deve exibir: nome, preço, descrição, categoria, status de estoque */}
      <div className="flex flex-col">
        <div className="space-y-1 flex-1">
          <h3 className="product-name" aria-describedby="product-name">{name}</h3>
          <p className="product-price" aria-describedby="product-price">{price}</p>
        </div>
        <span className="product-category" aria-describedby="category-of-product">{category}</span>
      </div>
      <div className="flex flex-1 flex-col items-end justify-start gap-1">
        <p className="product-description" aria-describedby="product-description">{description}</p>
        {inStock ? <strong className="product-stock" aria-describedby="in-stock">Em estoque</strong> : (
          <span className="bg-red-600 text-white text-sm px-2 py-0.5 rounded-full" aria-describedby="out-stock">Fora de estoque</span>
        )}
        {inStock && (
          <button aria-describedby="add-to-cart-btn" className="add-to-cart-button" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </button>
        )}
      </div>
    </section>
  );
}
