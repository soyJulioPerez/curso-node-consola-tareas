const Tarea = require('./tarea');
require('colors');

/*
* _listado
* {'uuid-1111-2222-3333': {id: 12, desc: 'descripcion', completadoEn: 92931}}
*/

class Tareas {
  _listado = {};
  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTarea( desc='') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  cargarTareas( tareas = []) {
    tareas.forEach(tarea => this._listado[tarea.id] = tarea);
  }

  listarTareas(tareas = []) {
    console.log();

    tareas.forEach( (tarea,i) => {
      const status = (tarea.completadoEn) ? 'completada'.green : 'pendiente'.red;
      const linea = (i+1) + `. ${tarea.desc} :: ${status}`;
      console.log(linea);
    });
  }

  listarPorStatus(completadas = true) {
    console.log();

    const tareas = this.listadoArr.filter(tarea => completadas === !!tarea.completadoEn);
    this.listarTareas(tareas);

  }

}

module.exports = Tareas;
