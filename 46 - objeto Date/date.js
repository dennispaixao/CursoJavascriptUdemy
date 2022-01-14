const date = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
console.log(date.toLocaleDateString('pt-BR', opcoes));
