const students = [
  { id: 1, name: "Rahul", age: 20, course: "BCA" },
  { id: 2, name: "Aman", age: 21, course: "BSc IT" },
  { id: 3, name: "Priya", age: 19, course: "BCom" },
  { id: 4, name: "Neha", age: 22, course: "BBA" },
  { id: 5, name: "Arjun", age: 20, course: "BTech" },
  { id: 6, name: "Riya", age: 21, course: "MBA" }
];

function DisplayElmt() {

  return (
    <div style={{display:"flex", marginTop:"20px"}}>
      {students.map( (stud)=>(
        <div style={{display:"grid",border:"2px solid red", padding:"20px", margin:"10px", borderRadius:"20px"}}>
        <h1>{stud.name}</h1>
        <h2>{stud.age}</h2>
        <h2>{stud.course}</h2>
        </div>
      ) )}
    </div>
  )
}
export default DisplayElmt