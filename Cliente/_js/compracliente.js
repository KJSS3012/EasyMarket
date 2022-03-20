var tabela = document.getElementById('tabela');
var aux = tabela.innerHTML;
var visorfim = 0;

function adicionar_AUX(visor,id) {
    valor = Number(document.getElementById(visor).value);
    document.getElementById(visor).value = valor + 1;
    var p = produtos[id];
    var item = `<tr class="tabela-linha"><strong>Nome: </strong>${p.nome}&nbsp;<strong>Id: </strong>${p.id}`+(valor+1)+`&nbsp;<strong>Preço R$: </strong>${p.preço}</td></tr>`;
    if (valor==0) {
        tabela.innerHTML = tabela.innerHTML +item;
        calc(id+1);
    }else{
        aux.innerHTML = tabela.innerHTML + item;
        calc(id+1);
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
function remover_AUX(id,visor) {
    if (document.getElementById(visor).value>0) {
        valor = Number(document.getElementById(visor).value);
        document.getElementById(visor).value = valor - 1;
        var tabela = document.getElementById('tabela');
        var p = produtos[id-1];
        var item = `<tr class="tabela-linha"><strong>Nome: </strong>${p.nome}&nbsp;<strong>Id: </strong>${p.id}`+(valor-1)+`&nbsp;<strong>Preço R$: </strong>${p.preço}</td></tr>`;
            if (document.getElementById(visor).value<1) {
                item = `<tr class="tabela-linha"><td class="tabela-texto"></td></tr>`;
                tabela.innerHTML = item;
                calc(id);
            }else{
                tabela.innerHTML = item;
                calc(id);
                }
    }
}

function remover(codigo) {
    if (codigo == 1) {
        remover_AUX(codigo,"visor1");
    }
    if (codigo == 2) {
        remover_AUX(codigo,"visor2");
    }
    if (codigo == 3) {
        remover_AUX(codigo,"visor3");
    }
    if (codigo == 4) {
        remover_AUX(codigo,"visor4");
    }
    if (codigo == 5) {
        remover_AUX(codigo,"visor5");
    }
    if (codigo == 6) {
        remover_AUX(codigo,"visor6");
    }
    if (codigo == 7) {
        remover_AUX(codigo,"visor7");
    }
    if (codigo == 8) {
        remover_AUX(codigo,"visor8");
    }
    if (codigo == 9) {
        remover_AUX(codigo,"visor9");
    }
}

function voltar() {
    location.href = "../_html/logincliente.html"
}

var bank = [0,0,0,0,0,0,0,0,0];
var caixa = 0;

function cal_AUX(id,visor,produto) {
        valordovisor = Number(document.getElementById(visor).value);
        resultado = valordovisor * produto;
        bank[id-1] = resultado;
   }

function calc(codigo) {
    if (codigo==1) {
        cal_AUX(codigo,"visor1",macarrao.preço)
    }  
   if (codigo==2) {
    cal_AUX(codigo,"visor2", arroz.preço)
   }
   if (codigo==3) {
    cal_AUX(codigo,"visor3",feijao.preço)
    }
    if (codigo==4) {
        cal_AUX(codigo,"visor4",carne.preço)
    }
    if (codigo==5) {
        cal_AUX(codigo,"visor5",frango.preço)
    }
    if (codigo==6) {
        cal_AUX(codigo,"visor6",peixe.preço)
    }
    if (codigo==7) {
        cal_AUX(codigo,"visor7",banana.preço)
    }
    if (codigo==8) {
        cal_AUX(codigo,"visor8",maca.preço)
    }
    if (codigo==9) {
        cal_AUX(codigo,"visor9",tomate.preço)
    }
    caixa = bank[0]+bank[1]+bank[2]+bank[3]+bank[4]+bank[5]+bank[6]+bank[7]+bank[8];
    document.getElementById('visorfinal').value = (caixa).toFixed(2);
}