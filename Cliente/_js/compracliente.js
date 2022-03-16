var tabela = document.getElementById('tabela');
var aux = tabela.innerHTML;
var visorfim = 0;

function adicionar_AUX(visor,id) {
    valor = Number(document.getElementById(visor).value);
    document.getElementById(visor).value = valor + 1;
    var p = produtos[id];
    var item = `<tr class="tabela-linha"><strong>Nome: </strong>${p.nome}&nbsp;<strong>Id: </strong>${p.id}`+(valor+1)+`&nbsp;<strong>Preço R$: </strong>${p.preço}</td></tr>`;
    console.log(valor);
    if (valor==0) {
        tabela.innerHTML = tabela.innerHTML + aux+item;
        calc(codigo);
    }else{
        aux.innerHTML = tabela.innerHTML + item;
        calc(codigo);
        valor++;
    }
}

function adicionar(codigo) {
    if (codigo == 1) {
        adicionar_AUX("visor1", 0)
    }

    if (codigo == 2) {
        adicionar_AUX("visor2", 1)
    }
    if (codigo == 3) {
        adicionar_AUX("visor3", 2)

    }
    if (codigo == 4) {
        adicionar_AUX("visor4", 3)
    }
    if (codigo == 5) {
        adicionar_AUX("visor5", 4)
    }
    if (codigo == 6) {
        adicionar_AUX("visor6", 5)
    }
    if (codigo == 7) {
        adicionar_AUX("visor7", 6)
    }
    if (codigo == 8) {
        adicionar_AUX("visor8", 7)
    }
    if (codigo == 9) {
        adicionar_AUX("visor9", 8)
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
bank[9]
caixa = 0;

function cal_AUX(codigo,id,visor,produto) {
    if (codigo==id) {
        valordovisor = Number(document.getElementById(visor).value);
        resultado = valordovisor * produto.preço;
        bank[id-1] = resultado;
        console.log(resultado)
   }
}

function calc(codigo) {
    cal_AUX(codigo,1,"visor1",macarrao)
       
   
   if (codigo==2) {
    cal_AUX(codigo,"visor2", arroz)
   }
   if (codigo==3) {
    cal_AUX(codigo,"visor3",feijao)
    }
    if (codigo==4) {
        cal_AUX(codigo,"visor4",carne)
    }
    if (codigo==5) {
        cal_AUX(codigo,"visor5",frango)
    }
    if (codigo==6) {
        cal_AUX(codigo,"visor6",peixe)
    }
    if (codigo==7) {
        cal_AUX(codigo,"visor7",banana)
    }
    if (codigo==8) {
        cal_AUX(codigo,"visor8",maca)
    }
    if (codigo==9) {
        cal_AUX(codigo,"visor9",tomate)
    }
   
   for (let index = 0; index < bank.length; index++) {
       caixa+= bank[index]
   }
   document.getElementById('visorfinal').value = (caixa).toFixed(2);
}