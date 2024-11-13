import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Hooks do Redux para acessar estado e despachar ações.
import { getUsers } from "../slices/userSlice";

const useFetchUsers = () => {
  const dispatch = useDispatch(); // Permite despachar ações para o Redux.
  const { list, loading, error } = useSelector((state) => state.users); // Seleciona o estado dos usuários.

  useEffect(() => {
    dispatch(getUsers()); // Despacha a ação de busca de usuários ao montar o componente.
  }, [dispatch]);

  return { list, loading, error }; // Retorna os dados e status.
};

export default useFetchUsers;
