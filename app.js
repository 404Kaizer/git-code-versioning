let htmlText = document.getElementById("text")
let changeColorBtn = document.getElementById("changeTextBtn")

changeColorBtn.onclick = function changeTextToGreen() {
    htmlText.style.color = "green"
}

changeColorBtn.ondblclick = function changeTextToRed() {
    htmlText.style.color = "red"
}
