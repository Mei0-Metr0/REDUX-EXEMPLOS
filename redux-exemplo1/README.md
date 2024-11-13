# Projeto React com Redux
Este é um projeto básico que demonstra como configurar Redux e React-Redux usando o Redux Toolkit em uma aplicação React. Ele implementa um contador simples com funcionalidades de incremento e decremento utilizando o Redux para gerenciar o estado global.

## Tecnologias Utilizadas
- [React](https://react.dev/) 
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Bootstrap](https://getbootstrap.com/)

## Estrutura do Projeto
```
.
├── src
├── App.js                          # Componente principal da aplicação
├── components
│   └── Counter.js                  # Componente principal que exibe e controla o contador
├── slices
│   └── counterSlice.js             # Slice do Redux que gerencia o estado do contador
├── store
│   └── store.js                    # Configuração da store Redux para o projeto
└── index.js                        # Ponto de entrada da aplicação, que renderiza o App
└── README.md                       # Documentação do projeto
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
`src/store/store.js`:
Este arquivo configura a Store Redux da aplicação usando o configureStore do Redux Toolkit. Ele combina os reducers de diferentes slices para criar uma Store centralizada que gerencia o estado global.

`src/slices/counterSlice.js`:
Este arquivo define um slice chamado `counter`. Um slice é uma parte do estado global que possui um conjunto específico de ações e um reducer. Aqui, o estado inicial é `0`, e temos duas ações: `increment` e `decrement`.

`src/components/Counter.js`:
O `Counter` é um componente React que exibe o valor do contador e possui botões para incrementá-lo ou decrementá-lo. Ele usa `useSelector` para acessar o estado do contador na Store e `useDispatch` para disparar ações.

`src/App.js`:
Este arquivo é o componente principal da aplicação. Ele importa e renderiza o componente `Counter`, que contém o contador.

`src/index.js`:
Este é o ponto de entrada da aplicação React. Aqui, o componente `App` é envolto pelo `Provider` do `react-redux`, que recebe a Store configurada, permitindo o acesso ao Redux em todos os componentes da aplicação.