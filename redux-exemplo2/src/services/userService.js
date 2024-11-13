// Configurações da API.
import { api } from "../utils/api";
import { requestConfig } from "../utils/requestConfig";

export const fetchUsers = async () => {
  const config = requestConfig("GET");
  const response = await fetch(`${api}/users`, config); // Faz a requisição à API para buscar usuários.
  const data = await response.json(); // Converte a resposta em JSON.
  return data; // Retorna os dados dos usuários.
};
