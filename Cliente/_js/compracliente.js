var tabela = document.getElementById('tabela');
var aux = tabela.innerHTML;
var visorfim = 0;
function adicionar(codigo) {
    if (codigo == 1) {
        valor = Number(document.getElementById('visor1').value);
        document.getElementById('visor1').value = valor + 1;
                var p = produtos[0];
                var item = `<tr class="tabela-linha"><strong>Nome: </strong>${p.nome}&nbsp;<strong>Id: </strong>${p.id}`+(valor+1)+`&nbsp;<strong>Preço R$: </strong>${p.preço}</td></tr>`;
                if (valor==0) {
                    tabela.innerHTML = aux+item;
                    calc(codigo);
                }else{
                    aux.innerHTML = item;
                    calc(codigo);
                }
        }

    if (codigo == 2) {
        valor = Number(document.getElementById('visor2').value);
        document.getElementById('visor2').value = valor + 1;
        calc(codigo);
    }
    if (codigo == 3) {
        valor = Number(document.getElementById('visor3').value);
        document.getElementById('visor3').value = valor + 1;
        calc(codigo);
    }
    if (codigo == 4) {
        valor = Number(document.getElementById('visor4').value);
        document.getElementById('visor4').value = valor + 1;
        calc(codigo);
    }
    if (codigo == 5) {
        valor = Number(document.getElementById('visor5').value);
        document.getElementById('visor5').value = valor + 1;
        calc(codigo);
    }
    if (codigo == 6) {
        valor = Number(document.getElementById('visor6').value);
        document.getElementById('visor6').value = valor + 1;
        calc(codigo);
    }
    if (codigo == 7) {
        valor = Number(document.getElementById('visor7').value);
        document.getElementById('visor7').value = valor + 1;
        calc(codigo);
    }
    if (codigo == 8) {
        valor = Number(document.getElementById('visor8').value);
        document.getElementById('visor8').value = valor + 1;
        calc(codigo);
    }
    if (codigo == 9) {
        valor = Number(document.getElementById('visor9').value);
        document.getElementById('visor9').value = valor + 1;
        calc(codigo);
    }
}

function remover(codigo) {
    if (codigo == 1 && document.getElementById('visor1').value>0) {
        valor = Number(document.getElementById('visor1').value);
        document.getElementById('visor1').value = valor - 1;
        var tabela = document.getElementById('tabela');
        var item = `<tr class="tabela-linha"><strong>Nome: </strong>Macarrão&nbsp;<strong>Id: </strong> 0010`+(valor-1)+`&nbsp;<strong>Preço R$: </strong> 2,4</tr>`;
            if (document.getElementById('visor1').value<1) {
                item = `<tr class="tabela-linha"><td class="tabela-texto"></td></tr>`;
                tabela.innerHTML = item;
                calc(codigo);
            }else{
                tabela.innerHTML = item;
                calc(codigo);
                }
    }
    if (codigo == 2 && document.getElementById('visor2').value>0) {
        valor = Number(document.getElementById('visor2').value);
        document.getElementById('visor2').value = valor - 1;
        calc(codigo);
    }
    if (codigo == 3 && document.getElementById('visor3').value>0) {
        valor = Number(document.getElementById('visor3').value);
        document.getElementById('visor3').value = valor - 1;
        calc(codigo);
    }
    if (codigo == 4 && document.getElementById('visor4').value>0) {
        valor = Number(document.getElementById('visor4').value);
        document.getElementById('visor4').value = valor - 1;
        calc(codigo);
    }
    if (codigo == 5 && document.getElementById('visor5').value>0) {
        valor = Number(document.getElementById('visor5').value);
        document.getElementById('visor5').value = valor - 1;
        calc(codigo);
    }
    if (codigo == 6 && document.getElementById('visor6').value>0) {
        valor = Number(document.getElementById('visor6').value);
        document.getElementById('visor6').value = valor - 1;
        calc(codigo);
    }
    if (codigo == 7 && document.getElementById('visor7').value>0) {
        valor = Number(document.getElementById('visor7').value);
        document.getElementById('visor7').value = valor - 1;
        calc(codigo);
    }
    if (codigo == 8 && document.getElementById('visor8').value>0) {
        valor = Number(document.getElementById('visor8').value);
        document.getElementById('visor8').value = valor - 1;
        calc(codigo);
    }
    if (codigo == 9 && document.getElementById('visor9').value>0) {
        valor = Number(document.getElementById('visor9').value);
        document.getElementById('visor9').value = valor - 1;
        calc(codigo);
    }
}

function voltar() {
    location.href = "../_html/logincliente.html"
}

v1 = 0 ; v2 = 0; v3 = 0; v4 = 0; v5 = 0; v6 = 0; v7 = 0; v8 = 0; v9 = 0;
function calc(codigo) {
   if (codigo==1) {
        valordovisor = Number(document.getElementById('visor1').value);
        resultado = valordovisor * macarrao.preço;
        v1 = resultado
   }
   if (codigo==2) {
        valordovisor = Number(document.getElementById('visor2').value);
        resultado = valordovisor * arroz.preço;
        v2 = resultado
   }
   if (codigo==3) {
    valordovisor = Number(document.getElementById('visor3').value);
    resultado = valordovisor * feijao.preço;
    v3 = resultado
    }
    if (codigo==4) {
        valordovisor = Number(document.getElementById('visor4').value);
        resultado = valordovisor * carne.preço;
        v4 = resultado
    }
    if (codigo==5) {
        valordovisor = Number(document.getElementById('visor5').value);
        resultado = valordovisor * frango.preço;
        v5 = resultado
    }
    if (codigo==6) {
        valordovisor = Number(document.getElementById('visor6').value);
        resultado = valordovisor * peixe.preço;
        v6 = resultado
    }
    if (codigo==7) {
        valordovisor = Number(document.getElementById('visor7').value);
        resultado = valordovisor * banana.preço;
        v7 = resultado
    }
    if (codigo==8) {
        valordovisor = Number(document.getElementById('visor8').value);
        resultado = valordovisor * maca.preço;
        v8 = resultado
    }
    if (codigo==9) {
        valordovisor = Number(document.getElementById('visor9').value);
        resultado = valordovisor * tomate.preço;
        v9 = resultado
    }
   document.getElementById('visorfinal').value = (v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9);
   
}