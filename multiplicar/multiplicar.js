const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================================='.red);
    console.log(`======  tabla del ${base}  ==========`.red);
    console.log('================================='.red);


    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de ${base} no es un número`);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            let total = base * i;
            data += `${base} * ${i} = ${total}\n`;
        }

        resolve(data);

    });


}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (i = 1; i <= limite; i++) {
            let total = base * i;
            data += `${base} * ${i} = ${total}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}_base_1-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.blue);
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}