

function ChatmsgStruc({sender, message}) {

  return (
     <div>
       {sender === "robot"  && <img src="public\robot.png" alt="robot-img" width="50px"/>}
       {message}
        {sender === "user" && <img src="public\user.png" alt="user-img" width="50px"/>}
    </div>
  )
}

export default ChatmsgStruc