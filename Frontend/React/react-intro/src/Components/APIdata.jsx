import { useEffect, useState } from "react";

function RandomUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://api.freeapi.app/api/v1/public/randomusers/13";

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(url);
        const data = await res.json();

        // 👇 API structure check kar (important)
        setUsers(data?.data?.data || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px"
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  image: {
    borderRadius: "50%",
    width: "100px",
    height: "100px"
  }
};

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={styles.container}>
      {users.map((user, index) => (
        <div key={index} style={styles.card}>
          <img src={user.picture.large} alt="user" style={styles.image} />
          <h3>{user.name.first} {user.name.last}</h3>
          <p>{user.email}</p>
          <p>{user.location.city}, {user.location.country}</p>
        </div>
      ))}
    </div>
  );
}

export default RandomUsers;