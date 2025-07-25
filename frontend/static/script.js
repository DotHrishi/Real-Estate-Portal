document.addEventListener("DOMContentLoaded", function () {
  let enquireBtn = document.getElementById("enquireBtn");
  let enquiryForm = document.getElementById("enquiryForm");
  let closeBtn = document.getElementById("close-btn");
});

  // Show form when "Enquire" is clicked
  enquireBtn.addEventListener("click", function () {
      enquiryForm.style.display = "block";
  });

  // Hide form when "X" is clicked
  closeBtn.addEventListener("click", function () {
      enquiryForm.style.display = "none";
  });
