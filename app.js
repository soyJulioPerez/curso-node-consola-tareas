const { mostrarMenu, pausa } = require('./helpers/mensajes');
require('colors');

console.clear();
const main = async() => {
  console.log('Hola Mundo');

  let opt = '';

  do {
    opt = await mostrarMenu();
    console.clear()
    console.log('La opción seleccionada fue: ', {opt});

    if (opt !== '0') { await pausa(); }

  } while (opt !== '0');

  // pausa();

}

main();
