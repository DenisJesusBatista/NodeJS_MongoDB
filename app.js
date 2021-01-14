
var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor,{ useUnifiedTopology:true },function (erro,db) {
    
    if(erro)
        console.log("Erro ao estabelecer conexão: "+erro);
    else
        console.log("Conexão estabelecida com sucesso.");


    /*
        1- Inserção de registro no banco de dados MongoDB

            1.1- Inserção de um único registro no banco de dados

            var topico = {
            titulo: "Erro de compilação",
            conteudo: "Não consigo compilar meu projeto",
            tags: ["Java", "Android", "Mobile"]
            };

    
            var colecao = db.collection("topicos");    

            colecao.insertOne(topico, function (erro, resultado) {
                if(erro)
                    console.log("Erro ao inserir documento" + erro);
                else
                    console.log("Documento inserido com sucesso");
                
            });

            
            1.2- Inserção de vários registros no banco de dados


            var usuarios = [
                { login: "Joel", senha: "123"},
                { login: "Antonio", senha: "456"},
                { login: "Maria", senha: "789"}
            ];

            var colecao = db.collection("usuarios");


            colecao.insertMany(usuarios, function (erro, resultado) {
                if(erro)
                    console.log("Erro ao inserir documento" + erro);
                else
                    console.log(resultado.insertedCount +  " documento inserido com sucesso");
                
            });        
            
            
        2- Atualização de registro no banco de dados MongoDB
            2.1- Atualização de um único registro no banco de dados

            var usuario = {
            login: "Maria",
            senha: "1234567890"
            };

            var colecao = db.collection("usuarios");

            var filtro = {login: "Maria"};

            colecao.updateOne(filtro,usuario,function(erro, resultado){
                if(erro)
                    console.log("Erro ao atualizar documento: " + erro);
                else
                    console.log("Documento atualizado com sucesso");
            });


            2.2- Atualização de vários registros no banco de dados

            var colecao = db.collection("usuarios");

            var filtro = {};

            var alteracao = { $set : { ativo: true } };

            colecao.updateMany(filtro, alteracao, function(erro, resultado){
                if(erro)
                    console.log("Erro ao atualizar documentos" + erro);
                else
                    console.log("Documentos atualizados com sucesso");
            });
        
        3- Deletar registro no banco de dados MongoDB

            3.1- Deletando um único registro no banco de dados
            
            var colecao = db.collection("usuarios");

            var filtro = { login: "Joel"};

            var alteracao = { $set : { ativo: true } };

            colecao.deleteOne(filtro, function(erro, resultado){
                if(erro)
                    console.log("Erro ao remover documento" + erro);
                else
                    console.log("Documentos removido com sucesso");
            });

            3.2- Deletando vários no registros no banco de dados

            var colecao = db.collection("usuarios");

            var filtro = { ativo : true };
            

            colecao.deleteMany(filtro, function(erro, resultado){
                if(erro)
                    console.log("Erro ao remover documentos" + erro);
                else
                    console.log("Documentos removidos com sucesso");

            });

        4-Listagem de documento
            4.1- Listagem de todos os documentos.

            var colecao = db.collection("topicos");

            var filtro = {}

            colecao.find(filtro).toArray(function(erro, documentos){
                console.log(documentos)
            }),            

            4.2- Listagem por campo.

            var colecao = db.collection("topicos");

            var filtro = {}

            colecao.find(filtro).toArray(function(erro, documentos){
                documentos.forEach( function(doc) {
                    console.log("Titulo: " + doc.titulo);
                    console.log("Conteudo: " + doc.conteudo);
                    console.log("Tags: " + doc.tags);
                    console.log("...");

                }.this);
            });


            4.3- Filtrar um documento especifico.

            var colecao = db.collection("topicos");

            var filtro = { id: "5fff4a0f26b35546a0a15401" }

            colecao.find(filtro).toArray(function(erro, documentos){
                documentos.forEach( function(doc) {
                    console.log("Titulo: " + doc.titulo);
                    console.log("Conteudo: " + doc.conteudo);
                    console.log("Tags: " + doc.tags);
                    console.log("...");

                }.this);
            });

            4.4- Para filtrar um campo texto, precisa ser criado um indice, 
            conforme exemplo abaixo.

            var colecao = db.collection("topicos");

            var indice = { conteudo = "text"}

            colecao.createIndex(indice);

            var filtro = { $text: { $search : "Eclipse"} };

            colecao.find(filtro).toArray(function(erro, documentos){
                documentos.forEach( function(doc) {
                    console.log("Titulo: " + doc.titulo);
                    console.log("Conteudo: " + doc.conteudo);
                    console.log("Tags: " + doc.tags);
                    console.log("...");

                }.this);
            });

        

   
    */

   

   db.close(); 
});