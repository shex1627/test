const Card = () => {
    return (
        <div style={{ maxWidth: "320px", padding: "24px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", fontFamily: "sans-serif" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>Welcome Back 👋</h2>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>Looks like you've been away for a while. Here's what you missed while you were gone.</p>
        <span style={{ fontSize: "12px", color: "#999", display: "block", marginBottom: "16px" }}>Last visited: 3 days ago</span>
        <button style={{ padding: "8px 20px", background: "#2563eb", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
            Catch Up
        </button>
    </div>
    );
};

export default Card;