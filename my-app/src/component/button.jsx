import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

  .btn-root {
    display: inline-flex; align-items: center; justify-content: center;
    font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 500;
    letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer;
    border: none; outline: none; position: relative; overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease; user-select: none;
  }
  .btn-primary { background: #0f0f0f; color: #f5f5f5; padding: 12px 28px; border-radius: 2px; box-shadow: 4px 4px 0px #c8f04a; }
  .btn-primary:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0px #c8f04a; }
  .btn-primary:active { transform: translate(2px,2px); box-shadow: 2px 2px 0px #c8f04a; }
  .btn-outline { background: transparent; color: #0f0f0f; padding: 11px 27px; border-radius: 2px; border: 1.5px solid #0f0f0f; }
  .btn-outline:hover { background: #0f0f0f; color: #f5f5f5; }
  .btn-ghost { background: transparent; color: #555; padding: 11px 24px; border-radius: 2px; border: 1.5px solid transparent; }
  .btn-ghost:hover { border-color: #ddd; color: #0f0f0f; }
  .btn-danger { background: #ff3b3b; color: #fff; padding: 12px 28px; border-radius: 2px; box-shadow: 4px 4px 0px #7a0000; }
  .btn-danger:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0px #7a0000; }
  .btn-danger:active { transform: translate(2px,2px); box-shadow: 2px 2px 0px #7a0000; }
  .btn-sm { font-size: 11px; padding: 8px 18px; }
  .btn-lg { font-size: 15px; padding: 16px 36px; }
  .btn-root:disabled { opacity: 0.38; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
  .btn-spinner { width: 12px; height: 12px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; margin-right: 8px; animation: spin 0.7s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .ripple { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.25); transform: scale(0); animation: ripple-anim 0.5s linear; pointer-events: none; }
  @keyframes ripple-anim { to { transform: scale(4); opacity: 0; } }
  .demo-page { min-height: 100vh; background: #f7f6f2; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 48px; padding: 48px 24px; }
  .demo-title { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #999; }
  .demo-row { display: flex; flex-wrap: wrap; gap: 20px; align-items: center; justify-content: center; }
  .demo-label { font-family: 'DM Mono', monospace; font-size: 10px; color: #bbb; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px; text-align: center; }
  .demo-section { display: flex; flex-direction: column; align-items: center; }
`;

export const Button = ({ variant = "primary", size = "md", loading = false, disabled = false, onClick, children }) => {
  const handleClick = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = btn.getBoundingClientRect();
    const sz = Math.max(rect.width, rect.height);
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = sz + "px";
    ripple.style.left = (e.clientX - rect.left - sz / 2) + "px";
    ripple.style.top = (e.clientY - rect.top - sz / 2) + "px";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
    if (onClick) onClick(e);
  };

  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

  return (
    <button
      className={"btn-root btn-" + variant + (sizeClass ? " " + sizeClass : "")}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {loading && <span className="btn-spinner" />}
      {children}
    </button>
  );
};

const button = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="demo-page">
        <p className="demo-title">Button Component</p>

        <div className="demo-section">
          <p className="demo-label">Variants</p>
          <div className="demo-row">
            <Button variant="primary">Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        <div className="demo-section">
          <p className="demo-label">Sizes</p>
          <div className="demo-row">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="demo-section">
          <p className="demo-label">States</p>
          <div className="demo-row">
            <Button loading={loading} onClick={handleLoadingDemo}>
              {loading ? "Loading..." : "Click to Load"}
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default  button ;