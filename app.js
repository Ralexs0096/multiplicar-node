const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTable } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch( comando ){

    case 'listar':
        listarTable(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Created file: ${ archivo }`.blue))
            .catch(e => console.log('Ah ocurrido un error: '.red,e));
        break;

    default:
        console.log('Comando no reconocido'.red);

}

