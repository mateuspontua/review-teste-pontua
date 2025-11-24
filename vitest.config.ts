import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

// TODO: Precisei ajustar as configurações de teste usando um arquivo vitest.config.ts separado porque não estava conseguindo fazer
// os testes rodarem com as configurações no vite.config.ts nos testes com o react-testing-library.

export default defineConfig({
  // @ts-expect-error tsconfig-paths plugin
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './app/test/setup.ts',
    exclude: ['node_modules', 'build', 'dist', '.git'],
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
