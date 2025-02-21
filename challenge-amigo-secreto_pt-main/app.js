let listaAmigoSecreto = []


function adicionarAmigo(){
    const amigoDigitado = document.getElementById('amigo');
    const nome = amigoDigitado.value.trim();

    if (nome === "") {
        alert ('Por favor, insira um nome válido.');
        return;
    }   

    if (listaAmigoSecreto.includes(nome)) {
        alert ('Este nome já foi adicionado à lista.');
        return;
    }

    listaAmigoSecreto.push (nome);
    amigoDigitado.value = "";

    atualizarLista ();
}

function atualizarLista(){
    const listaAmigoOculto = document.getElementById ('listaAmigos');
    listaAmigoOculto.innerHTML = '';

   listaAmigoSecreto.forEach(amigo =>{
    const nomeNaLista = document.createElement ('li');
    nomeNaLista.textContent = amigo;
    listaAmigoOculto.appendChild(nomeNaLista);
    //corrigir nomes
   })
}
