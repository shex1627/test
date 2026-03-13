const Card = () => {
    return (
        <div style={{ maxWidth: "320px", padding: "24px", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", fontFamily: "sans-serif" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>Card Title</h2>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px" }}>This is a simple card component with some description text inside.</p>
            <button style={{ padding: "8px 20px", background: "#0f0f0f", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
                Learn More
            </button>
        </div>
    );
};

export default Card;