  // Global variables
  let arabicText = "";
  let narrator = "";
  let hadithText = "";
  let reference = "";
  let footnote = "";
  let bookName = "";
  let hadithNo = "";
  let hadithType = "";
function updateCount(fieldId, countId, maxChars) {
    const field = document.getElementById(fieldId);
    const countDisplay = document.getElementById(countId);
    countDisplay.textContent = `${field.value.length}/${maxChars}`;
  }
  
  function clearFields() {
    document.querySelectorAll("input[type='text'], textarea").forEach(field => {
      field.value = "";
      updateCount(field.id, `${field.id}Count`, field.maxLength);
    });
  }
  
  function createCard() {
    // Add functionality to gather field data and open the card display page.
  }

  function clearFields() {
    document.querySelectorAll("input[type='text'], textarea, select").forEach(field => {
      field.value = "";
    });
    document.getElementById("bgImage").value = ""; // Clear file input
  }


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

  // Capture the form data and redirect to card.html with URL parameters
function sendToCard() {
    const inputText = document.getElementById("hadithText").value;
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
    // document.getElementById("arabicText").textContent = arabicText;
    // document.getElementById("narrator").textContent = narrator;
    // document.getElementById("hadithText").textContent = hadithText;
    // document.getElementById("reference").textContent = reference;
    // document.getElementById("footnote").textContent = footnote;
    // document.getElementById("bookName").textContent = bookName;
    // document.getElementById("hadithNo").textContent = hadithNo;
    // document.getElementById("hadithType").textContent = hadithType;

    const params = new URLSearchParams({
        bookName,
        hadithNo,
        narrator,
        hadithText,
        reference,
        footnote,
        hadithType,
        arabicText,
      });
    
      // Redirect to card.html with the parameters
      window.location.href = "card.html?" + params.toString();
}
