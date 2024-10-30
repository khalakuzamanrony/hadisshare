// Global variables
let arabicText = "";
let narrator = "";
let hadithText = "";
let reference = "";
let footnote = "";
let bookName = "";
let hadithNo = "";
let hadithType = "";

function splitParagraphs() {
    const inputText = document.getElementById("inputText").value;
    const paragraphs = inputText.split(/\n\s*\n/);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    paragraphs.forEach((paragraph, index) => {
        const pElement = document.createElement("p");
        pElement.textContent = `Paragraph ${index + 1}: ${paragraph}`;
        outputDiv.appendChild(pElement);
    });
}

function sendToCard() {
    const inputText = document.getElementById("inputText").value;
    const paragraphs = inputText.split(/\n\s*\n/);

    if (paragraphs.length >= 1) {
        // Assign global variables for each paragraph
        arabicText = paragraphs[0];
        narrator = paragraphs[1];
        hadithText = paragraphs[2];
        reference = paragraphs[3];
        footnote = paragraphs[4];
    }

    const lastParagraph = paragraphs[paragraphs.length - 1];
    const lastParagraphWords = lastParagraph.split(/\s+/);

    if (lastParagraphWords.length >= 9) {
        // Assign values based on specific word positions
        bookName = `${lastParagraphWords[0]} ${lastParagraphWords[1]}`;
        hadithNo = lastParagraphWords[2] + lastParagraphWords[3] + lastParagraphWords[4];
        hadithType = `${lastParagraphWords[7]} ${lastParagraphWords[8]}`;
    }

    // Display the values in the card
    document.getElementById("arabicText").textContent = arabicText;
    document.getElementById("narrator").textContent = narrator;
    document.getElementById("hadithText").textContent = hadithText;
    document.getElementById("reference").textContent = reference;
    document.getElementById("footnote").textContent = footnote;
    document.getElementById("bookName").textContent = bookName;
    document.getElementById("hadithNo").textContent = hadithNo;
    document.getElementById("hadithType").textContent = hadithType;
}

