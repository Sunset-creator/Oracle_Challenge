
let arrNombres = [];

//Funcion que lista amigos
function listarAmigos() {
    const listHtml = document.getElementById('listaAmigos');
    listHtml.innerHTML = '';

    for (let i = 0; i < arrNombres.length; i++) {

        const list = arrNombres[i];
        listHtml.innerHTML += `<li>${list}</li>`;
    }
}

//Funcion que agrega los amigos al vector
function agregarAmigo() {
    amigo = String(document.getElementById('amigo').value).toLocaleLowerCase();

    if (amigo === '') {
        alert('Casilla esta vacia, porfavor ingrese un nombre');

    } else {
        arrNombres.push(amigo);
        listarAmigos();
    }

    document.getElementById('amigo').value = '';

    console.log(arrNombres);
}

//Funcion que sortea a los amigos y retira el que ya ha salido en el sorteo
function sortearAmigo() {
    numMax = parseInt(arrNombres.length);

    if (arrNombres == '') {
        alert("La lista esta vacia, por favor ingrese el nombre de sus amigos");
    } else {
        let indiceAleatoreo = Math.floor(Math.random() * numMax);
        ganador = arrNombres[indiceAleatoreo];

        let indiceGanador = document.getElementById('resultado');
        indiceGanador.innerHTML = `<li>${ganador}</li>`;

        //Elimina el ganador del sorteo
        arrNombres.splice(indiceGanador, 1);

        console.log(arrNombres);

    }
}

//Funcion para reiniciar el juego sin necesidad de recargar la pagina
function restarGame() {
    arrNombres = [];
    const listHtml = document.getElementById('listaAmigos');
    listHtml.innerHTML = '';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const amigo = document.getElementById('amigo');
    amigo.innerHTML = '';
}




