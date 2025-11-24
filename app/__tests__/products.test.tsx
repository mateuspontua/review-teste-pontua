import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProductCard from '~/components/ProductCard'
import { mockProducts } from '~/utils/mockProducts'
import { formatCurrencyToBRL } from '~/utils/formatCurrencyToBRL'

/**
 * ✅ TODO - TAREFA 5: Criar testes básicos (descrição sutil)
 *
 * Implemente pelo menos 1-2 testes simples aqui:
 * - Teste de renderização do ProductCard
 * - Teste de comportamento básico
 *
 * Nota: Este item é mencionado de forma branda no README para avaliar
 * se o candidato presta atenção aos detalhes e às partes menos óbvias.
 */

describe('Products tests', () => {
  it('validate test', () => {
    expect(1 + 1).toBe(2)
  })
  it('verificar se está renderizando o ProductCard corretamente', () => {
    const mockProduct = mockProducts[0];
    
    const { getByText } = render(<ProductCard {...mockProduct} />)

    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(mockProduct.description)).toBeInTheDocument();
    expect(getByText(mockProduct.category)).toBeInTheDocument();
    expect(getByText(mockProduct.inStock ? 'Em estoque' : 'Fora de estoque')).toBeInTheDocument();
    
    if (mockProduct.inStock) {
      expect(getByText('Adicionar ao Carrinho')).toBeInTheDocument();
    }
  })
  it('verificar se o preço está formatado corretamente', () => {
    const mockProduct = mockProducts[0];
    
    const { getByTestId } = render(<ProductCard {...mockProduct} />)

    const price = (getByTestId('product-price').textContent)
    const regexp = /^R\$\s\d{1,3}(\.\d{3})*,\d{2}$/
    const formattedPrice = formatCurrencyToBRL(mockProduct.price);

    expect(price).toBe(formattedPrice)
    expect(regexp.test(price || '')).toBe(true)
  })
})
