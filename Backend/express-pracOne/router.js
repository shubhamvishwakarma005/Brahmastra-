const express = require('express')
const app = express()
app.use(express.json())


// create data for routing as an object
const route = {
    1: {
        id: '12321',
        name: 'Hawrah-Mumbai Mail',
        direction: 'East to West'
    },
    2: {
        id: '12322',
        name: 'Mumbai-Hawrah Mail',
        direction: 'West to East'
    },

}

let nextID = 3;


app.get('/route', (req, res) => {
    res.json(Object.values(route))
})


// single route by ID 
app.get('/route/:id', (req, res) => {
    const router = route[req.params.id]
    if (!router) return res.status(404).json({ error: 'No tran on this "ID"' })
    res.json(router)
})

// add new data in database  
app.post('/route', (req, res) => {
    const newroute = {id:nextID++, ...req.body}
    route[newRoute.id] = newroute
    res.json(201).json(newroute)
})

// put 
app.put('/route/:id', (req, res)=>{
   const id =  req.params.id
   if(!route.id) return res.status(404).json({error:'route id error'})
    route[id] = {id:Number(id), ...req.body}
})

// patch 

// delete 
app.delete('/route/:id', (req, res)=>{
    const id = req.params.id
    if(!route.id) return res.status(404).json({error:'route id error'})
        delete route[id]
    res.status(202).end()

})

const server = app.listen(0, () => {
    const port = server.address().port

    console.log(`http://localhost:${port}`)
})