document.getElementById("titulo-principal").innerText = ('Texto modificado rs')

let itens = document.querySelectorAll("li")
itens.forEach(item => {
    item.style.color = ("blue")
    item.style.fontWeight = ('Bold')
});

let paragrafos = document.querySelectorAll("p")
paragrafos.forEach(paras => {
    paras.classList.add("classe-nova")
});

document.getElementsByName("botao")[0].textContent = 'botao alterado sksks'