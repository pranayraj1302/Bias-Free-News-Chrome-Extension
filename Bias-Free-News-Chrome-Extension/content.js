function extractArticleText() {
    let articleText = new Set();  // Use a Set to store unique paragraphs

    // Try to find the main article content
    const articleElements = document.querySelectorAll("article, p");

    articleElements.forEach(element => {
        let text = element.innerText.trim();
        if (text.length > 50) {  // Avoid very short text (like menu items)
            articleText.add(text);
        }
    });

    if (articleText.size === 0) {
        alert("No article text found on this page.");
        return;
    }

    let extractedText = Array.from(articleText).join("\n\n");

    // Store the extracted text in Chrome's storage
    chrome.storage.local.set({ extractedText });

    // Send the extracted text to the background script (if needed)
    chrome.runtime.sendMessage({ action: "processText", text: extractedText });
}

// Run the function when the script is executed
extractArticleText();
