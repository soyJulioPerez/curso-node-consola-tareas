require('colors');
const { inquirerMenu } = require('./helpers/inquirer');

console.clear();
const main = async() => {
  console.log('Hola Mundo');

  let opt = '';

  do {
    opt = await inquirerMenu();
    // console.clear()
    console.log('La opción seleccionada fue: ', {opt});


  } while (opt !== '0');

  // pausa();

}

main();
