require('colors');
const Tarea = require('./tarea.class');

class Tareas {

    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        return Object.keys(this._listado).map(key=>this._listado[key])
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => this._listado[tarea.id] = tarea);
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        let listado = "";
        this.listadoArr.forEach((tarea,i)=>{
            listado+=`${i+1}.${tarea.desc}::${ tarea.completadoEn ? "completada".green : "pendiente".red}\n`
        })
        return listado
    }

    listarPendientesCompletadas(completadas = true){
        let listado = "";
        this.listadoArr.filter(t=>t.completadoEn===completadas).forEach((tarea,i)=>{
                listado+=`${i+1}.${tarea.desc}::${ tarea.completadoEn ? "completada".green : "pendiente".red}\n`
        })
        return listado
    }

    completarTarea(arraydeid=[]){
        this.listadoArr.forEach(tarea => this._listado[tarea.id].completadoEn = arraydeid.includes(tarea.id))
    }

    borrarTarea(id=""){
        if(this._listado[id]){
            delete this._listado[id]
        }
    }

}

module.exports = Tareas;