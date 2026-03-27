const express = require('express')

const app = express()
app.use(express.json())


// # 1 | res.json()
app.get('/', (req, res) => {
    res.json({
        message: `server is running`
    })
})

// # 2 | res.send()
app.get('/check', (req, res) => {
    res.send('Hold a tea server is running ')
})

// # 3 | status
app.get('/restricted', (req, res) => {
    res.status(404).json({
        error: 'Page not found'
    })
})

// # 4 | sendStatus
app.get('/health', (req, res) => {
    res.sendStatus(200)
})

// # 5 | redirect
app.get('/old_id', (req, res) => {
    res.redirect(301, '/new_id')
})

// # 6 | xml data 
app.get('/xml', (req, res) => {
    res.type('application/xml').send(`
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`)
})

// #7 | custom-header
app.get('/custom-header', (req, res)=>{
    res.set('x-customised')
    res.json({
        x_custom_json:'x-this is custom section'
    })
})

// server 
const server = app.listen(0, async () => {
    const port = server.address().port
    // const base = `http://localhost:${port}`

    console.log(`http://localhost:${port}`);


    //********* Frontend data ***********

    // try {


    // } catch (error) {
    //     throw error
    // }

})


// server.close(()=>{
//     console.log('Task Completed')
// })