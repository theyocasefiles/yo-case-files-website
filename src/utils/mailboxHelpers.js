export function getFolderEmails(mailbox, folderName) {
  return mailbox?.folders?.[folderName] || [];
}

export function getAllFolderCounts(mailbox) {
  return Object.entries(mailbox.folders).reduce((acc, [folder, emails]) => {
    acc[folder] = emails.length;
    return acc;
  }, {});
}

export function formatMailboxDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}