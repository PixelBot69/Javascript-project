const search = document.querySelector(".Search");
const button = document.querySelector(".color");
const qr = document.querySelector("#qr-code"); 
button.addEventListener('click', () => {
    searchv();
});

function searchv() {
    if (search.value.length > 0) {
        qrcode();
    } else {
        console.log("error");
    }
}

function qrcode() {
    qr.innerHTML = ""; 
    var poo = new QRCode(qr, { 
        text: search.value,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
