

let gmail = document.querySelector("#email");

let poruka = document.querySelector("#poruka");


let gumb = document.querySelector(".Form-input_button_posalji")

gumb.addEventListener('click',function (e) {

    let provGmail = gmail.value.includes("@");
    let prov2Gmail = gmail.value.includes(".");
    let brojac = poruka.value.length;

    if (provGmail && prov2Gmail) {
        alert("Dobro si unio mail");
    }
    else {
        alert("Nisi dobro unio mail");
    }

    if (brojac >= 15) {
        alert("Dobro si unio poruku");
    }
    else {
        alert("Nisi dobro unio poruku");
    }

});