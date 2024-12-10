# Integrantes do Grupo
- João Guilherme de Lima Oliveira
- Mauricio Santos

# Explicação sobre Requisitos minimos para executar o projeto
Para executar o projeto corretamente, certifique-se de atender aos seguintes requisitos:
### 1. **Node.js**  
- **Versão mínima**: 16.0  
- **Como verificar**:  
  Execute o comando:  
  ```bash
  node -v

### 2. **Angular CLI**
O Angular CLI é uma ferramenta necessária para criar, construir e executar o projeto Angular.
- **Como instalar**:
  ```bash
  npm install -g @angular/cli

### 3. **API de Filmes**
O projeto utiliza uma API de filmes para buscar informações sobre filmes, incluindo título, descrição, poster, e outros dados.
- **API utilizada**: [The Movie Database (TMDB)](https://www.themoviedb.org/)
- **Como obter uma chave de API**:
  1. Acesse o site [TMDB](https://www.themoviedb.org/) e crie uma conta.
  2. Após o login, vá até a página de **Configurações da Conta**.
  3. Clique em **API** no menu lateral e siga as instruções para gerar sua chave de API.
  4. Copie a chave e insira no arquivo de configuração do projeto.

- **Configuração no projeto**:
  No arquivo `filme.service.ts`, substitua `SUA_CHAVE_API_AQUI` pela sua chave de API:
  ```typescript
  private apiKey: string = 'SUA_CHAVE_API_AQUI';

# Explicação sobre o objetivo do site

Este projeto é uma aplicação básica que utiliza uma API de filmes como base para exibir informações relevantes sobre o universo cinematográfico. O site permite ao usuário:

- Visualizar uma lista de filmes populares.
- Acompanhar os filmes que estão em alta no momento.
- Descobrir lançamentos futuros.

Com uma interface simples e intuitiva, o objetivo é oferecer uma experiência agradável para explorar tendências e novidades do mundo dos filmes.
