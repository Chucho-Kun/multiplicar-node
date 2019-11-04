const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(console.log).catch(console.log);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(console.log);
        break;

    default:
        console.log('comando no reconocido...');

}


//let base = '34';


//console.log(process.argv);
//let argv2 = process.argv;
//let parametro = argv[2];


//let base = parametro.split('=')[1];


//console.log('Limite', argv.base);


//console.log(argv2);