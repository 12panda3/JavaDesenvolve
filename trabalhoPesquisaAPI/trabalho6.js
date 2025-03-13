let campoBusca = document.getElementById('campoBusca')
let botaoBusca = document.getElementById('botaoBusca')
let resultado = document.getElementById('resultado')

async function Buscar() {
    let query = campoBusca.value.trim()
    resultado.innerHTML = '';

    if (query === '') {
        resultado.innerHTML = '<p>Digite um nome para pesquisar.</p>'
        return
    }

    try {
        const site = await fetch(`https://api.github.com/search/users?q=${query}`);
        const dados = await site.json();

        if (dados.items.length === 0) {
            resultado.innerHTML = '<p>Sem resultados.</p>';
            return;
        }

        dados.items.slice(0, 15).forEach(user => {
            const div = document.createElement('div')
            div.classList.add('usuario')

            div.innerHTML = `<p><strong>${user.login}</strong></p>`
            resultado.appendChild(div);
        })

    }

    catch (error) {
        resultado.innerHTML = '<p>Erro no resultado</p>'
    }
}

    botaoBusca.addEventListener('click', Buscar)
