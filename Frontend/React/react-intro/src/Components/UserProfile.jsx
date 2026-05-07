const users = [
  {
    id: 1,
    name: "Rahul",
    role: "role_user",
    power: "low",
    age: 22,
    email: "rahul@gmail.com",
    city: "Mumbai",
    isActive: true,
    skills: ["HTML", "CSS"],
    experience: "1 year"
  },
  {
    id: 2,
    name: "Amit",
    role: "role_admin",
    power: "high",
    age: 28,
    email: "amit@gmail.com",
    city: "Pune",
    isActive: true,
    skills: ["React", "Node.js"],
    experience: "4 years"
  },
  {
    id: 3,
    name: "Sneha",
    role: "role_manager",
    power: "medium",
    age: 25,
    email: "sneha@gmail.com",
    city: "Delhi",
    isActive: false,
    skills: ["Java", "Spring"],
    experience: "3 years"
  },
  {
    id: 4,
    name: "Priya",
    role: "role_user",
    power: "low",
    age: 21,
    email: "priya@gmail.com",
    city: "Bangalore",
    isActive: true,
    skills: ["JavaScript", "React"],
    experience: "1.5 years"
  },
  {
    id: 5,
    name: "Karan",
    role: "role_editor",
    power: "medium",
    age: 26,
    email: "karan@gmail.com",
    city: "Hyderabad",
    isActive: false,
    skills: ["Python", "Django"],
    experience: "2 years"
  }
];


function Profiles({user}){
    return(
        <div>
            <p>{user.id}</p>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
            <h2>{user.role}</h2>
            <p>{user.city}</p>
            <p>{user.email}</p>
            <p>{user.skills}</p>
        </div>
    )
}

function UserProfileCard(){
    return(
        <div>
            {users.map((emp)=>(
            <Profiles  key={emp.id} user={emp}/>
        ) )}
        </div>
    )
}

export default UserProfileCard