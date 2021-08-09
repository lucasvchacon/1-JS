console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
//listaDeDestinos.push(`Curitiba`);
console.log("Destinos Possíveis:");

if (idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}else{
console.log("Não é maior de idade e não posso vender");

}

console.log(listaDeDestinos);

//console.log(listaDeDestinos);
//console.log(listaDeDestinos[1], listaDeDestinos[0]);