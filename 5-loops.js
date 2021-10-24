console.log('trabalhando com condicionais')
const listaDeDestino = new Array(
    'Salvado',
    'Rio de Janeiro',
    'São Paulo'
);

const idadeComprador = 18;
const estaAcompanhado = true;
const passagemComprada = true;
const destino = 'São Paulo'
console.log('lista de destinos');
console.log(listaDeDestino);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExite = false;
while (contador < 3) {
    if (listaDeDestino[contador] == destino) {
        destinoExite = true;
        break;
    } 
    contador += 1;
}
console.log('destino exite ',destinoExite);

for(let i = 0; i < 3; i++){
    if(listaDeDestino[i] == destino){
        console.log('okok');
        break;
    }
}


