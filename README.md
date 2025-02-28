# Bias-Free News (Chrome Extension)

## Overview
Bias-Free News is a Chrome extension designed to extract article text from webpages and present it in a structured, bias-free manner. The extension enables users to process news articles with a single click and provides a cleaned-up version for easier reading and analysis.

## Features
- **Article Extraction**: Automatically extracts article text from webpages.
- **Minimal UI**: Simple popup interface to process and display text.
- **Copy to Clipboard**: Users can copy the processed text for further use.
- **Storage Management**: Uses Chrome's local storage to temporarily store extracted text.

## Technology Stack
- **Manifest Version**: 3
- **Languages**: JavaScript, HTML, CSS
- **Key Components**:
  - **Content Script (`content.js`)**: Extracts article text from the webpage.
  - **Background Script (`background.js`)**: Listens for messages and manages storage.
  - **Popup (`popup.html`, `popup.js`)**: Provides a user interface for processing articles.

## Installation
1. Download or clone the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (top right corner).
4. Click **Load Unpacked** and select the project folder.
5. The extension will now be available in your browser.

## Usage
1. Navigate to a news article.
2. Click the **Bias-Free News** extension icon.
3. Click **"Process Article"** to extract the text.
4. View or copy the cleaned-up article text.

## File Structure
- `manifest.json` – Defines extension settings and permissions.
- `background.js` – Handles message passing and storage.
- `content.js` – Extracts article text from web pages.
- `popup.html` – User interface for the extension.
- `popup.js` – Handles UI interactions and storage retrieval.
- `style.css` – Styles for the popup UI.

## Future Improvements
- **Bias Detection**: Integrate NLP-based bias analysis.
- **Multiple Language Support**: Expand extraction capabilities.
- **Enhanced Filtering**: Improve text parsing to remove unnecessary elements.

## License
This project is licensed under the MIT License.

## Contact
For questions or suggestions, contact **Pranay Raj** at *pranayraj.g1302@gmail.com*.
