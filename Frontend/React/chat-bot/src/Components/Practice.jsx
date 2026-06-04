
function Practice() {

    const fruits = ["Apple", "Banana", "Mango"];

    const users = [
                    { name: "Rahul" },
                    { name: "Aman" },
                    { name: "Priya" }
                 ];

    const products = [
                        { name: "Laptop", price: 50000 },
                        { name: "Mouse", price: 500 }
                   ];

    
    const messages = [
  { text: "Hello", sender: "user" },
  { text: "Hi", sender: "robot" },
  { text: "How are you?", sender: "user" }
];



 const numbers = [1, 2, 3, 4, 5];

  return (

    <>
    {/* 1 */}
     <ul>
        {fruits.map((frt) => {
           return <li key={frt}>{frt}</li>
        })}
    </ul>

   {/* 2 */}
    <ul>
        {users.map((usr)=>{
            return <li key={usr.name}>{usr.name}</li>
        })}
    </ul>

  {/* 3 */}
    {products.map((prod)=>{
        return (
            <div key={prod.price}>
                <h1>{prod.name}</h1>
                <h3>₹ {prod.price}</h3>
            </div>
        )
    })}

 {/* 4 */}

  {messages.map((msg)=>{
    return(
        <p key={msg.text}>
            {msg.sender === "user" ? "user :" + msg.text : "robot :"+ msg.text}
        </p>
    )
  })}

  {/* 5 */}


   {numbers.map((no)=>{
    return (
        <h2 key={no}>{no*2}</h2>
    )
   })}


    </>
   
  )
}

export default Practice