function sortear(){

    let quantidade = document.getElementById('quantidade').value;
    let de = parceInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero = obterNumeroAleatorio(de, ate);
    alert(numero);


}

function obterNumeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}