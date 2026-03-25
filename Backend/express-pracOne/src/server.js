const express = require('express')  // acquiring express from node.js

const app = express()  // putting express.js in app
app.use(express.json()) // saying app that user json()


// Create Endpoint.
// #1 || Test server
app.get('/', (req, res) => {      // this function is called handlers
  res.json({
    message: 'hold a tea server is running !'
  })
})


// #2 || Check data is accessing 
app.get('/menu', (req, res) => {
  res.json({
    items: ['sandwich', 'samosa', 'dry-fruits']
  })
})


// create Database for routing as an object
const traininfo = {
  1: {
    train_no: '12321',
    name: 'Hawrah-Mumbai Mail',
    direction: 'East to West'
  },
  
  2: {
    train_no: '12322',
    name: 'Mumbai-Hawrah Mail',
    direction: 'West to East'
  },

}

let nextID = 3;


// #3  || Access data from object in array format
app.get('/route', (req, res) => {
  res.json(Object.values(traininfo))
})


// #4 || Single route access by id 
app.get('/route/:id', (req, res) => {
  const routerid = traininfo[req.params.id]
  if (!routerid) return res.send(404).json({ error: 'No train id found' })
  res.json(routerid)
})

// #5 || Add new data into Database
app.post('/route', (req, res) => {
  const newroute = { id: nextID++, ...req.body }
  traininfo[newroute.id] = newroute
  res.status(201).json(newroute)
})



// server 
const server = app.listen(0, async () => {
  const port = server.address().port
  const base = `http://localhost:${port}`


  try {
    const postData = await fetch(`${base}/route`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        train_no: '13209.',
        name: 'Mumbai-Patna Exp',
        direction: 'West to East'
      })
    })

    const postDataprocess = await postData.json()
    console.log('GET /router', JSON.stringify(postDataprocess))
  }
  catch (error) {
    console.log(error)
  }

})