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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 2fr))",
        gap: "20px",
        padding: "30px",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        minHeight: "100vh",
        marginTop: "20px"
      }}
    >
      {students.map((stud) => (
        <div
          key={stud.id}
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          <h2 style={{ marginBottom: "10px", color: "#333" }}>
            {stud.name}
          </h2>

          <p style={{ margin: "5px 0", color: "#555" }}>
            🎂 Age: {stud.age}
          </p>

          <p style={{ margin: "5px 0", color: "#777" }}>
            🎓 Course: {stud.course}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DisplayElmt;