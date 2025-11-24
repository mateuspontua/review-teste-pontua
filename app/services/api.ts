/**
 * Serviço de API simulado
 *
 * Esta função simula uma chamada de API real.
 * Use-a na rota server para buscar produtos.
 */

import type { Product } from "~/@types/Product";
import { mockProducts } from "~/utils/mockProducts";

/**
 * Simula uma chamada de API que retorna produtos
 * Inclui delay artificial para simular latência de rede
 */
export async function fetchProducts(): Promise<Product[]> {
  // Simula latência de rede
  await new Promise(resolve => setTimeout(resolve, 500))

  // Simula possível erro (10% de chance)
  if (Math.random() < 0.1) {
    throw new Error('Falha ao conectar com o servidor')
  }

  return mockProducts
}
