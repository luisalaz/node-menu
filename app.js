require('colors');

const { guardarDB, leerDB } = require('./helpers/gurardarArchivo');
const { inquiereMenu, pausa, leerInput, listadoTareasBorrar, listadoTareasCheckList } = require('./helpers/inquierer');
const Tareas = require('./models/tareas');
// const { pausa } = require('./helpers/mensajes');


console.clear();

const main = async() =>{
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){
        tareas.cargarTareasFromDB(tareasDB);
    }
    
    do{
        
       opt = await inquiereMenu();
       
       switch (opt) {
            case '1':
               //crear tarea;
               const desc = await leerInput('Desripción');
               tareas.crearTarea(desc);
            break;
            case '2':
               //listar tareas;
               tareas.listarCompletado();
            break;
            case '3':
               //listar tareas;
               tareas.listarPendienteCompletadas(true);
            break;
            case '4':
               //listar tareas;
               tareas.listarCompletado();
               tareas.listarPendienteCompletadas(false);
            case '5':
                const ids = await listadoTareasCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
            break;
            case '6':
               const id = await listadoTareasBorrar(tareas.listadoArr);
               tareas.borrarTarea(id);
            break;
       }

       guardarDB(tareas.listadoArr);

       await pausa();

    }while (opt !== '0') {   
    }
}

main();