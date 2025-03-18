// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creacion de el arreglo que contendra a los amigos 

let listAmigos = [];

function agregarAmigo(){
    document.getElementById('btnNuevoJuego').setAttribute('disabled',true);
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    if(!nombreAmigo){
        alert('Debes ingresar un nombre');
        return;
    }else if(listAmigos.includes(nombreAmigo)){
        alert('Amigo duplicado \nRealiza una modificacion para evitar confusiones');
        return;
    }
    listAmigos.push(nombreAmigo);
    inputAmigo.value ='';
    inputAmigo.focus();
    actualizarLista();
    
}

 function actualizarLista(){
    document.getElementById('resultado').innerHTML='';
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i =0; i<listAmigos.length; i++){
        let li = document.createElement('li');
        li.textContent = listAmigos[i];
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo(){
    if(listAmigos.length === 0){
        alert('Favor de agregar amigos');
        return;
    }
    document.getElementById('amigo').value='';
    let resultado = document.getElementById('resultado');
    let amigoGanador = listAmigos[ Math.floor(Math.random()*listAmigos.length)];
    let listaAmigos  = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    resultado.innerHTML = `El amigo sorteado es: ${amigoGanador}` 
    resultado.classList.add('texto');
    document.getElementById('btnNuevoJuego').removeAttribute('disabled');
}

function nuevoJuego(){
    document.getElementById('btnNuevoJuego').setAttribute('disabled',true);
    listAmigos.length =0;
    let res = document.getElementById('resultado');
    res.innerHTML = '';
    res.classList.remove('texto');
    console.log(listAmigos);
    let amigo =document.getElementById('amigo');
    amigo.value='';
    amigo.focus();
}


