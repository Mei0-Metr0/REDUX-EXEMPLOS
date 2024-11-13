import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // Ferramentas para criar uma slice e funções assíncronas.
import { fetchUsers } from "../services/userService";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const users = await fetchUsers();
  return users;
});

const userSlice = createSlice({
  name: "users", // Nome do slice para diferenciar no Redux.
  initialState: {
    list: [], // Estado inicial: lista de usuários.
    loading: false, // Estado inicial: indicador de carregamento.
    error: null, // Estado inicial: erros na requisição.
  },
  reducers: {},
  extraReducers: (builder) => {
    // Adiciona o gerenciamento do estado para requisições assíncronas.
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true; // Define `loading` como `true` enquanto a requisição está em andamento.
        state.error = null; // Remove qualquer erro anterior.
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false; // Define `loading` como `false` quando a requisição é concluída.
        state.list = action.payload; // Armazena os dados dos usuários no estado `list`.
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false; // Define `loading` como `false` quando há um erro.
        state.error = action.error.message; // Armazena o erro no estado `error`.
      });
  },
});

export default userSlice.reducer; // Exporta o reducer para ser usado na store.
