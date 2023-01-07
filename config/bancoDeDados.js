// config/bancoDeDados.js
const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(process.env.URL_BANCO_DE_DADOS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Conexão padrão do Mongoose está aberta');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Ocorreu um erro na conexão padrão do Mongoose: ${err}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Conexão padrão do Mongoose está desconectada');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(
        'Conexão padrão do Mongoose foi desconectada devido ao término da aplicação',
      );
      process.exit(0);
    });
  });
};
