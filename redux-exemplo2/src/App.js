import UserPage from "./pages/UserPage";
import "./styles/custom.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Importa os estilos do Bootstrap para usar no projeto.

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            Exemplo de Redux com Estrutura Organizada
          </a>
        </div>
      </nav>
      <div className="container">
        <UserPage /> {/* Renderiza o componente da página de usuários */}
      </div>
    </div>
  );
};

export default App;
