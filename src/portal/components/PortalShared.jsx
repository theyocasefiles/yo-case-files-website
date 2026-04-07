export function FileRow({ label, icon, active, onClick }) {
  return (
    <button className={`side-row ${active ? "active" : ""}`} onClick={onClick}>
      <span className="side-icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export function StatusItem({ label, value, ok }) {
  return (
    <div className="status-item">
      <div className="status-label">{label}</div>
      <div className={`status-value ${ok ? "ok" : ""}`}>{value}</div>
    </div>
  );
}

export function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export function EvidenceListItem({ item, onOpen, index }) {
  return (
    <button className={`evidence-row ${item.viewed ? "viewed" : ""}`} onClick={() => onOpen(item)}>
      <div className="evidence-row-left">
        <span className="evidence-index">[{index}]</span>
        <span className="evidence-name">{item.title}</span>
      </div>

      <div className="evidence-row-right">
        {item.viewed && <span className="viewed-pill">VIEWED</span>}
        <span className={`mini-badge ${item.locked ? "restricted" : "available"}`}>
          {item.locked ? "LOCKED" : item.status}
        </span>
        <span className="evidence-arrow">›</span>
      </div>
    </button>
  );
}

export function EvidenceModal({ evidence, onClose }) {
  const isVideo = evidence.type === "video";

  return (
    <div
      className={`modal-overlay ${isVideo ? "video-modal-overlay" : ""}`}
      onClick={onClose}
    >
      <div
        className={`modal-panel ${isVideo ? "video-modal-panel" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="header-left">
            <img src="/logo.png" alt="DCCU Logo" className="modal-logo" />
            <div>
              <div className="terminal-label">DCCU EVIDENCE VIEWER</div>
              <div className="modal-title">{evidence.title}</div>
              <div className="modal-subtitle">Recovered digital file access</div>
            </div>
          </div>

          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          {isVideo ? (
            <div className="video-wrapper">
              <video controls playsInline preload="metadata" className="portal-video">
                <source src={evidence.file} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          ) : (
            <img src={evidence.file} alt={evidence.title} className="modal-image" />
          )}
        </div>

        <div className="modal-footer">
          <div className="modal-evidence-id">{evidence.id}</div>
          <p>{evidence.description}</p>
        </div>
      </div>
    </div>
  );
}