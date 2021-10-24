console.log('trabalhando com condicionais')
const listaDeDestino = new Array(
    'Salvado',
    'Rio de Janeiro',
    'São Paulo'
);

const idadeComprador = 18;
const estaAcompanhado = true;
const passagemComprada = true;
console.log('lista de destinos');
console.log(listaDeDestino);

// if (idadeComprador >= 18) {
//     console.log('comprador maior de idade');
//     listaDeDestino.splice(1, 1);
// } else if (estaAcompanhado == true) {
//     console.log('comprador menor de idade porém está acompanhado');
//     listaDeDestino.splice(1, 1);
// } else {
//     console.log('comprador não é maior de idade não posso vender!');
// }
//alt - shift - f -----identar cod

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log('Boa Viagem!');
    listaDeDestino.splice(1, 1);
} else {
    console.log('comprador não é maior de idade não posso vender!');
}

if (passagemComprada == true && idadeComprador >=18){
    console.log('pode embarcar para: \n\n')
}else {
    console.log('não pode embarcar!')
}

console.log(listaDeDestino);

