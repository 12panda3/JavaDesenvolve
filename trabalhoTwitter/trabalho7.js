document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm")
    const postText = document.getElementById("postText")
    const linhaTempo = document.getElementById("linhaTempo")
    let posts = []

    postForm.addEventListener("submit", async (n) => {
        n.preventDefault()

        const texto = postText.value.trim()
        if (texto === "") return;

        const imagemGato = await pegarGato()
        const novoPost = {
            data: new Date(),
            usuario: "exemploXX",
            avatar: "https://i.pravatar.cc/50",
            text: texto,
            image: imagemGato,
            likes: 0
        }

        posts.unshift(novoPost)
        renderizarLinha()
        postText.value = ""
    })

    async function pegarGato() {
        try {
            const link = await fetch("https://api.thecatapi.com/v1/images/search")
            const dados = await link.json()
            return dados[0].url
        } catch (error) {
            console.error("Erro ao buscar imagem")
        }
    }

    function renderizarLinha() {
        linhaTempo.innerHTML = ""
        posts.forEach((post, index) => {
            const postElemento = document.createElement("div");
            postElemento.classList.add("post");

            postElemento.innerHTML = `
                <div class="post-header">
                    <img src="${post.avatar}" class="post-avatar">
                    <strong>${post.username}</strong>
                </div>
                <p class="post-content">${post.text}</p>
                <img src="${post.image}">
                <button class="like-button" onclick="likePost(${index})">❤️ ${post.likes}</button>
            `

            linhaTempo.appendChild(postElemento);
        })
    }

    window.likePost = (index) => {
        posts[index].likes++
        renderizarLinha()
    };
});
