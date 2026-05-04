import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "sans-serif"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Counter: {count}
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "red",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          + Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          - Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            padding: "10px 20px",
            backgroundColor: "gray",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Reset
        </button>

      </div>
    </div>
  )
}

export default Counter