const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en  consola la tabla de multiplicar', opt)
    .command('crear', 'Genera un archivo con los datos de la tabla de multiplicar solicitados', opt)
    .help()
    .argv;




module.exports = {
    argv
}