export const requestConfig = (method, data = null, token = null, image = null) => {
    let config;
  
    if (image) {
      config = { // Configuração para enviar imagens.
        method,
        body: data,
        headers: {},
      };
    } else if (method === "DELETE" || data === null) {
      config = {
        method,
        headers: {}, 
      }; // Configuração para requisições sem body.
    } else {
      config = {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }; // Configuração para enviar JSON.
    }
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Inclui o token, se fornecido.
    }
  
    return config; // Retorna a configuração completa.
  };
  