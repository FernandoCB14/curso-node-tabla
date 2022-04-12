const fs= require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 20) =>{


        try {
                let salida= '';
                let consola = '';

            // console.log('Usando tamplates')
            for (let i=1; i<=hasta; i++){
                salida += `${base} x ${i} = ${base * i }\n`;
                consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i }\n`;
            }

            if(listar){
                console.clear();
                console.log('====================='.green);
                console.log('Tabla del:'.green, colors.blue(base));
                console.log('====================='.green);
                console.log(consola);
            }

            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return `tabla-${base}.txt`
            
        } catch (err) {
            throw err;
            }       
} 

module.exports = {
    crearArchivo
}