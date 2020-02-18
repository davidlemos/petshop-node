const http = require('http');
const url = require('url');
const petShop = require('./petshop');

const server = http.createServer((req, res) => {
   
    res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8', 'viewport': 'width=device-width, initial-scale=1'})
    
    let urlCompleta = url.parse(req.url, true); //retorna objeto com partes da url
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;

    switch(rota){
        case '/pets':
            const pets = petShop.listarPets();            
            res.write(pets.length>0 ? pets : 'Nenhum pet cadastrado.');
            break;
        case '/pets/add':
            let pet = queryString;
            if(petShop.adicionarPet(pet))
                res.write(`${pet.nome} foi adicionado com sucesso!`);
            else
                res.write(`Ocorreu um erro ao adicionar ${pet.nome}!`);    
            break;
        case '/pets/buscar':
            let petsEncontrados = petShop.buscarPet(queryString.nome);
            res.write(petsEncontrados.length > 0? `Foram encontrados ${petsEncontrados.length} com o nome ${queryString.nome}` : "Opps! Não foram encontrados pets com esse nome.");
            break;
        default:
            res.write('** Bem-vindo ao PetShop **');
    }

    res.end();
}).listen(3000, 'localhost', ()=>{
    console.log('servidor foi iniciado!');    
});