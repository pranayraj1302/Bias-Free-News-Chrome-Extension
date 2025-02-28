document.getElementById("processArticle").addEventListener("click", () => {
    document.getElementById("status").textContent = "Extracting article text...";

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"]
        });

        setTimeout(() => {
            chrome.storage.local.get("extractedText", (data) => {
                console.log("Extracted Data:", data);  // Debug log
                
                if (data.extractedText && data.extractedText.trim() !== "") {
                    document.getElementById("status").textContent = "Article Extracted:";
                    
                    let articleTextElement = document.getElementById("articleText");
                    articleTextElement.textContent = data.extractedText;
                    
                    let copyButton = document.getElementById("copyButton");
                    copyButton.style.display = "block";
                    copyButton.addEventListener("click", () => {
                        navigator.clipboard.writeText(data.extractedText);
                        copyButton.textContent = "Copied!";
                        setTimeout(() => copyButton.textContent = "Copy Bias-Free Version", 1500);
                    });

                } else {
                    document.getElementById("status").textContent = "No text extracted.";
                    console.warn("No extracted text found in storage.");
                }
            });
        }, 2000); // Increased delay to ensure content.js has time to execute
    });
});