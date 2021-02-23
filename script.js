const mainNumber = document.getElementById("mainNumber");
const which = document.getElementById("which");
const keycode = document.getElementById("keycode");

document.addEventListener("keydown", (event) => {
    mainNumber.innerHTML = event.key;
    which.innerHTML = event.which;
    keycode.innerHTML = event.code
});