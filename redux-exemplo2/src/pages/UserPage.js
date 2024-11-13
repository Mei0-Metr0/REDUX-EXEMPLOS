import useFetchUsers from "../hooks/useFetchUsers"; // Hook personalizado para buscar dados.
import UserCard from "../components/UserCard";

const UserPage = () => {
  const { list, loading, error } = useFetchUsers(); // Extrai dados e status do hook.

  if (loading) return <p className="text-center">Carregando usuários...</p>;
  if (error) return <p className="text-center text-danger">Erro ao carregar usuários: {error}</p>; // Exibe o erro, se houver.

  return (
    <div>
      <h2 className="text-center mb-4">Lista de Usuários</h2>
      <div className="row">
        {list.map((user) => (
          <UserCard key={user.id} user={user} /> // Renderiza cada usuário com o componente `UserCard`.
        ))}
      </div>
    </div>
  );
};

export default UserPage;
