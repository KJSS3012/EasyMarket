function processar_AUX(radio, visor, tabela) {
    var opc = document.getElementsByName(radio)
    var num = Number(document.getElementById(visor).value)
    var aux = Number(document.getElementById(tabela).innerText)

        if (opc[0].checked) {
           document.getElementById(tabela).innerHTML = (aux+=num)
            
        } else if(opc[1].checked) {
            if ((aux-num)<0) {

            } else{
                document.getElementById(tabela).innerHTML = (aux-=num)
        }
    }
}   

function processar() {
    processar_AUX("selecionar1","1","qnt1")
    processar_AUX("selecionar2","2","qnt2")
    processar_AUX("selecionar3","3","qnt3")
    processar_AUX("selecionar4","4","qnt4")
    processar_AUX("selecionar5","5","qnt5")
    processar_AUX("selecionar6","6","qnt6")
    processar_AUX("selecionar7","7","qnt7")
    processar_AUX("selecionar8","8","qnt8")
    processar_AUX("selecionar9","9","qnt9")
}