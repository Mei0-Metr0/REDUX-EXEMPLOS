# Projeto React com Redux
Este projeto é um exemplo de aplicação em React com Redux, configurado para gerenciar o estado global e realizar chamadas de API. Ele utiliza Bootstrap para estilização, e a aplicação principal exibe uma lista de usuários obtida de uma API pública.

## Funcionalidades
- Redux com Redux Toolkit: Gerenciamento de estado centralizado usando slices.
- Estrutura modularizada: Organização de componentes, hooks, slices e serviços.
- Estilização com Bootstrap: Interface visual organizada e responsiva.
- Chamadas de API: Requisições para uma API externa.

## Tecnologias Utilizadas
- [React](https://react.dev/) 
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Bootstrap](https://getbootstrap.com/)

## Estrutura do Projeto
```
.
├── src
│   ├── components         # Componentes reutilizáveis (UserCard, etc.)
│   ├── hooks              # Hooks personalizados (useFetchUsers)
│   ├── pages              # Páginas principais da aplicação (UserPage)
│   ├── slices             # Redux slices para gerenciamento de estado (userSlice)
│   ├── utils              # Configuração de API e funções utilitárias (apiConfig.js)
│   ├── store.js           # Configuração da store do Redux
│   ├── App.js             # Componente principal da aplicação
│   └── index.js           # Ponto de entrada principal
└── README.md              # Documentação do projeto
```

## Instalação
### 1. Clone o repositório:
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```
### 2. Instale as dependências:
```
npm install
```
### 3. Execute a aplicação:
```
npm start
```

A aplicação estará disponível em http://localhost:3000.

## Explicação dos Principais Arquivos
`src/store/store.js`
Configura a store Redux com os reducers dos slices. O userSlice é adicionado ao store para gerenciar o estado dos usuários.

`src/slices/userSlice.js`:
Define o userSlice que lida com o estado e ações relacionadas aos usuários, incluindo uma requisição assíncrona para buscar dados de uma API - `userService`.

`src/pages/UserPage.js`:
Esta página usa o hook personalizado useFetchUsers para carregar os dados dos usuários e renderiza uma lista de UserCard.

`src/hooks/useFetchUsers.js`:
Esse hook despacha a ação fetchUsers do Redux e retorna o estado atual dos usuários, que inclui a lista, o carregamento e o erro (caso ocorra).

`src/utils/api.js`:
Define a configuração da API. 

`src/utils/requestConfig.js`:
Função para definir as opções da requisição, como método, cabeçalhos e token.