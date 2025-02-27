let nomesCurtiram = []

let botao = document.getElementById("botaoEnvio")


function atualizarNomes() {
    if (nomesCurtiram.length == 0) {
        document.getElementById('curtidas').innerText = "Nenhuma curtida.."
    }

    else if (nomesCurtiram.length == 1) {
        document.getElementById('curtidas').innerText = `${nomesCurtiram[0]} curtiu.`
    }

    else if (nomesCurtiram.length == 2) {
        document.getElementById('curtidas').innerText = `${nomesCurtiram[0]} e ${nomesCurtiram[1]} curtiram.`
    }

    else if (nomesCurtiram.length >= 3) {
        document.getElementById('curtidas').innerText = `${nomesCurtiram[0]}, ${nomesCurtiram[1]} e mais ${(nomesCurtiram.length - 2)} outros curtiram.`
    }
}   

function pegarNome() {
    let nome =  document.getElementById("campoNome").value

    if (nome.trim() === "") {
        alert("Digite um nome antes de enviar.")
        return
    }

    if (nomesCurtiram.includes(nome)) {
        alert("Este nome já existe.")
        return
    }
    else {
    nomesCurtiram.push(nome)
    console.log(nomesCurtiram)
    document.getElementById("campoNome").value = ""
    atualizarNomes()
    }
}


botao.addEventListener('click', pegarNome)
