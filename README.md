# Projeto Clima ☀️

Aplicação para consultar a previsão do tempo de cidades brasileiras, construída com React, TypeScript e Vite. Os dados são obtidos pela BrasilAPI, nos endpoints de meteorologia do CPTEC.

## Funcionalidades

- Busca de cidades pelo nome.
- Seleção da cidade e do estado entre os resultados.
- Exibição do primeiro dia retornado pela API: data, condição do tempo, temperaturas mínima e máxima e índice UV.
- Mensagens de carregamento e de erro durante as consultas.

## Tecnologias

React 19, TypeScript 6, Vite 8, Context API, Fetch API e ESLint. Para execução em contêiner, o projeto inclui Docker e Nginx.

## Executar localmente

Use Node.js 22.12 ou superior e npm.

```bash
git clone https://github.com/phjsilva/projetoClima.git
cd projetoClima
npm ci
npm run dev
```

Acesse o endereço exibido pelo Vite no terminal (normalmente `http://localhost:5173`).

1. Digite o nome de uma cidade, como `Guararema`, e pressione **Enter**.
2. Clique na cidade desejada na lista de resultados.
3. Consulte a previsão exibida no cartão.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica o TypeScript e gera os arquivos de produção em `dist/`. |
| `npm run preview` | Serve o build localmente para conferência; execute o build antes. |
| `npm run lint` | Analisa o código com ESLint. |

## API de clima

As requisições são feitas diretamente pelo navegador. A integração está em [`src/services/weatherService.ts`](src/services/weatherService.ts) e não exige chave de API na configuração atual.

URL base:

```text
https://brasilapi.com.br/api/cptec/v1
```

| Rota | Uso |
| --- | --- |
| `/cidade/{nome}` | Busca cidades pelo nome, codificado para uso na URL. |
| `/clima/previsao/{id}` | Busca a previsão pelo identificador da cidade retornado na busca. |

Exemplo de busca: <https://brasilapi.com.br/api/cptec/v1/cidade/Guararema>.

As consultas dependem de conexão com a internet e da disponibilidade dos dados na API. Em caso de erro, confira a requisição e a resposta na aba **Network/Rede** das ferramentas do navegador.

## Executar com Docker

Com o Docker instalado e em execução, rode na raiz do projeto:

```bash
docker build -t projeto-clima .
docker run --rm -p 8080:80 projeto-clima
```

Acesse `http://localhost:8080`. O Dockerfile gera o build em uma etapa com Node.js e serve os arquivos em outra com Nginx. A configuração em [`nginx.conf`](nginx.conf) inclui compressão gzip, cache para assets e fallback para a aplicação.

## Estrutura do projeto

```text
src/
├── assets/       # Imagens e recursos visuais
├── components/   # Busca, lista de cidades e cartão de previsão
├── contexts/     # Definição do contexto de clima
├── hooks/        # Hook de acesso ao contexto
├── providers/    # Estado, carregamento e consultas de clima
├── services/     # Integração com a BrasilAPI
├── types/        # Tipos das cidades e previsões
├── App.tsx       # Composição da tela principal
└── main.tsx      # Entrada da aplicação
```

## Autor

[phjsilva](https://github.com/phjsilva)
