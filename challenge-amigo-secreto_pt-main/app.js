let listaAmigoSecreto = []


function adicionarAmigos(){
    const amigoDigitado = document.getElementById('amigo');
    const nome = amigoDigitado.value.trim();

    if (nome === "") {
        alert ('Por favor, insira um nome válido.');
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
