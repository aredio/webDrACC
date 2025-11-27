import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Define a raiz como o diretório atual
  root: './',
  
  // Define a pasta public - o Vite copia seu conteúdo para a raiz do build
  publicDir: 'public',
  
  build: {
    // A pasta de saída PADRÃO da indústria. Nunca use '.'
    outDir: 'dist',
    
    // Limpa a pasta dist antes de gerar novo build (garante que não haja lixo antigo)
    emptyOutDir: true,
    
    // Removemos o 'rollupOptions' complexo. 
    // O Vite detecta automaticamente as dependências a partir do seu index.html.
    
    // Performance: Habilita minificação (estava false no seu config anterior)
    minify: 'esbuild', 
    
    // Gera sourcemaps apenas se necessário (útil para debug, pode desligar em prod se quiser esconder código)
    sourcemap: true,
  },
  
  server: {
    port: 3000,
    open: true,
  },
});