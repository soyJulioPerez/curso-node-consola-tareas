require('colors');

const { guardarDB, leerDB } = require('./helpers/fileService');
const { inquirerMenu, pausa, leerInput, listarTareas, confirmar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {
  let opt = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();
  if (tareasDB) {
    tareas.cargarTareas(tareasDB);
  }

  do {
    console.clear()
    opt = await inquirerMenu();
    switch (opt) {
      case '1': // crear tarea
        const desc = await leerInput('Descripción');
        tareas.crearTarea(desc);
        guardarDB(tareas.listadoArr);
        break;

      case '2':
        tareas.listarTareas(tareas.listadoArr);
        break;

      case '3':
        tareas.listarPorStatus(true);
        break;

      case '4':
        tareas.listarPorStatus(false);
        break;

      case '5':
        guardarDB(tareas.listadoArr);
        break;
      case '6':
        const id = await listarTareas(tareas.listadoArr);
        // id === '0' Canceló el proceso
        if (id !== '0') {
          const ok = await confirmar('Está seguro de eliminar?');
          if (ok){
            await tareas.borrarTarea(id);
            console.log('Tarea eliminada');
            guardarDB(tareas.listadoArr);
          }
        }
        break;

      default:
        break;
    }

    await pausa();

  } while (opt !== '0');

}

main();
