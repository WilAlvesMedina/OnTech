const btn = document.querySelector(".btnMenu");
const ul = document.querySelector(".menu");

btn.addEventListener("click", controlaMenu);

function controlaMenu(){
    ul.classList.toggle("show");
}