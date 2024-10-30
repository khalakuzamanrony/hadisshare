function processText() {
    // Get the text from the input field
    const inputText = document.getElementById('inputText').value;

    // Split the input text into paragraphs based on new lines
    const paragraphs = inputText.split(/\n\s*\n/);
    // Get individual fields based on the provided paragraph structure
    const arabicText = paragraphs[0] || "N/A";
    const narrator = paragraphs[1] || "N/A";
    const hadithText = paragraphs[2] || "N/A";
    const meta = paragraphs[paragraphs.length - 1] || "N/A"; // Last one is always meta

    // Reference and Footnote
    let reference = "N/A";
    let footnote = "N/A";
    if (paragraphs.length === 5) {
        reference = paragraphs[3];
    } else if (paragraphs.length === 6) {
        reference = paragraphs[3];
        footnote = paragraphs[4];
    }

    // Extract bookName, hadithNo, and hadithType from meta if available
    const metaWords = meta.match(/\((.*?)\)/g) || [];
    const bookName = metaWords[0] ? metaWords[0].replace(/[()]/g, '') : "N/A";
    const hadithNo = metaWords[1] ? metaWords[1].replace(/[()]/g, '') : "N/A";
    const hadithType = metaWords[2] ? metaWords[2].replace(/[()]/g, '') : "N/A";

    // Display the extracted data in the HTML
    document.getElementById('arabicText').textContent = `Arabic Text: ${arabicText}`;
    document.getElementById('narrator').textContent = `Narrator: ${narrator}`;
    document.getElementById('hadithText').textContent = `Hadith Text: ${hadithText}`;
    document.getElementById('reference').textContent = `Reference: ${reference}`;
    document.getElementById('footnote').textContent = `Footnote: ${footnote}`;
    document.getElementById('bookName').textContent = `Book Name: ${bookName}`;
    document.getElementById('hadithNo').textContent = `Hadith No: ${hadithNo}`;
    document.getElementById('hadithType').textContent = `Hadith Type: ${hadithType}`;
}
