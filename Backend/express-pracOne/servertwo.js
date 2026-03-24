const express = require('express')

const app = express()
app.use(express.json())

// const port = 3000  // manual port value

// http methods 
// app.get
// app.post
// app.put
// app.delete
// app.patch

// app.get('/', (req, res)=>{

// #1 
//   try {
//      res.json({
//     message:'hold a coffee, server is running '
//   }) 
//   } catch (error) {
//     console.log(error)
//   }

// #2 
// res.download('server.js')

// #3
// res.render()

// })


// EndPoint 
app.get('/menu', (req, res) => {
  res.json({
    message: 'hold a tea server is running '
  })
})


// EndPoint  || search || query parameter
app.get('/search', (req, res) => {
  const { query, limit } = req.query
  res.json({
    Query: query,
    Limit: limit
  })
})

// EndPoint || route-parameters
app.get('/recipt/:id', (req, res) => {
  const { id } = req.params
  res.json({
    ID: id,
    Price: 249
  })

})

app.post('/order', (req, res) => {
  const order = req.body
  res.status(201).json({
    Status: 'recieved',
    Order: order
  })
})




// const port = process.env.PORT

const server = app.listen(0, async () => {
  const port = server.address().port
  const base = `http://127.0.0.1:${port}`

  try {
    const menuData = await fetch(`${base}/menu`)
    const data = menuData.json()
    console.log('GET /menu', JSON.stringify(data))

    console.log('################################');

    // query || search 
   const searchRes = await fetch(`${base}/search?query=momos&limit=6`)
   const searchdata = searchRes.json()
    console.log('GET /search', JSON.stringify(searchdata))

    console.log('################################');

    // params
   const params = await fetch(`${base}/recipt/32`)
   const paramsData = params.json()
    console.log('POST /recipt', JSON.stringify(paramsData))

        console.log('################################');

      const orderresponse = await fetch(`${base}/order`, {
        method:'POST',
        headers:{
          'content-Type': 'application/json',
           body:JSON.stringify({
            message:'hello "POST" method payload '
          })
        }
      })

      const orderData = await orderresponse.json()
      console.log('GET /order', JSON.stringify(orderData))

  }
  catch (error) {
    console.log(error)
  }

})

// server.close(()=>{
//   console.log(`server is running `)
//   resolve()
// })

// console.log(`Server:`, server)


?qry=coffee&lim

