import { configureStore } from "@reduxjs/toolkit"; // Importa a função para configurar a store.
import userReducer from "../slices/userSlice"; // Importa o reducer da slice de usuários.

const store = configureStore({
  reducer: {
    users: userReducer, // Adiciona o reducer dos usuários à store Redux.
  },
});

export default store;