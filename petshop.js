let pets = [
    {
        nome: "Zeus"
    },
    {
        nome: "Lua"
    }
];

const listarPets = () => {
    let conteudo = "";

    for (const pet of pets) {
        conteudo += `
        -----------------
        ${pet.nome}
        -----------------`;
    }

    return conteudo;
}

const adicionarPet = (pet) => {
   return pets.push(pet);
}

const buscarPet = (nome) => {
    return pets.filter( (pet) => {
        return pet.nome.toLowerCase() === nome.toLowerCase();
    });
}
module.exports = {listarPets, adicionarPet, buscarPet};