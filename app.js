const { mostrarMenu, pausa } = require('./helpers/mensajes');

require('colors');

const main = async() => {
  console.clear();
  console.log('Hola Mundo');

  mostrarMenu();
  pausa();

}

main();
