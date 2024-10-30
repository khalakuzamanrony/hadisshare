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

//   // Capture the form data and redirect to card.html with URL parameters
// function sendToCard() {
//     const inputText = document.getElementById("hadithText").value;
//     const errorMessage = document.getElementById("error-message");
//     const paragraphs = inputText.split(/\n\s*\n/);
//     if (inputText === "") {
//       event.preventDefault();
//       errorMessage.textContent = "Please add some text first.";
//       errorMessage.style.display = "block";
//   }else{
//     if (paragraphs.length >= 1) {
//       // Assign global variables for each paragraph
//       arabicText = paragraphs[0];
//       narrator = paragraphs[1];
//       hadithText = paragraphs[2];
//       reference = paragraphs[3];
//       footnote = paragraphs[4];
//   }

//   const lastParagraph = paragraphs[paragraphs.length - 1];
//   const lastParagraphWords = lastParagraph.split(/\s+/);

//   if (lastParagraphWords.length >= 9) {
//       // Assign values based on specific word positions
//       bookName = `${lastParagraphWords[0]} ${lastParagraphWords[1]}`;
//       hadithNo = lastParagraphWords[2] + " "+ lastParagraphWords[3] + " "+ lastParagraphWords[4];
//       hadithType = `${lastParagraphWords[7]} ${lastParagraphWords[8]}`;
//   }

//   const params = new URLSearchParams({
//       bookName,
//       hadithNo,
//       narrator,
//       hadithText,
//       reference,
//       footnote,
//       hadithType,
//       arabicText,
//     });
  
//     // Redirect to card.html with the parameters
//     window.location.href = "card.html?" + params.toString();
//   }
    
// }

function processText() {
  // Get the text from the input field
  const inputText = document.getElementById('hadithText').value;
    if (inputText === "") {
      errorMessage.textContent = "Please add some text first.";
      errorMessage.style.display = "block";
    }else{
          // Split the input text into paragraphs based on new lines
          const paragraphs = inputText.split(/\n\s*\n/);
          // Get individual fields based on the provided paragraph structure
          const arabicText = paragraphs[0] || "N/A";
          const narrator = paragraphs[1] || "N/A";
          const hadithText = paragraphs[2] || "N/A";
          const meta = paragraphs[paragraphs.length - 1] || "N/A"; // Last one is always meta

          // Reference and Footnote
          let reference = "";
          let footnote = "";
          if (paragraphs.length === 5) {
              reference = paragraphs[3];
          } else if (paragraphs.length === 6) {
              reference = paragraphs[3];
              footnote = paragraphs[4];
          }

          // Extract bookName, hadithNo, and hadithType from meta if available
          // Extract bookName, hadithNo, and hadithType from meta if available
          // const metaWords = meta.match(/\((.*?)\)/g) || [];
          // const bookName = metaWords[0] ? metaWords[0].replace(/[()]/g, '') : "N/A";
          // const hadithNo = metaWords[1] ? metaWords[1].replace(/[()]/g, '') : "N/A";
          // const hadithType = metaWords[2] ? metaWords[2].replace(/[()]/g, '') : "N/A";

          const metaWords = meta.match(/x([^x]+)x/g) || [];
          const bookName = metaWords[0] ? metaWords[0].replace(/x/g, '') : "N/A";
          const hadithNo = metaWords[1] ? metaWords[1].replace(/x/g, '') : "N/A";
          const hadithType = metaWords[2] ? metaWords[2].replace(/x/g, '') : "N/A";

          // // Display the extracted data in the HTML
          // document.getElementById('arabicText').textContent = `Arabic Text: ${arabicText}`;
          // document.getElementById('narrator').textContent = `Narrator: ${narrator}`;
          // document.getElementById('hadithText').textContent = `Hadith Text: ${hadithText}`;
          // document.getElementById('reference').textContent = `Reference: ${reference}`;
          // document.getElementById('footnote').textContent = `Footnote: ${footnote}`;
          // document.getElementById('bookName').textContent = `Book Name: ${bookName}`;
          // document.getElementById('hadithNo').textContent = `Hadith No: ${hadithNo}`;
          // document.getElementById('hadithType').textContent = `Hadith Type: ${hadithType}`;
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
  
}
