const pessoa = {
    nome:'jonas',
    idade: 20,
    endereco:{
        rua:'alala',
        numero:200
    }
}

const { nome } = pessoa;
//const { nome ='não existe', idade } = pessoa;
const {nome: teste = ''} = pessoa;
const {endereco:{rua, numero}} = pessoa;
console.log(nome);
console.log(teste);
console.log(rua);