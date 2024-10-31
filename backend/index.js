import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const port = 3000

app.get('/', (req, res) => {

    const data = {
        message: 'We are Under Construction We are improving our website We will be back as soon as possible with new cool features!'
    }
    res.json(data)
})

app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})