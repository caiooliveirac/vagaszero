console.log("esta rodando, baby")

var a = document.querySelectorAll(".vaga").forEach(element => {
    if (element.textContent == "ZERO"){
    element.style.backgroundColor = "red"}})