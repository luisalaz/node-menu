const { green } = require('colors');
const inquirer = require('inquirer');
require('colors');

const opts = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear tarea`
            },
            {
                value: '2',
                name: `${'2'.green}. Listar tareas`
            },
            {
                value: '3',
                name: `${'3'.green}. Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4'.green}. Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5'.green}. Completar tareas`
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar tareas`
            }
            ,
            {
                value: '0',
                name: `${'0'.green}. Borrar tareas`
            }
    ]
}
];

const inquiereMenu = async() => {
    console.clear('');
    console.log('============================='.green);
    console.log('    Seleccione una Opción'.green);
    console.log('=============================\n'.green);

    const {option} = await inquirer.prompt(opts);
    return option;
}

const pausa = async() =>{
    const optionsPause = [
        {
            type: 'input',
            name: 'option',
            message: `Presione ${'ENTER'.green} para Continuar`
        }
    
    ];
    await inquirer.prompt(optionsPause);
}

const leerInput = async( message ) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas = []) =>{

    const choices = tareas.map((t,i) =>{
        const idx = `${i+1}`.green;
        return {
            value : t.id,
            name :`${idx} ${t.desc}`
        }
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: '¿Seleccione la tarea a eliminar?',
            choices
    }
    ];

    const {id} = await inquirer.prompt(preguntas);
    return id;

}

const listadoTareasCheckList = async(tareas = []) =>{

    const choices = tareas.map((t,i) =>{
        const idx = `${i+1}.`.green;
        return {
            value : t.id,
            name :`${idx} ${t.desc}`,
            checked: t.completadoEn ? true : false
        }
    })

    // choices.unshift({
    //     value: '0',
    //     name: '0.'.green + ' Cancelar'
    // });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
    }
    ];

    const {ids} = await inquirer.prompt(preguntas);
    return ids;

}

module.exports = {
    inquiereMenu, pausa, leerInput, listadoTareasBorrar,listadoTareasCheckList
}