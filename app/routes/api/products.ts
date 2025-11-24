import type { LoaderFunctionArgs } from 'react-router'
import { fetchProducts } from '~/services/api'

/**
 * ✅ TODO - TAREFA 1: Completar a rota server
 *
 * Implemente a função loader abaixo:
 * - Use a função fetchProducts do serviço de API
 * - Retorne os dados no formato correto para o React Router
 *
 * ✅ TODO - TAREFA 7: Implementar tratamento de erro
 * - Adicione try/catch apropriado
 * - Em caso de erro, retorne um objeto com a propriedade error
 * - Exemplo: return { error: 'Mensagem de erro', products: [] }
 */

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const response = await fetchProducts();

    return {
      products: response
    }
    
  } catch (error) {
    return {
      error: 'Erro ao buscar produtos',
      products: []
    }
  }
}
