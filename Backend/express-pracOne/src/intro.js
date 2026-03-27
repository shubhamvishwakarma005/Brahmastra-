const express = require('express')
const app = express()

app.use(express.json())

// #0
app.get('/', (req, res)=>{
   res.json({
     message:'hold the tea server is running '
   }) 
})

// #1 | menu
app.get('/menu', (req, res)=>{
    res.json({
        dishes:["Daal", "Chawal", "Paneer", "Raita", "Aachar", "Papad"]
    })
})

// #2 | search
app.get('/search', (req, res)=>{
   const {qry, lim} = req.query
    res.json({
        query:qry,
        Limit:lim 
    })
})

// #3 |menu|  Route parameters
                    //  (handlers)
app.get('/menu/:id', (req, res)=>{
    const {id} = req.params
    res.json({
        Id:id,
        Price: 299
    })
})

// #4 | POST
app.post('/order', (req, res)=>{
    const order = req.body
    res.status(201).json({
        status:'Order recieved',
        Order:order
    })
})
 



// server 
const server =  app.listen(0, async ()=>{
    const port = server.address().port
    const base = `http://localhost:${port}`
    // console.log(base)


//********* Frontend data ***********

try {
    
    // #1 | menu
   const menuRes = await fetch (`${base}/menu`)
   const menuData = await menuRes.json()
//    console.log('GET /menu', JSON.stringify(menuData))

// ########################################################

    // #2 | search
    const searchRes = await fetch (`${base}/search?qry=samosa&lim=20`)
    const searchData = await searchRes.json()
    // console.log('GET /search', JSON.stringify(searchData))

// ########################################################

    // #3 | menu_Id
    const menuIdRes = await fetch (`${base}/menu/3393`)
    const menuIdData = await menuIdRes.json()
    // console.log('POST /menu/:id', JSON.stringify(menuIdData))

 // ########################################################   
   
    // #4 | order
    const orderRes = await fetch (`${base}/order`, {
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            dishes:["Naan", "Palak-paneer", "Aachar"],
            qty:5
        })
    })

    const orderData = await orderRes.json()
    // console.log('POST /search', JSON.stringify(orderData))

} catch (error) {
    throw error
}

server.close(()=>{
    console.log('Task completed..!')
})

})






