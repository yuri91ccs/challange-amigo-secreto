let listaAmigos = []


function adicionarAmigos(){
    let amigoDigitado = document.getElementById('amigo');
    let nome = amigoDigitado.value.trim();
    if (nome === "") {
        alert ('Por favor, insira um nome válido.');
        return;
    }   
    listaAmigos.push(nome)
    amigoDigitado.value = "";
}
