const Card = () => {
    return (
        <div style={{ maxWidth: "320px", padding: "24px", background: "#1a1a2e", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.3)", fontFamily: "sans-serif", color: "#f0ece4" }}>
            <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e07b39" }}>Featured</span>
            <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px", marginTop: "8px" }}>Card Title</h2>
            <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ padding: "8px 20px", background: "#e07b39", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
                    Learn More
                </button>
                <button style={{ padding: "8px 20px", background: "transparent", color: "#f0ece4", border: "1px solid #444", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
                    Dismiss
                </button>
            </div>
        </div>
    );
};

export default Card;