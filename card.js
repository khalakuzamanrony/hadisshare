// Function to retrieve data from URL parameters and populate the card
var bookname,hno;
function populateCard() {
    const urlParams = new URLSearchParams(window.location.search);
  
    document.getElementById("bookChip").textContent = urlParams.get("bookName") || "সহিহ বুখারী";
    document.getElementById("hadithNoChip").textContent = urlParams.get("hadithNo") || "হাদিস নং: ৬১";
    document.getElementById("hadithTypeChip").textContent = urlParams.get("hadithType") || "সহিহ হাদিস";
    document.getElementById("narratorText").textContent = urlParams.get("narrator") || "ইব্‌নু ‘উমার (রাঃ) থেকে বর্ণিতঃ";
    document.getElementById("hadithText").textContent = urlParams.get("hadithText") || "তিনি বলেন আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) একদা বললেনঃ গাছগাছালির মধ্যে এমন একটি গাছ আছে যার পাতা ঝরে না। আর তা মুসলিমের উদাহরণ, তোমরা আমাকে অবগত কর ‘সেটি কি গাছ?’ তখন লোকেরা জঙ্গলের বিভিন্ন গাছ-গাছালির নাম ধারণা করতে লাগল। ‘আবদুল্লাহ (রাঃ) বলেন, ‘আমার ধারণা হল, সেটা হবে খেজুর গাছ।’ কিন্তু (আমি ছোট থাকার কারণে) তা বলতে লজ্জা পাচ্ছিলাম। অতঃপর সাহাবীগণ বললেন, ‘হে আল্লাহর রসূল! আপনি আমাদের বলে দিন সেটি কি গাছ?’ তিনি বললেনঃ ‘তা হচ্ছে খেজুর গাছ।’   ";
    document.getElementById("referenceText").textContent = urlParams.get("reference") || "(৬২, ৭২, ১৩১, ২২০৯, ৪৬৯৮, ৫৪৪৪, ৫৪৪৮, ৬১২২, ৬১৪৪; মুসলিম ৫০/১৫ হাঃ ২৮১১, আহমাদ ৬৪৭৭) (আধুনিক প্রকাশনীঃ ৫৯,ইসলামী ফাউন্ডেশনঃ ৫৯)";
    document.getElementById("footnoteText").textContent = urlParams.get("footnote") || " [১] ইমাম বুখারীর মতে এগুলো হাদীস রিওয়ায়াতের সমার্থক পারিভাষিক শব্দ; মুহাদ্দিসগণের মধ্য এ সম্বন্ধে মতভেদ আছে।";
  bookname=document.getElementById("bookChip").textContent = urlParams.get("bookName") || "সহিহ বুখারী";;
  hno= document.getElementById("hadithNoChip").textContent = urlParams.get("hadithNo") || "হাদিস নং: ৬১";
    // Check if an image URL was provided; if so, set it as background
    // const bgImageUrl = urlParams.get("imageUrl");
    // if (bgImageUrl) {
    //   document.querySelector(".card").style.backgroundImage = `url(${bgImageUrl})`;
    //   document.querySelector(".card").style.backgroundSize = "cover";
    // }
  }
  
  // Call populateCard() when the page loads
  window.onload = populateCard;

  //download
  document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector(".download-btn");
  
    downloadBtn.addEventListener("click", () => {
      // Select the card element
      const card = document.querySelector(".card");
  
      // Use html2canvas to capture the card
      html2canvas(card, { scale: 2 }) // Higher scale for better resolution
        .then((canvas) => {
          // Convert canvas to a data URL (PNG format)
          const imgData = canvas.toDataURL("image/png");
  
          // Create a temporary download link
          const downloadLink = document.createElement("a");
          downloadLink.href = imgData;
          downloadLink.download = `${bookname}+${hno}.png`;
  
          // Programmatically click the download link
          downloadLink.click();
        })
        .catch((error) => {
          console.error("Failed to capture the card:", error);
        });
    });
  });
    