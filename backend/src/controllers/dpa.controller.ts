const axios = require('axios');

export const getRegiones = async (req:any, res:any) => {
    await axios.get('https://apis.digital.gob.cl/dpa/regiones/')
    .then(async (response:any) => {
        res.status(200).send(response.data);
    })
    .catch((error:any) => {
        return res.status(500).json(error);
    });
}

export const getComunas = async (req:any, res:any) => {
    const regionId = req.params.id;
    await axios.get('https://apis.digital.gob.cl/dpa/regiones/'+regionId+'/comunas')
    .then(async (response:any) => {
        res.status(200).send(response.data);
    })
    .catch((error:any) => {
        return res.status(500).json(error);
    });
}