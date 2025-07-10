var countValue = document.getElementById("count");
var downloadCVBtn = document.getElementById("downloadCV");

function downloadCV() {
    let myCV = document.createElement("a");
    myCV.href = "./apple.jpg";
    myCV.download = "red_apple.jpg";
    document.body.appendChild(myCV);
    myCV.click();
    document.body.removeChild(myCV);
}

downloadCVBtn.addEventListener("click", downloadCV);

countValue.innerHTML = localStorage.getItem("cartDetails");