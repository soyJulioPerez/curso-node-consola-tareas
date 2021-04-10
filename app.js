require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {
  let opt = '';
  const tareas = new Tareas();

  do {
    console.clear()
    opt = await inquirerMenu();
    switch (opt) {
      case '1': // crear tarea
        const desc = await leerInput('Descripción');
        tareas.crearTarea(desc);

        break;

      case '2':
        console.log(tareas._listado);
        break;

      case '3':

        break;

      default:
        break;
    }
    await pausa();
  } while (opt !== '0');

   pausa();

}

main();
