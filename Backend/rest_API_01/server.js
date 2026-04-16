import "dotenv/config"
import app from "./src/app"

const PORT = process.env.PORT || 5000


const start = async() =>{

    // db connected 
   await connectDB() 

    app.listen(PORT, ()=>{
        console.log(`server is running at ${PORT} at ${process.env.NODE_ENV}`)
    })
}

start().catch((err)=>{
    console.log(`FAILED TO START SERVER`, err)
    process.exit(1)
})
