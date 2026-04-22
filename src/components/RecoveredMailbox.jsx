import { useEffect, useMemo, useState } from "react";
import { recoveredMailboxes } from "../data/mailboxData";
import { formatMailboxDate, getAllFolderCounts } from "../utils/mailboxHelpers";
import "../portal/styles/recoveredMailbox.css";

const FOLDER_LABELS = {
  inbox: "Inbox",
  sent: "Sent",
  drafts: "Drafts",
  archive: "Archive",
  trash: "Trash",
};

const MAILBOX_ORDER = ["inbox", "sent", "drafts", "archive", "trash"];

export default function RecoveredMailbox() {
  const [selectedMailboxId, setSelectedMailboxId] = useState(recoveredMailboxes[0]?.id || "");
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [selectedEmailId, setSelectedEmailId] = useState(null);

  const selectedMailbox = useMemo(() => {
    return recoveredMailboxes.find((mailbox) => mailbox.id === selectedMailboxId) || recoveredMailboxes[0];
  }, [selectedMailboxId]);

  const availableFolders = useMemo(() => {
    if (!selectedMailbox?.folders) return [];
    return MAILBOX_ORDER.filter((folder) => Array.isArray(selectedMailbox.folders[folder]));
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
    return currentEmails.find((email) => email.id === selectedEmailId) || currentEmails[0] || null;
  }, [currentEmails, selectedEmailId]);

  useEffect(() => {
    if (!selectedMailbox) return;

    if (!availableFolders.includes(selectedFolder)) {
      setSelectedFolder(availableFolders[0] || "inbox");
    }
  }, [selectedMailbox, availableFolders, selectedFolder]);

  useEffect(() => {
    setSelectedEmailId(currentEmails[0]?.id || null);
  }, [selectedMailboxId, selectedFolder]);

  return (
    <section className="recovered-mailbox">
      <div className="mailbox-topbar">
        <div>
          <div className="mailbox-kicker">DCCU MAIL RECOVERY CONSOLE</div>
          <h2 className="mailbox-title">Recovered Mail Archive</h2>
          <p className="mailbox-subtitle">
            Recovered mailbox structure restored from cached credentials, session traces, and local
            mail fragments. Folder contents may be incomplete. Deleted or corrupted material may not
            be fully recoverable.
          </p>
        </div>
      </div>

      <div className="mailbox-shell">
        <aside className="mailbox-sidebar">
          <div className="panel-block">
            <div className="panel-label">Recovered Accounts</div>

            <div className="mailbox-account-list">
              {recoveredMailboxes.map((mailbox) => {
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
        </aside>

        <div className="mailbox-list-panel">
          <div className="panel-header">
            <div>
              <div className="panel-label">Mailbox</div>
              <div className="panel-title-text">{selectedMailbox?.emailAddress}</div>
            </div>
            <div className="panel-folder-chip">{FOLDER_LABELS[selectedFolder] || selectedFolder}</div>
          </div>

          <div className="message-list">
            {currentEmails.length === 0 ? (
              <div className="empty-state">No recoverable messages found in this folder.</div>
            ) : (
              currentEmails.map((email) => {
                const isActive = selectedEmail?.id === email.id;

                return (
                  <button
                    key={email.id}
                    type="button"
                    className={`message-row ${isActive ? "active" : ""} ${!email.read ? "unread" : ""} ${
                      email.deleted ? "deleted" : ""
                    }`}
                    onClick={() => setSelectedEmailId(email.id)}
                  >
                    <div className="message-row-top">
                      <span className="message-sender">{email.from}</span>
                      <span className="message-time">{formatMailboxDate(email.timestamp)}</span>
                    </div>

                    <div className="message-subject-row">
                      <span className="message-subject">{email.subject}</span>
                      {email.important && <span className="message-flag">KEY</span>}
                    </div>

                    <div className="message-preview">{email.preview}</div>
                  </button>
                );
              })
            )}
          </div>
        </div>

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
                  <span className="meta-value">{formatMailboxDate(selectedEmail.timestamp)}</span>
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
    </section>
  );
}