// config/autenticacao.js
const jwt = require('jwt-simple');

module.exports = {
  criarToken: (usuario) => {
    const agora = new Date().getTime();
    const expiraEm = agora + 7 * 24 * 60 * 60 * 1000; // 7 dias

    return jwt.encode({
      sub: usuario.id,
      iat: agora,
      exp: expiraEm,
    }, process.env.SECRETO);
  },
  decodificarToken: (token) => {
    try {
      const dados = jwt.decode(token, process.env.SECRETO);
      if (dados.exp < new Date().getTime()) {
        return null;
      }
      return dados;
    } catch (err) {
      return null;
    }
  },
};
