const { red, blue, greenyellow } = require('color-name');
const fs = require('fs'); 


let listarTable = (base, limite) => {
    console.log('*************************'.green);
    console.log(`      Tabla del ${ base }`.green);
    console.log('*************************'.green);
    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i} \n`.green);
    }
}

let crearArchivo = (base, limite = 10) =>{

    return new Promise((resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor "${ base }" no es un numero`);
            return;
        }
        
        let data = '';

        for(let i = 1; i <= limite; i++){
            data += (`${base} * ${i} = ${base * i} \n`);
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err)
            else 
                resolve(`The file table ${ base } has been saved!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTable
}