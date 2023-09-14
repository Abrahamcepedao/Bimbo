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


export {
    validateEmail,
    openInNewTab
}