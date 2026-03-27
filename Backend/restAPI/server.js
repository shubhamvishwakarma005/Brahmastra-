import "dotenv/config"  //dotenv module
import app from "./src/app.js"   //app file
import connectDB from "./src/common/config/db.js"  //db file

const PORT = process.env.PORT || 5000   // port



const start = async ()=>{

    // connect to db
    await connectDB()           // db file connect

    app.listen(PORT, ()=>{
        console.log(`server is running in port :${PORT}`)   // assign port 
    })
}

start().catch((error)=>{
   console.error(`failed to start server :${error}`)    // check server error
   process.exit(1)
})




