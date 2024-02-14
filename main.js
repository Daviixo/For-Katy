let clickCount = 0;

function handleNoButtonClick() {
    let btnNo = document.getElementById("btn_no");
    let currentSize = parseFloat(window.getComputedStyle(btnNo).getPropertyValue("font-size"));
    let newSize = currentSize * 0.8; 

    btnNo.style.fontSize = newSize + "px";

    let btnYes = document.getElementById("btn_yes");
    let currentSizeYes = parseFloat(window.getComputedStyle(btnYes).getPropertyValue("font-size"));
    let newSizeYes = currentSizeYes * 1.4; 

    btnYes.style.fontSize = newSizeYes + "px";

    clickCount++;

    if (clickCount === 5) {
        btnNo.style.display = "none";
        alert("¡Qué maldad! ¿Por qué dices que NO? :(");
    }
}

function handleYesButtonClick() {
    document.getElementById("content").innerHTML = '<img src="http://tinyurl.com/2xzxmdn4" alt="GIF">' 
    + '<br><img src="http://tinyurl.com/292a6qut" alt="Image">' + '<br><h1>Te amo, amorcito! ❤️</h1><h4>Gracias por no decir que no :3 Tu regalo está pendiente... #Sorpresitas</h4>';
}

document.getElementById("btn_no").addEventListener("click", handleNoButtonClick);
document.getElementById("btn_yes").addEventListener("click", handleYesButtonClick);