

function Chatmessages() {

    const messages = [
    {
        message:"Hello",
        sender:"user",
        id:"01"
    },
    {
        message:"Hii",
        sender:"robot",
        id:"02"
    },
    {
        message:"what is time time ?",
        sender:"user",
        id:"03"
    },
    {
        message:"2.pm",
        sender:"robot",
        id:"04"
    }];


  return ( 

    messages.map((msg) => {
            return (
                <div key={msg.id} >
                    {msg.sender === "robot" && <img src="\robot.png" width={50}/> } 
                    {msg.message}
                    {msg.sender === "robot" && <img src="\user.png" width={50}/> }
                </div>
                    
            )
        })

  )
}

export default Chatmessages