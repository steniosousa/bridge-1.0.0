const { default: axios } = require("axios")
const express = require("express")
const cors = require('cors');
const app = express()
const port = 3000
app.use(cors({
    origin: "*", // Allow requests from all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all HTTP methods
    headers: ["Content-Type", "Authorization", "X-Requested-With"], // Allow all headers
    credentials: true, // Allow cookies to be sent with requests
}));
app.get('/', (req, res) => {
    res.send('funcionando')
})

app.post('/auth', async (req, res) => {
    const { key } = req.body
    const { data } = await axios.post('http://sistema.selletiva.com.br/serverapp/auth', { key })
    res.send(data)

})

app.listen(process.env.PORT || port, () => {
    console.log('project running')
})