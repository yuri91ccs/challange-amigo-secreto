let listaAmigoSecreto = [];
 

function adicionarAmigo(){
    let amigoDigitado = document.getElementById('amigo');
    let nome = amigoDigitado.value.trim();

    if (nome === "") {
        alert ('Por favor, insira um nome válido!');
        return;
    }   

    if (listaAmigoSecreto.includes(nome)) {
        alert ('Este nome já foi adicionado à lista!');
        return;
    }

    listaAmigoSecreto.push (nome);
    amigoDigitado.value = "";

    atualizarLista ();
}

function atualizarLista(){
    let listaAmigoOculto = document.getElementById ('listaAmigos');
    listaAmigoOculto.innerHTML = '';

   listaAmigoSecreto.forEach(amigo =>{
    let nomeNaLista = document.createElement ('li');
    nomeNaLista.textContent = amigo;
    listaAmigoOculto.appendChild(nomeNaLista);
    //corrigir nomes
   })
}

function sortearAmigo() {
    if (listaAmigoSecreto.length < 2) {
        alert ('É necessário ao menos 2 amigos para sortear!');
        return;
    }

    let nomeAleatório = Math.floor(Math.random() *listaAmigoSecreto.length);
    let amigoSorteado = listaAmigoSecreto[nomeAleatório];

    let resultadoDoSorteio = document.getElementById('resultado');
    resultadoDoSorteio.innerHTML = `O amigo sorteado é: ${amigoSorteado}.`

     // Removendo o amigo sorteado da lista
     listaAmigoSecreto.splice(nomeAleatório, 1);

    

     // Atualizando a lista de amigos na interface
     atualizarLista();

}

   
