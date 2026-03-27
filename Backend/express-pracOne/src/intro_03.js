const express = require('express')
const app = express()
app.use(express.json())

// #0 | Test

   //   path || handler
app.get('/', (req, res) => {
    res.json({
        message: 'hold a tea server is running '
    })
})


// create DATABASE for routing 
const route = {
    1: {
        no: '12321',
        name: 'Hawrah-Mumbai Mail',
        direction: 'East to West'
    },
    2: {
        no: '12322',
        name: 'Mumbai-Hawrah Mail',
        direction: 'West to East'
    },
}

let nextID = 3

 
// # 1 | ROUTING | list all trains
app.get('/train-list', (req, res)=>{
    res.json(Object.values(route))   // <== array of object
})

// # 2 || train names
app.get('/train-name', (req, res)=>{
    res.json({name:route.name})
})

// #3 | train id
app.get('/train/:no', (req, res)=>{
   const train_no = route[req.params.no]
   if(!train_no) return res.status(404).json({error:'no train found'})
    res.json(train_no)
})

app.post('/newTrain', (req, res)=>{
    const addTrain = {no:13201, name:"Ltt-Patna", direction:"Mumbai to Patna"}
     const addnewTrain = route.push(addTrain)
     req.json(addnewTrain)
})


// CURD OPERATION 


// server  

const server = app.listen(0, async () => {
    const port = server.address().port

    console.log(`http://localhost:${port}`);
})

