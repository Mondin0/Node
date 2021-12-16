const express = require('express')
const app = express()
const cors = require('cors')
const PORT=process.env.PORT || 3000

app.use(cors())
app.use(express.json())

let datos={
    "nombre":"Juan",
    "apellido":"Perez",
    "edad":20,
}

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'application/json')
    res.send(datos)
})

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!')
})