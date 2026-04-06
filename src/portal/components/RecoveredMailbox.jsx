import { useEffect, useMemo, useState } from "react";
import { recoveredMailboxes } from "../../data/mailboxData";
import { formatMailboxDate, getAllFolderCounts } from "../../utils/mailboxHelpers";
import "../styles/recoveredMailbox.css";

const FOLDER_LABELS = {
  inbox: "Inbox",
  sent: "Sent",
  drafts: "Drafts",
  archive: "Archive",
  trash: "Trash",
};

const MAILBOX_ORDER = ["inbox", "sent", "drafts", "archive", "trash"];

const MAILBOX_PASSWORDS = {
  "sara-malik": "littlesecrets",
  "daniel-kovacs": "narrative",
};

const INSTAGRAM_HINTS = {
  "sara-malik":
    "The password appears to reference wording used in a recent public caption. Review Sara Malik’s posts carefully. One entry suggests that some things are better kept unspoken.",
  "daniel-kovacs":
    "The password appears to reference branding language used in the public profile bio. Review Daniel Kovacs’s profile header carefully.",
};

export default function RecoveredMailbox() {
  const [unlockedMailboxes, setUnlockedMailboxes] = useState({
    "sara-malik": false,
    "daniel-kovacs": false,
  });

  const [passwordInputs, setPasswordInputs] = useState({
    "sara-malik": "",
    "daniel-kovacs": "",
  });

  const [passwordErrors, setPasswordErrors] = useState({
    "sara-malik": "",
    "daniel-kovacs": "",
  });

  const [hintMode, setHintMode] = useState({
    "sara-malik": null,
    "daniel-kovacs": null,
  });

  const [showHintChoices, setShowHintChoices] = useState({
    "sara-malik": false,
    "daniel-kovacs": false,
  });

  const [selectedMailboxId, setSelectedMailboxId] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const unlockedMailboxList = useMemo(() => {
    return recoveredMailboxes.filter((mailbox) => unlockedMailboxes[mailbox.id]);
  }, [unlockedMailboxes]);

  useEffect(() => {
    if (unlockedMailboxList.length === 0) {
      setSelectedMailboxId("");
      return;
    }

    const stillUnlocked = unlockedMailboxList.some(
      (mailbox) => mailbox.id === selectedMailboxId
    );

    if (!stillUnlocked) {
      setSelectedMailboxId(unlockedMailboxList[0].id);
    }
  }, [unlockedMailboxList, selectedMailboxId]);

  const selectedMailbox = useMemo(() => {
    return (
      unlockedMailboxList.find((mailbox) => mailbox.id === selectedMailboxId) ||
      unlockedMailboxList[0] ||
      null
    );
  }, [unlockedMailboxList, selectedMailboxId]);

  const availableFolders = useMemo(() => {
    if (!selectedMailbox?.folders) return [];
    return MAILBOX_ORDER.filter((folder) =>
      Array.isArray(selectedMailbox.folders[folder])
    );
  }, [selectedMailbox]);

  const folderCounts = useMemo(() => {
    if (!selectedMailbox) return {};
    return getAllFolderCounts(selectedMailbox);
  }, [selectedMailbox]);

  const currentEmails = useMemo(() => {
    if (!selectedMailbox || !selectedFolder) return [];
    return [...(selectedMailbox.folders[selectedFolder] || [])].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
  }, [selectedMailbox, selectedFolder]);

  const selectedEmail = useMemo(() => {
    return (
      currentEmails.find((email) => email.id === selectedEmailId) ||
      currentEmails[0] ||
      null
    );
  }, [currentEmails, selectedEmailId]);

  useEffect(() => {
    if (!selectedMailbox) return;

    if (!availableFolders.includes(selectedFolder)) {
      setSelectedFolder(availableFolders[0] || "inbox");
    }
  }, [selectedMailbox, availableFolders, selectedFolder]);

  useEffect(() => {
    setSelectedEmailId(currentEmails[0]?.id || null);
  }, [selectedMailboxId, selectedFolder, currentEmails]);

  function handlePasswordChange(mailboxId, value) {
    setPasswordInputs((prev) => ({
      ...prev,
      [mailboxId]: value,
    }));

    setPasswordErrors((prev) => ({
      ...prev,
      [mailboxId]: "",
    }));
  }

  function handleUnlock(mailboxId) {
    const cleanInput = passwordInputs[mailboxId].trim().toLowerCase();
    const correctPassword = MAILBOX_PASSWORDS[mailboxId];

    if (cleanInput === correctPassword) {
      setUnlockedMailboxes((prev) => ({
        ...prev,
        [mailboxId]: true,
      }));

      setPasswordErrors((prev) => ({
        ...prev,
        [mailboxId]: "",
      }));

      setPasswordInputs((prev) => ({
        ...prev,
        [mailboxId]: "",
      }));

      setSelectedMailboxId(mailboxId);
      setSelectedFolder("inbox");
      return;
    }

    setPasswordErrors((prev) => ({
      ...prev,
      [mailboxId]: "Access denied. Credential mismatch.",
    }));
  }

  function handlePasswordSubmit(event, mailboxId) {
    event.preventDefault();
    handleUnlock(mailboxId);
  }

  function toggleHintChoices(mailboxId) {
    setShowHintChoices((prev) => ({
      ...prev,
      [mailboxId]: !prev[mailboxId],
    }));
  }

  function openHintMode(mailboxId, mode) {
    setShowHintChoices((prev) => ({
      ...prev,
      [mailboxId]: true,
    }));

    setHintMode((prev) => ({
      ...prev,
      [mailboxId]: mode,
    }));
  }

  function renderHintPanel(mailboxId) {
    if (!showHintChoices[mailboxId]) return null;

    const mode = hintMode[mailboxId];

    return (
      <div className="lock-hint-box">
        <div className="panel-label">Password Reminder Options</div>

        <div className="hint-option-actions">
          <button
            type="button"
            className={`lock-button secondary ${mode === "instagram" ? "active-hint-mode" : ""}`}
            onClick={() => openHintMode(mailboxId, "instagram")}
          >
            Instagram clue
          </button>

          <button
            type="button"
            className={`lock-button secondary ${mode === "recovered" ? "active-hint-mode" : ""}`}
            onClick={() => openHintMode(mailboxId, "recovered")}
          >
            No Instagram? Recovered profile copy
          </button>
        </div>

        {mode === "instagram" && (
          <div className="hint-mode-panel">
            <div className="panel-label">Instagram Clue</div>
            <p>{INSTAGRAM_HINTS[mailboxId]}</p>
          </div>
        )}

        {mode === "recovered" && (
          <div className="hint-mode-panel recovered-profile-panel">
            <div className="panel-label">Recovered public-facing profile capture</div>

            {mailboxId === "sara-malik" && (
              <div className="recovered-profile-image-wrap large">
                <img
                  src="/evidence/recovered-profile-sara.png"
                  alt="Recovered Sara Malik social profile capture"
                  className="recovered-profile-image large"
                />
              </div>
            )}

            {mailboxId === "daniel-kovacs" && (
              <div className="recovered-profile-image-wrap large">
                <img
                  src="/evidence/recovered-profile-daniel.png"
                  alt="Recovered Daniel Kovacs social profile capture"
                  className="recovered-profile-image large"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  const allLocked = unlockedMailboxList.length === 0;
  const stillLockedMailboxes = recoveredMailboxes.filter(
    (mailbox) => !unlockedMailboxes[mailbox.id]
  );

  return (
    <section className="recovered-mailbox">
      <div className="mailbox-topbar">
        <div>
          <div className="mailbox-kicker">DCCU MAIL RECOVERY CONSOLE</div>
          <h2 className="mailbox-title">Recovered Mail Archive</h2>
          <p className="mailbox-subtitle">
            Recovered mailbox structure restored from cached credentials,
            session traces, and local mail fragments. Some mailbox nodes remain
            credential-locked and require manual recovery.
          </p>
        </div>
      </div>

      {allLocked ? (
        <div className="mailbox-lockscreen">
          <div className="lockscreen-header">
            <div className="panel-label">Recovered Mailbox Access</div>
            <h3 className="lockscreen-title">
              Credential-Protected Mailbox Nodes Detected
            </h3>
            <p className="lockscreen-subtitle">
              Two recoverable accounts were identified during session
              reconstruction. Each mailbox requires an individual password
              recovered from associated public-facing material.
            </p>
          </div>

          <div className="lock-card-grid">
            {recoveredMailboxes.map((mailbox) => {
              const mailboxId = mailbox.id;
              const isUnlocked = unlockedMailboxes[mailboxId];

              return (
                <section
                  key={mailboxId}
                  className={`lock-card ${isUnlocked ? "unlocked" : ""}`}
                >
                  <div className="lock-card-top">
                    <div>
                      <div className="panel-label">Recovered Account</div>
                      <h4 className="lock-card-title">{mailbox.owner}</h4>
                      <div className="lock-card-address">{mailbox.emailAddress}</div>
                    </div>

                    <div
                      className={`lock-status-chip ${isUnlocked ? "unlocked" : "locked"}`}
                    >
                      {isUnlocked ? "Unlocked" : "Locked"}
                    </div>
                  </div>

                  <div className="lock-card-body">
                    <div className="lock-meta-row">
                      <span className="meta-label">Recovery Status</span>
                      <span className="meta-value">{mailbox.recoveryStatus}</span>
                    </div>

                    <form
                      onSubmit={(event) => handlePasswordSubmit(event, mailboxId)}
                      className="lock-form"
                    >
                      <label className="lock-label" htmlFor={`password-${mailboxId}`}>
                        Mailbox Password
                      </label>

                      <input
                        id={`password-${mailboxId}`}
                        type="password"
                        className="lock-input"
                        value={passwordInputs[mailboxId]}
                        onChange={(event) =>
                          handlePasswordChange(mailboxId, event.target.value)
                        }
                        placeholder="Enter recovered credential"
                        autoComplete="off"
                      />

                      {passwordErrors[mailboxId] && (
                        <div className="lock-error">{passwordErrors[mailboxId]}</div>
                      )}

                      <div className="lock-actions">
                        <button type="submit" className="lock-button primary">
                          Unlock Mailbox
                        </button>

                        <button
                          type="button"
                          className="lock-button secondary"
                          onClick={() => toggleHintChoices(mailboxId)}
                        >
                          Password Reminder
                        </button>
                      </div>
                    </form>

                    {renderHintPanel(mailboxId)}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="mailbox-unlock-banner">
            <div>
              <div className="panel-label">Recovered Access Status</div>
              <div className="unlock-banner-text">
                {unlockedMailboxList.length === 1
                  ? "1 mailbox successfully restored."
                  : `${unlockedMailboxList.length} mailboxes successfully restored.`}
              </div>
            </div>

            <div className="unlock-banner-actions">
              {stillLockedMailboxes.map((mailbox) => (
                <button
                  key={mailbox.id}
                  type="button"
                  className="inline-unlock-chip"
                  onClick={() => toggleHintChoices(mailbox.id)}
                >
                  {mailbox.owner} still locked
                </button>
              ))}
            </div>
          </div>

          {stillLockedMailboxes.length > 0 && (
            <div className="mailbox-inline-locks">
              {stillLockedMailboxes.map((mailbox) => {
                const mailboxId = mailbox.id;

                return (
                  <section key={mailboxId} className="inline-lock-card">
                    <div className="inline-lock-head">
                      <div>
                        <div className="panel-label">Locked Mailbox Node</div>
                        <div className="inline-lock-title">{mailbox.owner}</div>
                      </div>
                      <div className="lock-status-chip locked">Locked</div>
                    </div>

                    <form
                      onSubmit={(event) => handlePasswordSubmit(event, mailboxId)}
                      className="inline-lock-form"
                    >
                      <input
                        type="password"
                        className="lock-input"
                        value={passwordInputs[mailboxId]}
                        onChange={(event) =>
                          handlePasswordChange(mailboxId, event.target.value)
                        }
                        placeholder={`Enter password for ${mailbox.owner}`}
                        autoComplete="off"
                      />

                      <div className="lock-actions">
                        <button type="submit" className="lock-button primary">
                          Unlock
                        </button>
                        <button
                          type="button"
                          className="lock-button secondary"
                          onClick={() => toggleHintChoices(mailboxId)}
                        >
                          Password Reminder
                        </button>
                      </div>
                    </form>

                    {passwordErrors[mailboxId] && (
                      <div className="lock-error inline-error">
                        {passwordErrors[mailboxId]}
                      </div>
                    )}

                    {renderHintPanel(mailboxId)}
                  </section>
                );
              })}
            </div>
          )}

          <div className="mailbox-shell">
            <aside className="mailbox-sidebar">
              <div className="panel-block">
                <div className="panel-label">Recovered Accounts</div>

                <div className="mailbox-account-list">
                  {unlockedMailboxList.map((mailbox) => {
                    const isActive = mailbox.id === selectedMailboxId;

                    return (
                      <button
                        key={mailbox.id}
                        type="button"
                        className={`mailbox-account-button ${isActive ? "active" : ""}`}
                        onClick={() => {
                          setSelectedMailboxId(mailbox.id);
                          setSelectedFolder("inbox");
                        }}
                      >
                        <span className="account-owner">{mailbox.owner}</span>
                        <span className="account-address">{mailbox.emailAddress}</span>
                        <span className="account-status">{mailbox.recoveryStatus}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="panel-block">
                <div className="panel-label">Folders</div>

                <div className="folder-list">
                  {availableFolders.map((folder) => {
                    const isActive = folder === selectedFolder;

                    return (
                      <button
                        key={folder}
                        type="button"
                        className={`folder-button ${isActive ? "active" : ""}`}
                        onClick={() => setSelectedFolder(folder)}
                      >
                        <span>{FOLDER_LABELS[folder] || folder}</span>
                        <span className="folder-count">{folderCounts[folder] || 0}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mailbox-list-panel">
                <div className="panel-header">
                  <div>
                    <div className="panel-label">Mailbox</div>
                    <div className="panel-title-text">{selectedMailbox?.emailAddress}</div>
                  </div>
                  <div className="panel-folder-chip">
                    {FOLDER_LABELS[selectedFolder] || selectedFolder}
                  </div>
                </div>

                <div className="message-list">
                  {currentEmails.length === 0 ? (
                    <div className="empty-state">
                      No recoverable messages found in this folder.
                    </div>
                  ) : (
                    currentEmails.map((email) => {
                      const isActive = selectedEmail?.id === email.id;

                      return (
                        <button
                          key={email.id}
                          type="button"
                          className={`message-row ${isActive ? "active" : ""} ${
                            !email.read ? "unread" : ""
                          } ${email.deleted ? "deleted" : ""}`}
                          onClick={() => setSelectedEmailId(email.id)}
                        >
                          <div className="message-row-top">
                            <span className="message-sender">{email.from}</span>
                            <span className="message-time">
                              {formatMailboxDate(email.timestamp)}
                            </span>
                          </div>

                          <div className="message-subject-row">
                            <span className="message-subject">{email.subject}</span>
                          </div>

                          <div className="message-preview">{email.preview}</div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </aside>

            <article className="mailbox-reader-panel">
              {selectedEmail ? (
                <>
                  <div className="panel-header reader-header">
                    <div>
                      <div className="panel-label">Recovered Message</div>
                      <h3 className="reader-subject">{selectedEmail.subject}</h3>
                    </div>

                    <div className="reader-meta-chip">{selectedEmail.id}</div>
                  </div>

                  <div className="reader-meta">
                    <div className="meta-row">
                      <span className="meta-label">From</span>
                      <span className="meta-value">{selectedEmail.from}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">To</span>
                      <span className="meta-value">{selectedEmail.to}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Date</span>
                      <span className="meta-value">
                        {formatMailboxDate(selectedEmail.timestamp)}
                      </span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Folder</span>
                      <span className="meta-value">
                        {FOLDER_LABELS[selectedEmail.folder] || selectedEmail.folder}
                        {selectedEmail.deleted ? " / Deleted Item" : ""}
                      </span>
                    </div>
                  </div>

                  <div className="reader-body">
                    {selectedEmail.body.split("\n").map((line, index) => (
                      <p key={`${selectedEmail.id}-${index}`}>{line || "\u00A0"}</p>
                    ))}
                  </div>
                </>
              ) : (
                <div className="empty-state">No message selected.</div>
              )}
            </article>
          </div>
        </>
      )}
    </section>
  );
}