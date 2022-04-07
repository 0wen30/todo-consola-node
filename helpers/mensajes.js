require('colors');

const mostrarmenu = () => {

    return new Promise (resolve=>{

        console.clear();
        console.log('====================')
        console.log('seleccione un opcion')
        console.log('====================')

        console.log(`${"1.".green} crear tarea`)
        console.log(`${"2.".green} listar tarea`)
        console.log(`${"3.".green} listar tarea completadas`)
        console.log(`${"4.".green} listar tarea pendiente`)
        console.log(`${"5.".green} completar tarea`)
        console.log(`${"6.".green} borrar tarea`)
        console.log(`${"0.".green} salir`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question('seleccione una opcion:',(resp)=>{
            resolve(resp);
            readline.close();
        });
    })

}

const pausa = () => {

    return new Promise (resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question(`Presione ${"enter".green}`,()=>{
            readline.close();
            resolve();
        });
    })
}

module.exports = {
    mostrarmenu,
    pausa
}