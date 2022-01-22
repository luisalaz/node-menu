require('colors');
const { resolve } = require('path');


const monstrarMenu = () =>{

    return new Promise(resolve =>{
        console.clear('');
        console.log('============================='.green);
        console.log('    Seleccione una Opción'.green);
        console.log('=============================\n'.green);
    
        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas completadas`);
        console.log(`${'4.'.green} Listar Tareas pendientes`);
        console.log(`${'5.'.green} Complear Tarea(s)`);
        console.log(`${'6.'.green} Borrar Tarea(s)`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }); 
    
        readline.question('Seleccione una Opción: ', (opt)=>{
            readline.close();
            resolve(opt);
        })

    });

}

const pausa = () =>{

    return new Promise(resolve =>{

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }); 
    
        readline.question(`Presione ${'ENTER'.green} para Continuar`, (opt)=>{
            readline.close();
            resolve();
        })

    });
   
}

module.exports = {
    monstrarMenu, pausa
}