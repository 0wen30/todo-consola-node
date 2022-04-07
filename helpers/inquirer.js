const inquirer = require('inquirer');
require('colors');

const opciones = [{
    type:'list',
    name:'opcion',
    message:'que desea hacer',
    choices:[
    {name:`${"1.".green} crear tarea`,value:'1'},
    {name:`${"2.".green} listar tarea`,value:'2'},
    {name:`${"3.".green} listar tarea completadas`,value:'3'},
    {name:`${"4.".green} listar tarea pendiente`,value:'4'},
    {name:`${"5.".green} completar tarea`,value:'5'},
    {name:`${"6.".green} borrar tarea`,value:'6'},
    {name:`${"0.".green} salir`,value:'0'},
    ]
}]

const menu = async () => {

    console.clear();
    console.log('====================')
    console.log('seleccione un opcion')
    console.log('====================')

    const {opcion} = await inquirer.prompt(opciones);

    return opcion
}

const ppausa = [{
    type:'input',
    name:'pausa',
    message:'presiona una tecla',
}]

const pausa = async () => {

    await inquirer.prompt(ppausa);

}

const leerInput = async (mensaje) => {

    const question = [{
        type:'input',
        name:'desc',
        message:mensaje,
        validate(value){
            return value.length === 0 
                ? 'Por favor ingresa un valor'
                : true
        }
    }]

    const {desc} = await inquirer.prompt(question);

    return desc;

}

const listadoTareasBorrar = async (tareas = []) => {
    const opciones = [{
        type:'list',
        name:'opcion',
        message:'Borrar Tarea',
        choices:tareas.map((t,i)=>({name:t.desc,value:t.id}))
    }]

    opciones[0].choices.unshift({
        name: "No borrar nada",
        value: '0'
    })

    const {opcion} = await inquirer.prompt(opciones);

    return opcion
}


const confirmacion = async () => {
    const opcion = [{
        type:'confirm',
        name:'confirmacion',
        message:'Estas seguro de eliminar la tarea?',
    }]

    const {confirmacion} = await inquirer.prompt(opcion);

    return confirmacion;

}

const listadoTareasCompletar = async (tareas = []) => {
    const opciones = [{
        type:'checkbox',
        name:'opcion',
        message:'Marcar Tareas',
        choices:tareas.map((t,i)=>({name:t.desc,checked: t.completadoEn,value:t.id}))
    }]

    const {opcion} = await inquirer.prompt(opciones);

    return opcion
}


module.exports = {
    menu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmacion,
    listadoTareasCompletar
}