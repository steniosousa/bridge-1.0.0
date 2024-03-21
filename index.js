const { default: axios } = require("axios")
const express = require("express")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('funcionando')
})

app.post('/auth', async (req, res) => {
    const { key } = req.body
    const { data } = await axios.post('http://sistema.selletiva.com.br/serverapp/auth', { key })
    res.send(data)

})

app.listen(port, () => {
    console.log('project running')
})