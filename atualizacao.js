var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/db_devmedia';

MongoClient.connect(servidor, function(erro, db) {
    if(erro)
        console.log("Erro ao estabelecer conexão:" + erro);
    else  
        console.log("Conexão estabelecida com sucesso.");

    var colecao = db.collection("clientes");   

    /*Propriedades:
        $set - Alterar o registro
        $inc - Incrementar um valor
        $uset - Remover a propriedade ponto
    */
    colecao.updateOne({codigo : 1}, {$set : { "endereco.numero" : "999"}}, function(erro, resultado){
      if(erro)
          console.log("Erro ao atualizar documento: " + erro);
      else    
          console.log("Documento atualizado com sucesso");
    });

    db.close();
});