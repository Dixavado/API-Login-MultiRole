// config/middleware.js
const autenticacao = require('./autenticacao');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
  app.use(cookieParser());

  app.use((req, res, next) => {
    if (!req.cookies.token) return next();

    const usuario = autenticacao.decodificarToken(req.cookies.token);

    if (usuario) {
      req.usuario = usuario;
    }

    next();
  });
};
