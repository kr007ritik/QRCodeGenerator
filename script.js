const inputUrl = document.querySelector(".inputUrl");
const generateBtn = document.querySelector(".generateQRCBtn");
const qrCode = document.querySelector(".QRcode");
const errorMsg = document.querySelector("p");
const downAndClearBtn = document.querySelector(".downAndClearBtn");
const downloadQRC = document.querySelector(".downloadQRC");
const clearBtn = document.querySelector(".clearBtn");

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
const generatedQR = `${apiUrl} + ${inputUrl.value}`;

generateBtn.addEventListener("click", () => {
  qrCode.innerHTML = "";

  if (inputUrl.value === "") {
      inputUrl.value = "";
      downAndClearBtn.style.display = "none";
      errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    downAndClearBtn.style.display = "grid";
    const img = document.createElement("img");
    qrCode.appendChild(img);
    img.setAttribute("src", generatedQR);
  }
});

clearBtn.addEventListener("click", () => {
  qrCode.innerHTML = "";
  inputUrl.value = "";
  downAndClearBtn.style.display = "none";
});
