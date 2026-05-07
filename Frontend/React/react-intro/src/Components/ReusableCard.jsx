const users = [
  {
    id: 1,
    name: "Rahul",
    role: "role_user",
    power: "low"
  },
  {
    id: 2,
    name: "Amit",
    role: "role_admin",
    power: "high"
  },
  {
    id: 3,
    name: "Sneha",
    role: "role_manager",
    power: "medium"
  },
  {
    id: 4,
    name: "Priya",
    role: "role_user",
    power: "low"
  },
  {
    id: 5,
    name: "Karan",
    role: "role_editor",
    power: "medium"
  }
];


function UserCard({usr}){
    return(
        <div style={{display:"grid",border:"2px solid yellow", padding:"20px", margin:"10px", borderRadius:"20px"}}>
            <h5>{usr.id}</h5>
            <h1>{usr.name}</h1>
            <h4>{usr.Role}</h4>
            <h4>{usr.power}</h4>
        </div>
    )
}


function ReusableCard(){

    return(
        <div style={{display:"flex"}}>
            {users.map((crdUsers)=>(<UserCard  key={crdUsers.id} usr={crdUsers}/>))} 
        </div>
    )
}

export default ReusableCard