import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import xml2js from 'xml2js'

const app = express()

app.use(express.json())
app.use(cors())

const port = 3000

app.get('/data/:query', async (req, res) => {
    const query = req.params.query
    console.log(query)

    const url = 'http://10.1.6.16:9001/SpoaWebServices/ConsultaConveniosWS'
    const param = '?invoke=consultaConvenio&param0='
    const xml = `<ConsultaConveniosWS>
    <EncabezadoConsulta>
    <Ip>192.168.45.199</Ip>
    <Mac>2c:41:39:a1:f8:e9</Mac>
    <Host>pc47</Host>
    <NombreConvenio>ConsultaWeb_WS</NombreConvenio>
    <Usuario>CONSULTAWEB_WS</Usuario>
    <IdAuditoria>123456</IdAuditoria>
    </EncabezadoConsulta>
    <ParametrosConsulta>
    <Parametro>
    <Llave>caso_noticia</Llave>
    <Valor>${query}</Valor>
    </Parametro>
    </ParametrosConsulta>
    </ConsultaConveniosWS>`

    const urlComplete = url + param + xml

    const user = 'administrador'
    const pass = '123'
    
    const headers = {
        'Authorization': `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`,
        'Content-Type': 'text/xml'
    }

    try {   
        const response = await fetch(urlComplete, {
            method: 'GET',
            headers: headers,
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.text();
        res.send(data)

    } catch (error) {
        res.status(500).json({ error: 'Error al consultar la API', message: error.message });
    }

})

app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})