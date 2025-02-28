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

## Testing

Website checked: https://unpause.club/resources/blogs/blood-tests-for-menopause-and-perimenopause

1. Structure & Clarity
Bias-Free Version: The content is structured clearly, with headings and bullet points making it easy to read. It ensures neutrality by avoiding promotional claims.
Original Article: The structure remains the same, with clear sections and bullet points, but it includes promotional content at the end.

2. Tone & Objectivity
Bias-Free Version: Uses neutral, factual language. It avoids suggestive phrases that may influence the reader’s decision.
Original Article: While largely informative, the article includes a disclaimer at the end regarding consumer testing and product claims, which introduces a marketing element.

3. Content Differences
Bias-Free Version:
Retains all medical and scientific details.
Removes promotional disclaimers and references to specific products like "Coolzen and Unpause Loop."
Focuses purely on menopause and perimenopause blood tests.
Original Article:
Contains an additional disclaimer about the effectiveness of Coolzen and Unpause Loop.
Includes a business address (Ahead Studio, London), indicating a commercial intent.
Mentions that results are based on consumer testing and user feedback, which subtly promotes a product.

4. Accuracy & Scientific Integrity
Both versions provide medically accurate information, but the Bias-Free Version ensures the focus remains solely on health without potential commercial influence.
Conclusion

**The Bias-Free Version removes marketing elements while maintaining the integrity of the original medical information. It is more objective and suitable for neutral, educational purposes. The Original Article mixes informational content with commercial disclaimers, making it more promotional in nature.**![Screenshot 2025-03-01 000428](https://github.com/user-attachments/assets/426e7844-1a77-4fa8-94da-5243becc251e)


