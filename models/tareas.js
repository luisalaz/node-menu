const Tarea = require('./tarea');


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

    borrarTarea (id = '') {
        if (this._listado[i]){
            delete this._listado[id];
        }
    }

    cargarTareasFromDB(tareasDB = []){

        tareasDB.forEach(t => {
            this._listado[t.id] = t;
        })

    }


    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listarCompletado (){

        this.listadoArr.forEach((tarea, i) =>{
            const idx= `${i +1}`.green;
            const {desc, completadoEn} = tarea;
            const estado = completadoEn ? 'Completada'.grey : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`);
        })

    }

    listarPendienteCompletadas (completadas = true){

        let number = 0;
        const title = completadas ? 'Completadas' : 'Pendientes';

        console.log('============================='.green);
        console.log(`${title}`.green);
        console.log('=============================\n'.green);
        this.listadoArr.forEach((tarea, i) =>{
            const {desc, completadoEn} = tarea;
            const estado = completadoEn ? true : false;
            if (completadas === estado){
                const idx= `${number +1}`.green;
                console.log(`${idx} ${desc}`);
            }
            
        })

    }

    toggleCompletadas(ids=[]){
        ids.forEach(id =>{
            const tarea = this._listado[id];

            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        })

        this.listadoArr.forEach(t =>{
            if (!ids.includes(t.id)){
                this._listado[t.id].completadoEn = null;
            }

        })
    }
}

module.exports = Tareas;