

function Chatmessage({ChatmsgStruc}) {

    const messages = [
    {
        message:"Hello",
        sender:"user"
    },
    {
        message:"Hii",
        sender:"robot"
    },
    {
        message:"what is time time ?",
        sender:"user"
    },
    {
        message:{},
        sender:"robot"
    }];

    

  return (

   <>
   {
     messages.map((msg)=>{
        return(
            <>
                <ChatmsgStruc
                    message={msg.message} 
                    sender={msg.sender}
                />
            </>
        )
    })
   }
   </>

   
  )
}

export default Chatmessage