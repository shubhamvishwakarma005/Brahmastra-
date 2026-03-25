const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    return 'hold the tea server is running '
})


const server =  app.listen(0, async ()=>{
    const PORT = server.address.PORT

    return `http://localhost:${PORT}`
})