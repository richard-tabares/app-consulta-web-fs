import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3000

app.get('/data/:query', async (req, res) => {
    const query = req.params.query

    const url = process.env.URL
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

    const user = process.env.USER
    const pass = process.env.PASS

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
            throw new Error(`Error: ${response.statusText}`)
        }

        const data = await response.text()
        res.send(data)

    } catch (error) {
        res.status(500).json({ error: 'Error al consultar la API', message: error.message })
    }

})

app.get('/verifyrecaptcha/:token', async (req, res) => {

    const secret = process.env.RECAPTCHA_TOKEN
    const token = req.params.token
    const body = new URLSearchParams()
    body.append('secret', secret)
    body.append('response', token)
    const url = process.env.URL_VERIFY_GOOGLE
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    try {

        const response = await fetch(url, {

            method: 'POST',
            headers: headers,
            body: body

        })

        if (!response.ok) {

            throw new Error(`Error: ${response.statusText}`)

        }

        const data = await response.json()
        res.json(data)

    } catch (error) {

        res.status(500).json({ error: 'Error al consultar la API', message: error.message })

    }


})

app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})