import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DIGITAL_EVIDENCE,
  INITIAL_MESSAGE,
  REQUIRED_FILE_IDS,
  STORAGE_KEY,
} from "../data/case001Data";
import {
  EvidenceListItem,
  EvidenceModal,
  FileRow,
  SectionHeader,
  StatusItem,
} from "../components/PortalShared";
import RecoveredMailbox from "../components/RecoveredMailbox";
import globalStyles from "../styles/portalStyles";

const FINAL_RESOLUTION_EVIDENCE = {
  id: "CASE-RESOLUTION",
  title: "Case Resolution Report",
  description: "Final verified case resolution and offender assessment.",
  type: "image",
  file: "/evidence/MCU_Case_Resolution_Report_v5.png",
  status: "VERIFIED",
  section: "reveal",
};

export default function Case001Portal() {
  const navigate = useNavigate();

  const [view, setView] = useState("digital");
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  const [answer, setAnswer] = useState("");
  const [caseSolved, setCaseSolved] = useState(false);

  const [viewedEvidenceIds, setViewedEvidenceIds] = useState([]);
  const [systemMessage, setSystemMessage] = useState(INITIAL_MESSAGE);

  const [isValidatingConclusion, setIsValidatingConclusion] = useState(false);
  const [validationStage, setValidationStage] = useState("");

  const validationTimers = useRef([]);

  const requiredViewedCount = useMemo(() => {
    return REQUIRED_FILE_IDS.filter((id) => viewedEvidenceIds.includes(id)).length;
  }, [viewedEvidenceIds]);

  const progressionReady = requiredViewedCount === REQUIRED_FILE_IDS.length;

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      setView(parsed.view || "digital");
      setCaseSolved(Boolean(parsed.caseSolved));
      setViewedEvidenceIds(
        Array.isArray(parsed.viewedEvidenceIds) ? parsed.viewedEvidenceIds : []
      );
    } catch {
      // ignore corrupted local storage
    }
  }, []);

  useEffect(() => {
    const payload = {
      view,
      caseSolved,
      viewedEvidenceIds,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [view, caseSolved, viewedEvidenceIds]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedEvidence(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      validationTimers.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const evidenceData = useMemo(() => {
    return DIGITAL_EVIDENCE.map((item) => ({
      ...item,
      locked: false,
      viewed: viewedEvidenceIds.includes(item.id),
    }));
  }, [viewedEvidenceIds]);

  const visibleDigitalItems = evidenceData.filter((item) => item.section === "digital");

  const pushSystemMessage = (type, text) => {
    setSystemMessage({ type, text });
  };

  const submitAnswer = () => {
    if (isValidatingConclusion) return;

    const clean = answer.trim().toLowerCase();

    if (!(clean === "daniel" || clean === "daniel kovacs" || clean === "kovacs")) {
      pushSystemMessage("error", "Submitted conclusion does not align with available evidence.");
      return;
    }

    if (!progressionReady) {
      pushSystemMessage(
        "warning",
        "Conclusion incomplete. Review the required digital evidence before final submission."
      );
      setView("digital");
      return;
    }

    setIsValidatingConclusion(true);
    setValidationStage("VALIDATING CONCLUSION...");
    pushSystemMessage("neutral", "DCCU verification in progress.");

    const timers = [
      setTimeout(() => {
        setValidationStage("CROSS-REFERENCING EVIDENCE...");
      }, 900),
      setTimeout(() => {
        setValidationStage("MATCH FOUND — CONCLUSION ACCEPTED.");
      }, 1900),
      setTimeout(() => {
        setIsValidatingConclusion(false);
        setCaseSolved(true);
        setView("reveal");
        pushSystemMessage("success", "Conclusion verified. Verdict accepted by DCCU system.");
      }, 2900),
    ];

    validationTimers.current = timers;
  };

  const openEvidence = (item) => {
    setViewedEvidenceIds((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]));
    setSelectedEvidence(item);

    if (REQUIRED_FILE_IDS.includes(item.id)) {
      pushSystemMessage("neutral", `${item.title} reviewed and logged to case progression.`);
    } else {
      pushSystemMessage("neutral", `${item.title} opened.`);
    }
  };

  const openFinalResolution = () => {
    setSelectedEvidence(FINAL_RESOLUTION_EVIDENCE);
    pushSystemMessage("success", "Final case resolution report opened.");
  };

  const resetCaseSession = () => {
    validationTimers.current.forEach((timer) => clearTimeout(timer));
    setSelectedEvidence(null);
    setViewedEvidenceIds([]);
    setAnswer("");
    setCaseSolved(false);
    setView("digital");
    setIsValidatingConclusion(false);
    setValidationStage("");
    pushSystemMessage("neutral", "Case session reset. Start again, Detective.");
  };

  const logout = () => {
    validationTimers.current.forEach((timer) => clearTimeout(timer));
    setView("digital");
    setSelectedEvidence(null);
    setViewedEvidenceIds([]);
    setAnswer("");
    setCaseSolved(false);
    setIsValidatingConclusion(false);
    setValidationStage("");
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("yo_case_portal_access");
    navigate("/portal");
  };

  return (
    <>
      <style>{globalStyles}</style>

      <div className="app-shell">
        <div className="bg-grid" />
        <div className="bg-glow" />

        <div className="portal-screen">
          <div className="terminal-panel main-panel">
            <div className="panel-watermark main-watermark" />

            <div className="panel-header main-header">
              <div className="header-left">
                <img
                  src="/logo.png"
                  alt="DCCU Logo"
                  className="panel-logo panel-logo-flip-main main-header-logo"
                />
                <div>
                  <div className="terminal-label">DCCU FORENSIC TERMINAL</div>
                  <div className="header-meta">
                    <span>CASE: MCU-001</span>
                    <span>STATUS: {caseSolved ? "RESOLVED" : "ACTIVE"}</span>
                    <span>USER: DET. I.GOOD</span>
                  </div>
                </div>
              </div>

              <button className="terminal-button ghost-button logout-button" onClick={logout}>
                LOG OUT
              </button>
            </div>

            <div className={`system-banner ${systemMessage.type}`}>
              <span className="system-banner-label">SYSTEM</span>
              <span>{systemMessage.text}</span>
            </div>

            <div className="mobile-nav">
              <button
                className={`nav-tab ${view === "digital" ? "active" : ""}`}
                onClick={() => setView("digital")}
              >
                DIGITAL
              </button>
              <button
                className={`nav-tab ${view === "mailboxes" ? "active" : ""}`}
                onClick={() => setView("mailboxes")}
              >
                MAILBOXES
              </button>
              <button
                className={`nav-tab ${view === "answer" ? "active" : ""}`}
                onClick={() => setView("answer")}
              >
                CONCLUSION
              </button>
            </div>

            <div className="portal-body">
              <aside className="sidebar-panel">
                <div className="side-title">AVAILABLE FILES</div>

                <FileRow
                  active={view === "digital"}
                  label="DIGITAL EVIDENCE"
                  icon="☰"
                  onClick={() => setView("digital")}
                />
                <FileRow
                  active={view === "mailboxes"}
                  label="RECOVERED MAILBOXES"
                  icon="✉"
                  onClick={() => setView("mailboxes")}
                />
                <FileRow
                  active={view === "answer"}
                  label="SUBMIT CONCLUSION"
                  icon="▣"
                  onClick={() => setView("answer")}
                />
                {caseSolved && (
                  <FileRow
                    active={view === "reveal"}
                    label="CASE RESOLUTION"
                    icon="✓"
                    onClick={() => setView("reveal")}
                  />
                )}

                <div className="side-divider" />

                <div className="sidebar-status">
                  <StatusItem label="PRIMARY ACCESS" value="AUTHORISED" ok />
                  <StatusItem
                    label="REQUIRED FILES"
                    value={`${requiredViewedCount}/${REQUIRED_FILE_IDS.length} REVIEWED`}
                    ok={progressionReady}
                  />
                  <StatusItem
                    label="MAIL RECOVERY"
                    value="AVAILABLE"
                    ok
                  />
                  <StatusItem
                    label="CASE STATUS"
                    value={caseSolved ? "VERIFIED" : "PENDING"}
                    ok={caseSolved}
                  />
                </div>
              </aside>

              <main className="content-panel">
                {view === "digital" && (
                  <section>
                    <SectionHeader
                      title="DIGITAL EVIDENCE"
                      subtitle="Recovered cyber material and associated external records."
                    />

                    <div className="progress-strip">
                      <div className="progress-strip-text">
                        Required evidence reviewed: <strong>{requiredViewedCount}</strong> /{" "}
                        {REQUIRED_FILE_IDS.length}
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${Math.min(
                              100,
                              (requiredViewedCount / REQUIRED_FILE_IDS.length) * 100
                            )}%`,
                          }}
                        />
                      </div>
                      <div className="progress-strip-note">
                        Review the required digital files before submitting your conclusion.
                      </div>
                    </div>

                    <div className="file-list">
                      {visibleDigitalItems.map((item, index) => (
                        <EvidenceListItem
                          key={item.id}
                          index={index + 1}
                          item={item}
                          onOpen={openEvidence}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {view === "mailboxes" && (
                  <section>
                    <SectionHeader
                      title="RECOVERED MAILBOXES"
                      subtitle="Recovered account structures restored from cached credentials and session traces."
                    />

                    <RecoveredMailbox />
                  </section>
                )}

                {view === "answer" && (
                  <section>
                    <SectionHeader
                      title="SUBMIT CONCLUSION"
                      subtitle="Enter the name of the primary suspect."
                    />

                    <div className="answer-box">
                      <div className="form-block narrow">
                        <label className="field-label">PRIMARY SUSPECT</label>
                        <input
                          className="terminal-input"
                          placeholder="ENTER SUSPECT NAME"
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") submitAnswer();
                          }}
                        />
                      </div>

                      <button
                        className="terminal-button primary-button"
                        onClick={submitAnswer}
                        disabled={isValidatingConclusion}
                      >
                        {isValidatingConclusion ? "VALIDATING..." : "SUBMIT ASSESSMENT"}
                      </button>

                      {isValidatingConclusion && (
                        <div className="validation-box">
                          <div className="validation-spinner" />
                          <div className="validation-text">{validationStage}</div>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {view === "reveal" && (
                  <section>
                    <SectionHeader
                      title="CASE RESOLUTION"
                      subtitle="Final verified conclusion based on recovered evidence."
                    />

                    <div className="resolution-panel">
                      <div className="resolution-panel-watermark" />

                      <div className="resolution-topline">CONCLUSION ACCEPTED BY DCCU SYSTEM</div>

                      <div className="resolution-suspect-block">
                        <div className="resolution-label">PRIMARY SUSPECT</div>
                        <div className="resolution-name">DANIEL KOVACS</div>
                        <div className="resolution-sub">
                          Final assessment verified through recovered communication, livestream
                          evidence, and mailbox records.
                        </div>
                      </div>

                      <div className="resolution-summary-grid">
                        <div className="resolution-mini-card">
                          <div className="resolution-mini-label">REQUIRED FILES</div>
                          <div className="resolution-mini-value">{requiredViewedCount}</div>
                        </div>

                        <div className="resolution-mini-card">
                          <div className="resolution-mini-label">MAIL RECOVERY</div>
                          <div className="resolution-mini-value">ACCESSED</div>
                        </div>

                        <div className="resolution-mini-card">
                          <div className="resolution-mini-label">VERDICT STATUS</div>
                          <div className="resolution-mini-value">VERIFIED</div>
                        </div>
                      </div>

                      <div className="resolution-status-line">
                        CASE STATUS: VERIFIED — OFFENDER IDENTIFIED
                      </div>

                      <div className="resolution-actions">
                        <button
                          className="terminal-button primary-button"
                          onClick={openFinalResolution}
                        >
                          OPEN REPORT
                        </button>
                        <button
                          className="terminal-button ghost-button"
                          onClick={() => setView("digital")}
                        >
                          REVIEW EVIDENCE
                        </button>
                        <button
                          className="terminal-button ghost-button"
                          onClick={resetCaseSession}
                        >
                          RESET CASE
                        </button>
                      </div>
                    </div>
                  </section>
                )}
              </main>
            </div>
          </div>
        </div>

        {selectedEvidence && (
          <EvidenceModal evidence={selectedEvidence} onClose={() => setSelectedEvidence(null)} />
        )}
      </div>
    </>
  );
}