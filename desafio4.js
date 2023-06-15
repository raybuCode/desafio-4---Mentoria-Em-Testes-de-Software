function criarListaPessoas() {
    let listaPessoas = [];

    function addPessoa(nome, idade, email) {
        let pessoa = {
            nome: nome,
            idade: idade,
            email: email
        };
        listaPessoas.push(pessoa);
    }
    // Adicionar pessoas à lista
    addPessoa('rayanne', 30, 'rso@gmail.com');
    addPessoa('Pedro', 12, 'pedroo@gmail.com');
    addPessoa('Luzia', 17, 'lulu@gmail.com');
    addPessoa('Jessica', 9, 'jessica@gmail.com');
    addPessoa('Joao', 21, 'jojo@gmail.com');
    return listaPessoas;
}
// Chamar a função para criar a lista de pessoas
let lista = criarListaPessoas();
console.log(lista);

function verificarIdade(pessoa) {
    if (pessoa.idade > 18) {
        console.log(pessoa.nome + " é adulto");
    } else
        if (pessoa.idade >= 12) {
            console.log(pessoa.nome + " é adolescente");
        } else {
            console.log(pessoa.nome + " é criança");
        }
}
lista.forEach(function (pessoa) {
    verificarIdade(pessoa);
});

let quantidadePessoas = lista.length;
console.log('Quantidade de pessoas:', quantidadePessoas);
