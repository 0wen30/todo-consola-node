const fs = require('fs');
const archivo = "./db/data.json";
const guardarDB = (data) => fs.writeFileSync(archivo, data);

const cargarDB = () => {

    if (!fs.existsSync(archivo)) {
        return null;
    }

    const data = fs.readFileSync(archivo,{encoding:'utf-8'});

    return JSON.parse(data);
}

module.exports = {
    guardarDB,
    cargarDB
}