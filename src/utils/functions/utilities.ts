const validateEmail = (email: string) => {
    // Basic email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
};

/**
 * Opens a URL in a new browser tab.
 * 
 * @param url - The URL to open in the new tab.
 */
const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};


/**
 * Converts timestamp to date.
 * 
 * @param timestamp - timestamp number.
 */
function formatDateToYYYYMMDD(timestamp: number): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export {
    validateEmail,
    openInNewTab,
    formatDateToYYYYMMDD
}