const Card = () => {
    return (
        <div style={{ maxWidth: "320px", padding: "24px", background: "#1a1a2e", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.3)", fontFamily: "sans-serif", color: "#f0ece4" }}>
            <span style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e07b39" }}>Best Seller</span>
            <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px", marginTop: "8px" }}>Wireless Headphones Pro</h2>
            <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "12px" }}>Crystal clear sound with 40hr battery life.</p>
            <span style={{ fontSize: "13px", color: "#e07b39", marginBottom: "12px", display: "block" }}>★★★★☆ (128 reviews)</span>
            <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ padding: "8px 20px", background: "#e07b39", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;