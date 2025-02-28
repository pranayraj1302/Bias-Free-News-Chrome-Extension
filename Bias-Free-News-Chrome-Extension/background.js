chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "processText") {
        console.log("Extracted Article Text:", message.text); // For debugging
        chrome.storage.local.set({ extractedText: message.text });
    }
});