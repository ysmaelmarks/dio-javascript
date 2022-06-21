const botao = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];


function mudar() {
    const mode = document.getElementById("mode-selector").value;
    if (mode === "dark") {
        document.body.classList.add("dark-mode");
        footer.classList.add("dark-mode");
        document.getElementById("mode-selector").value = "light";
        document.getElementById("page-title").innerHTML = "Dark Mode ON";
        document.getElementById("mode-selector").innerHTML = "Light Mode";
    }
    else {
        document.body.classList.remove("dark-mode");
        footer.classList.remove("dark-mode");
        document.getElementById("mode-selector").value = "dark";
        document.getElementById("page-title").innerHTML = "Light Mode ON";
        document.getElementById("mode-selector").innerHTML = "Dark Mode";
    }
}


botao.addEventListener("click", mudar);
