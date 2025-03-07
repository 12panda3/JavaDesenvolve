let tarefas = []

const listaTarefas = document.getElementById('listaTarefas')
const botaoAdd = document.getElementById('botaoAdd')
const botaoRemove = document.getElementById('botaoRemove')
const addTarefa = document.getElementById('addTarefa')


function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    salvarTarefas();
    mostrarTarefas();
}

function adicionarTarefa() {
    let desc = addTarefa.value.trim()
    if (desc) {
        tarefas.push({ descricao: desc, status: false})
        addTarefa.value = ''
        salvarTarefas()
        mostrarTarefas()
    } 
}

function onoffTarefa(index) {
    tarefas[index].status = !tarefas[index].status
        salvarTarefas()
        mostrarTarefas()
}

function mostrarTarefas() {
    listaTarefas.innerHTML = ''

    tarefas.forEach ((tarefa, index) => {
        const boxTarefa = document.createElement('div')
        boxTarefa.classList.add('box-tarefa')

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = tarefa.status
        checkbox.onclick = () => onoffTarefa(index)

        let textoTarefa = document.createElement('span')
        textoTarefa.textContent = tarefa.descricao
        textoTarefa.classList.toggle('completo', tarefa.status)

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = '❌';
        botaoExcluir.classList.add('botao-excluir');
        botaoExcluir.onclick = () => removerTarefa(index);

        boxTarefa.appendChild(checkbox)
        boxTarefa.appendChild(textoTarefa)
        boxTarefa.appendChild(botaoExcluir)
        listaTarefas.appendChild(boxTarefa)
    })
}

botaoAdd.addEventListener('click', adicionarTarefa)

botaoRemove.addEventListener('click', () => {
    tarefas = []
    removerTarefa()
    mostrarTarefas()
})

mostrarTarefas()
