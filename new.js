// Global variables
let arabicText1 = "";
let narrator1 = "";
let hadithText1 = "";
let reference1 = "";
let footnote1 = "";
let bookName1 = "";
let hadithNo1 = "";
let hadithType1 = "";

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

    if (paragraphs.length >= 5) {
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
        hadithNo = lastParagraphWords[2] + " "+ lastParagraphWords[3] + " "+ lastParagraphWords[4];
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

    const params = new URLSearchParams({
        bookName,
        hadithNo,
        narrator,
        hadithText,
        reference,
        footnote,
        hadithType,
      });
    
      // Redirect to card.html with the parameters
      window.location.href = "card.html?" + params.toString();
}

  // Capture the form data and redirect to card.html with URL parameters
  document.getElementById("stc").addEventListener("click", function () {
    const bookName = bookName1;
    const hadithNo = hadithNo1;
    const narrator = narrator1;
    const hadithText = hadithText1;
    const reference = reference1;
    const footnote = footnote1;
    const hadithType = hadithType1;
  
    // // Get image file if uploaded
    // const imageFile = document.getElementById("bgImage").files[0];
    // let imageUrl = "";
  
    // if (imageFile) {
    //   // Create a URL for the image file
    //   imageUrl = URL.createObjectURL(imageFile);
    // }
  
    // Construct URL parameters
    const params = new URLSearchParams({
      bookName,
      hadithNo,
      narrator,
      hadithText,
      reference,
      footnote,
      hadithType,
    });
  
    // Redirect to card.html with the parameters
    window.location.href = "card.html?" + params.toString();
  });