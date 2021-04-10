const Tarea = require("./tarea");

/*
* _listado
* {'uuid-1111-2222-3333': {id: 12, desc: 'descripcion', completadoEn: 92931}}
*/

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea( desc='') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
