import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  globalStyles  from "../styles/portalStyles";

export default function PortalLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [systemMessage, setSystemMessage] = useState({
    type: "neutral",
    text: "DCCU system online. Enter authorised credentials.",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim().toLowerCase();

    if (cleanUser === "i.good" && cleanPass === "varga1806") {
      localStorage.setItem("yo_case_portal_access", "granted");
      setSystemMessage({
        type: "success",
        text: "Access granted. Took you long enough, Detective.",
      });

      setTimeout(() => {
        navigate("/portal/case-001");
      }, 500);
    } else {
      setSystemMessage({
        type: "error",
        text: "Access denied. Nice try. Maybe read the evidence next time.",
      });
    }
  };

  return (
    <>
      <style>{globalStyles}</style>

      <div className="app-shell">
        <div className="bg-grid" />
        <div className="bg-glow" />

        <div className="login-screen">
          <div className="terminal-panel login-panel">
            <div className="panel-watermark login-watermark" />

            <div className="panel-header login-header">
              <img
                src="/logo.png"
                alt="DCCU Logo"
                className="panel-logo panel-logo-flip login-header-logo"
              />

              <div className="login-header-text">
                <div className="terminal-label">DCCU SECURE ACCESS TERMINAL</div>
                <div className="terminal-subline">METROPOLITAN POLICE</div>
                <div className="terminal-subline">DIGITAL & CYBER CRIME UNIT</div>
              </div>
            </div>

            <div className="login-content">
              <div className="login-divider" />
              <h1 className="login-title">THE YO CASE FILES</h1>
              <div className="login-case">CASE: MCU-001</div>
              <p className="login-user">AUTHORISED USER: DET. I.GOOD</p>

              <div className="form-block">
                <label className="field-label">USERNAME</label>
                <input
                  className="terminal-input"
                  placeholder="ENTER USERNAME"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-block">
                <label className="field-label">PASSWORD</label>
                <input
                  className="terminal-input"
                  type="password"
                  placeholder="ENTER PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleLogin();
                  }}
                />
              </div>

              <button className="terminal-button primary-button" onClick={handleLogin}>
                ACCESS SYSTEM
              </button>
            </div>

            <div className={`system-banner ${systemMessage.type}`}>
              <span className="system-banner-label">SYSTEM</span>
              <span>{systemMessage.text}</span>
            </div>

            <div className="warning-bar">
              <span className="warning-text">WARNING:</span>
              <span>UNAUTHORISED ACCESS IS A CRIMINAL OFFENCE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}