console.log(`Trabalhando com listas.`);
// const salvador = 'Salvador';
// const rioDeJaneiro = 'Rio de Janeiro';
// const saoPaulo = 'São Paulo';

//crtl+k+c = comenta tudo
//crtl+k+U = descomenta

const listaDeDestino = new Array(
    'Salvado',
    'Rio de Janeiro',
    'São Paulo'
);

listaDeDestino.push('Curitiba'); //adicionar um iten na lista
console.log(listaDeDestino);

listaDeDestino.splice(1,2);//Excluir iten,(posiçao,quantidade);
console.log(listaDeDestino);

console.log(listaDeDestino[1] + listaDeDestino[0]);
