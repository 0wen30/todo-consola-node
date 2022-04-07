require('colors');

const {menu,pausa,leerInput,listadoTareasBorrar,confirmacion,listadoTareasCompletar} = require('./helpers/inquirer');
const Tarea = require('./models/tarea.class');
const Tareas = require('./models/tareas.class');
const {guardarDB,cargarDB} = require('./helpers/guardarArchivo');

console.clear();

const main = async() =>{
let respuesta = "";
const tareas = new Tareas();

if (cargarDB()) tareas.cargarTareasFromArray(cargarDB())


    do{
        respuesta = await menu();
        switch (respuesta) {
            case '1':
                const descripcion = await leerInput('Descripcion:');
                tareas.crearTarea(descripcion);
                break;
            case '2':
                console.log(tareas.listadoCompleto())
                break;
            case '3':
                console.log(tareas.listarPendientesCompletadas(true));
                break;
            case '4':
                console.log(tareas.listarPendientesCompletadas(false));
                break;
            case '5':
                const resultado = await listadoTareasCompletar(tareas.listadoArr);
                tareas.completarTarea(resultado)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id!=='0'){
                    const confirm = await confirmacion()
                    if (confirm){
                        tareas.borrarTarea(id);
                        console.log('has borrado la tarea')
                    }
                }
                break;
        }
        guardarDB(JSON.stringify(tareas.listadoArr));
        await pausa();
    } while (respuesta != '0');

}

main();