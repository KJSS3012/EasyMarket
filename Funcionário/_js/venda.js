function validar() {
    
    var di = document.getElementById('prod').value
    var leitor = Number(document.getElementById('visor').value)

    for (let index = 0; index < produtos.length; index++) {
        if (produtos[index].id == di.substr(0,4)) {
            document.getElementById('prod').value = "";
            var aux = di.substr(4,di.length)
            var valor = Number(produtos[index].preço*aux)
            
            document.getElementById('visor').value = (leitor+=valor).toFixed(2)
        }
    }
}

function troco() {
    var valor = document.getElementById('prod-troco').value
    var leitor = document.getElementById('visor').value
    if ((valor-leitor)<0) {
        
    } else {
        document.getElementById('visor-troco').value = (valor-leitor).toFixed(2)
        document.getElementById('visor').value = ""
        document.getElementById('prod-troco').value = ""
    }
}