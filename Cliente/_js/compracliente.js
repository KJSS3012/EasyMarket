function adicionar_AUX(visor,id) {
    valor = Number(document.getElementById(visor).value);
    document.getElementById(visor).value = valor + 1;
    calc(id+1)
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
        calc(id)
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

function finalizar() {
    var l1 = `<tr>Macarrão&nbsp;R$ 2,40&nbsp;${document.getElementById('visor1').value}</tr>`
    var l2 = `<tr>Arroz&nbsp;R$ 3,60&nbsp;${document.getElementById('visor2').value}</tr>`
    var l3 = `<tr>Feijão&nbsp;R$ 7,50&nbsp;${document.getElementById('visor3').value}</tr>`
    var l4 = `<tr>Carne&nbsp;R$ 40,00&nbsp;${document.getElementById('visor4').value}</tr>`
    var l5 = `<tr>Frango&nbsp;R$ 10,00&nbsp;${document.getElementById('visor5').value}</tr>`
    var l6 = `<tr>Peixe&nbsp;R$ 3,60&nbsp;${document.getElementById('visor6').value}</tr>`
    var l7 = `<tr>Banana&nbsp;R$ 6,00&nbsp;${document.getElementById('visor7').value}</tr>`
    var l8 = `<tr>Maçã&nbsp;R$ 6,00&nbsp;${document.getElementById('visor8').value}</tr>`
    var l9 = `<tr>Tomate&nbsp;R$ 8,40&nbsp;${document.getElementById('visor9').value}</tr>`
    var l10 = `<tr>Total: ${document.getElementById('visorfinal').value}</tr>`
    var ltotal = l1+l2+l3+l4+l5+l6+l7+l8+l9+l10
    document.getElementById('table').innerHTML += l1;
    document.getElementById('table').innerHTML += l2;
    document.getElementById('table').innerHTML += l3;
    document.getElementById('table').innerHTML += l4;
    document.getElementById('table').innerHTML += l5;
    document.getElementById('table').innerHTML += l6;
    document.getElementById('table').innerHTML += l7;
    document.getElementById('table').innerHTML += l8;
    document.getElementById('table').innerHTML += l9;
    document.getElementById('table').innerHTML += l10;
}